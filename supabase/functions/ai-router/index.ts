import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Missing authorization" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      { global: { headers: { Authorization: authHeader } } }
    );

    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { prompt, module } = await req.json();

    if (!prompt || !module) {
      return new Response(JSON.stringify({ error: "Missing prompt or module" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Route to the appropriate AI engine based on module
    const result = await routeToEngine(module, prompt);

    // Log API usage
    const serviceClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    await serviceClient.from("api_usage").insert({
      user_id: user.id,
      module,
      tokens_used: result.tokensUsed,
      cost: result.cost,
    });

    await serviceClient.from("activity_logs").insert({
      user_id: user.id,
      action: "ai_request",
      details: { module, prompt_length: prompt.length },
    });

    return new Response(JSON.stringify({ data: result.response }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

// AI Router — select the best engine per module
async function routeToEngine(
  module: string,
  prompt: string
): Promise<{ response: string; tokensUsed: number; cost: number }> {
  // Engine mapping (extend with real API calls)
  const engineMap: Record<string, string> = {
    marketing: "gemini",
    legal: "gemini",
    inventory: "llama",
    voice: "whisper",
    email: "gemini",
    data: "llama",
    logistics: "llama",
    documents: "gemini",
  };

  const engine = engineMap[module] ?? "gemini";

  // Placeholder — replace with real AI API calls
  const response = `[${engine}] Processed "${prompt.slice(0, 50)}..." for module "${module}"`;
  const tokensUsed = Math.ceil(prompt.length / 4);
  const cost = tokensUsed * 0.000002;

  return { response, tokensUsed, cost };
}
