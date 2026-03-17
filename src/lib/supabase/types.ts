export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          company: string | null;
          role: "user" | "admin";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          company?: string | null;
          role?: "user" | "admin";
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          company?: string | null;
          role?: "user" | "admin";
          created_at?: string;
          updated_at?: string;
        };
      };
      projects: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          description: string | null;
          module: string;
          status: "active" | "paused" | "completed";
          config: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          description?: string | null;
          module: string;
          status?: "active" | "paused" | "completed";
          config?: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          description?: string | null;
          module?: string;
          status?: "active" | "paused" | "completed";
          config?: Json;
          created_at?: string;
          updated_at?: string;
        };
      };
      activity_logs: {
        Row: {
          id: string;
          user_id: string;
          project_id: string | null;
          action: string;
          details: Json;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          project_id?: string | null;
          action: string;
          details?: Json;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          project_id?: string | null;
          action?: string;
          details?: Json;
          created_at?: string;
        };
      };
      api_usage: {
        Row: {
          id: string;
          user_id: string;
          module: string;
          tokens_used: number;
          cost: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          module: string;
          tokens_used: number;
          cost: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          module?: string;
          tokens_used?: number;
          cost?: number;
          created_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      get_user_usage_stats: {
        Args: { p_user_id: string };
        Returns: {
          total_tokens: number;
          total_cost: number;
          module_breakdown: Json;
        }[];
      };
    };
    Enums: {
      user_role: "user" | "admin";
      project_status: "active" | "paused" | "completed";
    };
  };
}

// Helper types
export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];
export type InsertTables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Insert"];
export type UpdateTables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Update"];

export type Profile = Tables<"profiles">;
export type Project = Tables<"projects">;
export type ActivityLog = Tables<"activity_logs">;
export type ApiUsage = Tables<"api_usage">;
