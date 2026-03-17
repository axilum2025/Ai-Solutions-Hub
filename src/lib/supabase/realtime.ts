"use client";

import { useEffect, useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import type { RealtimeChannel, RealtimePostgresChangesPayload } from "@supabase/supabase-js";

type ChangeEvent = "INSERT" | "UPDATE" | "DELETE";

/**
 * Subscribe to real-time changes on a Supabase table.
 *
 * @example
 * const { data, loading } = useRealtimeTable<Project>("projects", {
 *   filter: `user_id=eq.${user.id}`,
 *   event: "INSERT",
 * });
 */
export function useRealtimeTable<T extends Record<string, unknown>>(
  table: string,
  options?: {
    filter?: string;
    event?: ChangeEvent | "*";
    schema?: string;
    orderBy?: { column: string; ascending?: boolean };
  }
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const event = options?.event ?? "*";
  const schema = options?.schema ?? "public";
  const filter = options?.filter;
  const orderColumn = options?.orderBy?.column ?? "created_at";
  const orderAsc = options?.orderBy?.ascending ?? false;

  const fetchInitial = useCallback(async () => {
    const supabase = createClient();
    let query = supabase.from(table).select("*");

    if (filter) {
      // Parse simple filter like "user_id=eq.abc123"
      const [col, rest] = filter.split("=");
      const [op, val] = rest.split(".");
      if (op === "eq") query = query.eq(col, val);
    }

    query = query.order(orderColumn, { ascending: orderAsc });

    const { data: rows, error: fetchError } = await query;
    if (fetchError) {
      setError(fetchError.message);
    } else {
      setData((rows as T[]) ?? []);
    }
    setLoading(false);
  }, [table, filter, orderColumn, orderAsc]);

  useEffect(() => {
    fetchInitial();

    const supabase = createClient();

    const channelConfig: Record<string, string> = {
      event,
      schema,
      table,
    };
    if (filter) channelConfig.filter = filter;

    const channel: RealtimeChannel = supabase
      .channel(`realtime:${table}`)
      .on(
        "postgres_changes" as never,
        channelConfig,
        (payload: RealtimePostgresChangesPayload<T>) => {
          if (payload.eventType === "INSERT") {
            setData((prev) => [payload.new as T, ...prev]);
          } else if (payload.eventType === "UPDATE") {
            setData((prev) =>
              prev.map((item) =>
                (item as Record<string, unknown>).id === (payload.new as Record<string, unknown>).id
                  ? (payload.new as T)
                  : item
              )
            );
          } else if (payload.eventType === "DELETE") {
            setData((prev) =>
              prev.filter(
                (item) =>
                  (item as Record<string, unknown>).id !== (payload.old as Record<string, unknown>).id
              )
            );
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchInitial, event, schema, table, filter]);

  return { data, loading, error, refetch: fetchInitial };
}

/**
 * Subscribe to real-time presence (online users, cursors, etc.).
 *
 * @example
 * const { presenceState } = useRealtimePresence("room:dashboard", {
 *   user_id: user.id,
 *   email: user.email,
 * });
 */
export function useRealtimePresence<T extends Record<string, unknown>>(
  channelName: string,
  userState: T
) {
  const [presenceState, setPresenceState] = useState<Record<string, T[]>>({});

  useEffect(() => {
    const supabase = createClient();

    const channel = supabase.channel(channelName, {
      config: { presence: { key: (userState as Record<string, unknown>).user_id as string ?? "anon" } },
    });

    channel
      .on("presence", { event: "sync" }, () => {
        setPresenceState(channel.presenceState() as Record<string, T[]>);
      })
      .subscribe(async (status) => {
        if (status === "SUBSCRIBED") {
          await channel.track(userState);
        }
      });

    return () => {
      supabase.removeChannel(channel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channelName]);

  return { presenceState };
}

/**
 * Subscribe to a broadcast channel for custom real-time events.
 *
 * @example
 * const { broadcast } = useRealtimeBroadcast("notifications", (payload) => {
 *   console.log("New notification:", payload);
 * });
 * broadcast("new-message", { text: "Hello!" });
 */
export function useRealtimeBroadcast(
  channelName: string,
  onMessage: (payload: { event: string; payload: Record<string, unknown> }) => void
) {
  const [channel, setChannel] = useState<RealtimeChannel | null>(null);

  useEffect(() => {
    const supabase = createClient();

    const ch = supabase
      .channel(channelName)
      .on("broadcast", { event: "*" }, (payload) => {
        onMessage(payload as unknown as { event: string; payload: Record<string, unknown> });
      })
      .subscribe();

    setChannel(ch);

    return () => {
      supabase.removeChannel(ch);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channelName]);

  const broadcast = useCallback(
    async (event: string, payload: Record<string, unknown>) => {
      if (channel) {
        await channel.send({ type: "broadcast", event, payload });
      }
    },
    [channel]
  );

  return { broadcast };
}
