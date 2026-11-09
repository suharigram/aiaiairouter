import { apiUrl } from "@/lib/env";

export type DocBlock =
  | { type: "text"; value: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "code"; language: string; code: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "note"; value: string };

export type DocSection = { heading: string; blocks: DocBlock[] };
export type DocPage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: DocSection[];
};

export const docs: DocPage[] = [
  {
    slug: "quickstart",
    title: "Quickstart",
    description: "Create a key, configure an OpenAI-compatible client, and make your first AiAiAiRouter request.",
    intro: "Make your first model request with a console API key and the OpenAI SDK or cURL. The examples below use Qwen Plus, but you can substitute another model ID from the catalog.",
    sections: [
      {
        heading: "1. Create your credentials",
        blocks: [
          { type: "text", value: "Create an account in the console and add prepaid credits. Create a separate API key for each application or environment. Keys are secrets: store them in your server environment, not in source control or client-side JavaScript." },
          { type: "code", language: "bash", code: "export AIAIAIROUTER_API_KEY=\"your_api_key\"" },
          { type: "note", value: "The full key is shown only when it is created. If it is exposed, revoke it in the console and create a replacement." },
        ],
      },
      {
        heading: "2. Send a chat completion",
        blocks: [
          { type: "text", value: "Use the AiAiAiRouter base URL and your gateway key. The request body follows the OpenAI chat completions shape." },
          { type: "code", language: "bash", code: `curl ${apiUrl}/chat/completions \\
  -H "Authorization: Bearer $AIAIAIROUTER_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen-plus",
    "messages": [
      {"role": "system", "content": "You are a concise assistant."},
      {"role": "user", "content": "What is an API gateway?"}
    ]
  }'` },
          { type: "code", language: "python", code: `import os
from openai import OpenAI

client = OpenAI(
    api_key=os.environ["AIAIAIROUTER_API_KEY"],
    base_url="${apiUrl}",
)

response = client.chat.completions.create(
    model="qwen-plus",
    messages=[
        {"role": "system", "content": "You are a concise assistant."},
        {"role": "user", "content": "What is an API gateway?"},
    ],
)

print(response.choices[0].message.content)` },
        ],
      },
      {
        heading: "3. Read the response",
        blocks: [
          { type: "text", value: "A successful response contains generated choices and token usage. This is an illustrative response; model text, IDs, and counts vary by request." },
          { type: "code", language: "json", code: `{
  "id": "chatcmpl_01JEXAMPLE",
  "object": "chat.completion",
  "created": 1794096000,
  "model": "qwen-plus",
  "choices": [{
    "index": 0,
    "message": {
      "role": "assistant",
      "content": "An API gateway gives applications one consistent entry point for routing requests to backend services or models."
    },
    "finish_reason": "stop"
  }],
  "usage": {
    "prompt_tokens": 24,
    "completion_tokens": 21,
    "total_tokens": 45
  }
}` },
          { type: "text", value: "Next, read Authentication to protect your key, Streaming for incremental responses, and Billing and Usage to reconcile token charges." },
        ],
      },
    ],
  },
  {
    slug: "authentication",
    title: "Authentication",
    description: "Authenticate AiAiAiRouter API requests with bearer tokens and keep API keys secure.",
    intro: "Every API request must include an active AiAiAiRouter API key. Authentication identifies your account so the gateway can apply access controls, limits, and billing.",
    sections: [
      {
        heading: "Bearer authentication",
        blocks: [
          { type: "text", value: "Send the key in the HTTP Authorization header using the Bearer scheme. Use HTTPS for every request. Keys supplied in query strings are not accepted." },
          { type: "code", language: "http", code: `Authorization: Bearer $AIAIAIROUTER_API_KEY
Content-Type: application/json` },
          { type: "code", language: "bash", code: `curl ${apiUrl}/models \\
  -H "Authorization: Bearer $AIAIAIROUTER_API_KEY"` },
        ],
      },
      {
        heading: "Successful and failed authentication",
        blocks: [
          { type: "text", value: "A valid key allows the request to proceed. A model listing response has the following shape." },
          { type: "code", language: "json", code: `{
  "object": "list",
  "data": [
    {"id": "qwen-plus", "object": "model", "owned_by": "alibaba-cloud"}
  ]
}` },
          { type: "text", value: "Missing, malformed, revoked, and invalid keys return HTTP 401. Do not retry indefinitely: restore valid credentials first." },
          { type: "code", language: "json", code: `{
  "error": {
    "type": "authentication_error",
    "code": "invalid_api_key",
    "message": "The API key is missing, invalid, or revoked.",
    "request_id": "req_01JEXAMPLE"
  }
}` },
        ],
      },
      {
        heading: "Operational security",
        blocks: [
          { type: "list", items: ["Keep keys on trusted servers and in a secrets manager where available.", "Use separate keys for development, staging, and production.", "Rotate keys when staff, vendors, or infrastructure access changes.", "Never embed a key in a mobile application, public repository, or browser bundle.", "Include the request_id from an error when contacting support; never email the complete key."] },
        ],
      },
    ],
  },
  {
    slug: "chat-completions",
    title: "Chat Completions",
    description: "Generate model responses with the OpenAI-compatible POST /v1/chat/completions endpoint.",
    intro: "Chat completions accept a model ID and a sequence of messages. The same endpoint supports non-streaming and streaming generation, subject to each model's capabilities.",
    sections: [
      {
        heading: "Create a completion",
        blocks: [
          { type: "text", value: "Set model to an ID returned by GET /v1/models. Messages normally include system, user, assistant, and tool roles. Unsupported parameters or modalities can produce a validation error rather than being silently ignored." },
          { type: "code", language: "bash", code: `curl ${apiUrl}/chat/completions \\
  -H "Authorization: Bearer $AIAIAIROUTER_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen-plus",
    "messages": [
      {"role": "user", "content": "Return a two-sentence summary of edge computing."}
    ],
    "temperature": 0.3,
    "max_tokens": 300,
    "stream": false
  }'` },
          { type: "table", headers: ["Field", "Type", "Required", "Description"], rows: [["model", "string", "Yes", "Model ID from the catalog"], ["messages", "array", "Yes", "Ordered conversation messages"], ["stream", "boolean", "No", "Enables server-sent events; default false"], ["temperature", "number", "No", "Sampling control when supported by the model"], ["max_tokens", "integer", "No", "Maximum generated tokens within model limits"], ["tools", "array", "No", "Function definitions for tool-capable models and regions"]] },
        ],
      },
      {
        heading: "Completion response",
        blocks: [
          { type: "code", language: "json", code: `{
  "id": "chatcmpl_01JEXAMPLE",
  "object": "chat.completion",
  "created": 1794096000,
  "model": "qwen-plus",
  "choices": [{
    "index": 0,
    "message": {
      "role": "assistant",
      "content": "Edge computing processes data near where it is created. This can reduce network latency and limit the data sent to centralized infrastructure."
    },
    "finish_reason": "stop"
  }],
  "usage": {"prompt_tokens": 18, "completion_tokens": 29, "total_tokens": 47}
}` },
          { type: "text", value: "Common finish reasons include stop for a natural end, length when the output limit is reached, and tool_calls when the model requests a function. Always inspect finish_reason before treating an answer as complete." },
        ],
      },
      {
        heading: "Tool calling",
        blocks: [
          { type: "text", value: "For a tool-capable model, provide JSON Schema function definitions. Your application remains responsible for validating arguments, executing functions safely, and returning tool results in a subsequent request. Availability varies by provider region; check the model catalog." },
          { type: "code", language: "json", code: `{
  "model": "qwen-plus",
  "messages": [{"role": "user", "content": "What is the weather in Shanghai?"}],
  "tools": [{
    "type": "function",
    "function": {
      "name": "get_weather",
      "description": "Get current weather for a city",
      "parameters": {
        "type": "object",
        "properties": {"city": {"type": "string"}},
        "required": ["city"]
      }
    }
  }]
}` },
          { type: "note", value: "A model's tool call is untrusted input. Validate it against your own schema and apply authorization before executing any operation." },
        ],
      },
    ],
  },
  {
    slug: "models",
    title: "Models",
    description: "List available model IDs and understand provider-specific capabilities and limits.",
    intro: "Use the models endpoint for runtime discovery and the website catalog for human-readable specifications, source links, and pricing notes.",
    sections: [
      {
        heading: "List models",
        blocks: [
          { type: "code", language: "bash", code: `curl ${apiUrl}/models \\
  -H "Authorization: Bearer $AIAIAIROUTER_API_KEY"` },
          { type: "code", language: "json", code: `{
  "object": "list",
  "data": [
    {"id": "qwen-plus", "object": "model", "owned_by": "alibaba-cloud"},
    {"id": "kimi-k2.6", "object": "model", "owned_by": "moonshot-ai"},
    {"id": "glm-4.7", "object": "model", "owned_by": "z-ai"}
  ]
}` },
          { type: "text", value: "The response is an OpenAI-style list. Availability can change as providers add, retire, or restrict models. Build a selectable model list from the response instead of hard-coding the complete catalog." },
        ],
      },
      {
        heading: "Select a model safely",
        blocks: [
          { type: "list", items: ["Use the exact id field in your chat completion request.", "Check context and output limits before sending long inputs.", "Confirm that required modalities, structured output, and tools are supported in the relevant deployment.", "Handle model_not_found and model_unavailable as different conditions: the former suggests an invalid ID, while the latter can be temporary.", "Monitor provider retirement notices when using versioned or legacy models."] },
          { type: "code", language: "json", code: `{
  "error": {
    "type": "invalid_request_error",
    "code": "model_not_found",
    "message": "Model 'unknown-model' is not available.",
    "request_id": "req_01JEXAMPLE"
  }
}` },
        ],
      },
    ],
  },
  {
    slug: "streaming",
    title: "Streaming",
    description: "Receive chat completion tokens incrementally with server-sent events and OpenAI SDK streams.",
    intro: "Streaming reduces time to first visible output by sending completion deltas as the model generates them. Set stream to true and consume server-sent events until the final done marker.",
    sections: [
      {
        heading: "Start a stream",
        blocks: [
          { type: "code", language: "bash", code: `curl -N ${apiUrl}/chat/completions \\
  -H "Authorization: Bearer $AIAIAIROUTER_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen-plus",
    "messages": [{"role": "user", "content": "Count from one to three."}],
    "stream": true
  }'` },
          { type: "text", value: "Each data event contains a chat.completion.chunk. Concatenate delta.content values; do not assume that one event contains a complete word. The stream ends with data: [DONE]." },
          { type: "code", language: "text", code: `data: {"id":"chatcmpl_01JEXAMPLE","object":"chat.completion.chunk","model":"qwen-plus","choices":[{"index":0,"delta":{"role":"assistant","content":"One"},"finish_reason":null}]}

data: {"id":"chatcmpl_01JEXAMPLE","object":"chat.completion.chunk","model":"qwen-plus","choices":[{"index":0,"delta":{"content":", two"},"finish_reason":null}]}

data: {"id":"chatcmpl_01JEXAMPLE","object":"chat.completion.chunk","model":"qwen-plus","choices":[{"index":0,"delta":{"content":", three."},"finish_reason":"stop"}]}

data: [DONE]` },
        ],
      },
      {
        heading: "Use the TypeScript SDK",
        blocks: [
          { type: "code", language: "typescript", code: `import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.AIAIAIROUTER_API_KEY,
  baseURL: "${apiUrl}",
});

const stream = await client.chat.completions.create({
  model: "qwen-plus",
  messages: [{ role: "user", content: "Count from one to three." }],
  stream: true,
});

for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta.content || "");
}` },
        ],
      },
      {
        heading: "Disconnects and cancellation",
        blocks: [
          { type: "text", value: "Close the response stream when a user cancels generation. A disconnected stream can be incomplete even if earlier chunks were valid. If you retry, use your own idempotency and duplicate-handling strategy because a new request can produce new billable output." },
          { type: "note", value: "Proxies and serverless platforms may buffer responses. Disable response buffering where your runtime requires it and test time to first token in production." },
        ],
      },
    ],
  },
  {
    slug: "errors",
    title: "Errors",
    description: "Handle AiAiAiRouter error envelopes, HTTP status codes, request IDs, and retries.",
    intro: "Errors use a consistent JSON envelope whenever the gateway can produce one. Read both the HTTP status and error.code to decide whether to fix the request, add credits, or retry.",
    sections: [
      {
        heading: "Error format",
        blocks: [
          { type: "code", language: "json", code: `{
  "error": {
    "type": "rate_limit_error",
    "code": "rate_limit_exceeded",
    "message": "The current request rate exceeds the applicable limit.",
    "request_id": "req_01JEXAMPLE"
  }
}` },
          { type: "table", headers: ["Status", "Typical code", "Action"], rows: [["400", "invalid_request", "Correct fields, model capabilities, or input size"], ["401", "invalid_api_key", "Check the bearer token and key status"], ["402", "insufficient_credits", "Add credits before retrying"], ["404", "model_not_found", "Select a model returned by /models"], ["429", "rate_limit_exceeded", "Honor Retry-After and back off"], ["500", "internal_error", "Retry cautiously with backoff"], ["502", "upstream_error", "Retry or select another suitable model"], ["503", "model_unavailable", "Retry later with jitter"]] },
        ],
      },
      {
        heading: "Retry policy",
        blocks: [
          { type: "list", items: ["Retry only when the operation is safe for your application, normally for 429, 500, 502, and 503.", "Use exponential backoff with random jitter and a bounded number of attempts.", "Honor the Retry-After header when present.", "Do not retry validation, authentication, or insufficient-credit errors without changing the underlying condition.", "Log request_id, status, model, and elapsed time. Do not log API keys or sensitive prompts."] },
          { type: "code", language: "typescript", code: `const response = await fetch(url, options);

if (!response.ok) {
  const body = await response.json();
  console.error({
    status: response.status,
    code: body.error?.code,
    requestId: body.error?.request_id,
  });
  throw new Error(body.error?.message || "API request failed");
}

return response.json();` },
        ],
      },
    ],
  },
  {
    slug: "rate-limits",
    title: "Rate Limits",
    description: "Understand request and token limits, rate-limit headers, and responsible retry behavior.",
    intro: "Rate limits protect account capacity and upstream provider availability. Applicable request and token limits can vary by plan, model, and provider; use the console as the source for your current account limits.",
    sections: [
      {
        heading: "Rate-limit headers",
        blocks: [
          { type: "text", value: "Responses may include headers describing the active window. Treat these values as dynamic operational data rather than constants in your application." },
          { type: "table", headers: ["Header", "Meaning"], rows: [["x-ratelimit-limit-requests", "Request capacity in the current window"], ["x-ratelimit-remaining-requests", "Requests remaining in the current window"], ["x-ratelimit-reset-requests", "Time until the request window resets"], ["retry-after", "Minimum seconds to wait after a 429, when provided"]] },
          { type: "code", language: "http", code: `HTTP/2 429
content-type: application/json
retry-after: 2
x-ratelimit-limit-requests: 120
x-ratelimit-remaining-requests: 0
x-ratelimit-reset-requests: 2s` },
          { type: "text", value: "The header values above illustrate the format only; they are not a promise of a particular account limit." },
          { type: "code", language: "json", code: `{
  "error": {
    "type": "rate_limit_error",
    "code": "rate_limit_exceeded",
    "message": "The current request rate exceeds the applicable limit.",
    "request_id": "req_01JEXAMPLE"
  }
}` },
        ],
      },
      {
        heading: "Design for variable capacity",
        blocks: [
          { type: "list", items: ["Queue work and limit concurrency instead of sending unrestricted parallel requests.", "Set realistic token limits and avoid repeatedly sending unnecessary context.", "Apply exponential backoff with jitter to retries.", "Separate interactive traffic from batch workloads so one cannot starve the other.", "Track upstream errors separately from account rate limits; provider capacity can also affect throughput."] },
        ],
      },
    ],
  },
  {
    slug: "billing-and-usage",
    title: "Billing and Usage",
    description: "Read token usage, reconcile model charges, and manage prepaid credits through Stripe.",
    intro: "AiAiAiRouter uses prepaid credits and usage-based model charges. Completion responses report token counts, while the usage endpoint aggregates account activity for a selected period.",
    sections: [
      {
        heading: "Read request usage",
        blocks: [
          { type: "text", value: "Non-streaming completion responses include prompt_tokens, completion_tokens, and total_tokens. Charges can also depend on model, mode, cache status, region, and applicable taxes. Use the console for the authoritative account ledger." },
          { type: "code", language: "json", code: `{
  "usage": {
    "prompt_tokens": 1200,
    "completion_tokens": 350,
    "total_tokens": 1550
  }
}` },
        ],
      },
      {
        heading: "Query aggregated usage",
        blocks: [
          { type: "code", language: "bash", code: `curl "${apiUrl}/usage?start_date=2026-11-01&end_date=2026-11-08" \\
  -H "Authorization: Bearer $AIAIAIROUTER_API_KEY"` },
          { type: "code", language: "json", code: `{
  "object": "usage_summary",
  "period": {"start_date": "2026-11-01", "end_date": "2026-11-08"},
  "currency": "USD",
  "requests": 42,
  "prompt_tokens": 50400,
  "completion_tokens": 14700,
  "total_tokens": 65100,
  "total_cost": 0.0734
}` },
          { type: "text", value: "Values in this example are illustrative. Dates use YYYY-MM-DD. Optional model filtering and period boundaries are described in the API Reference." },
        ],
      },
      {
        heading: "Credits and payments",
        blocks: [
          { type: "list", items: ["Add credits in the console using the Stripe-hosted payment flow.", "Do not send card details to the AI API endpoints.", "Requests can fail with HTTP 402 when the usable balance is insufficient.", "Use separate API keys and the usage view to attribute consumption by application.", "Review the Refund Policy before purchasing; consumed usage is non-refundable."] },
          { type: "code", language: "json", code: `{
  "error": {
    "type": "billing_error",
    "code": "insufficient_credits",
    "message": "The account does not have enough usable credits for this request.",
    "request_id": "req_01JEXAMPLE"
  }
}` },
        ],
      },
    ],
  },
  {
    slug: "api-keys",
    title: "API Keys",
    description: "Create, list, secure, rotate, and revoke AiAiAiRouter API keys.",
    intro: "API keys connect requests to your account. Create and revoke keys in the console; the public API can list non-secret metadata for keys belonging to the authenticated account.",
    sections: [
      {
        heading: "List key metadata",
        blocks: [
          { type: "code", language: "bash", code: `curl ${apiUrl}/keys \\
  -H "Authorization: Bearer $AIAIAIROUTER_API_KEY"` },
          { type: "code", language: "json", code: `{
  "object": "list",
  "data": [{
    "id": "key_01JEXAMPLE",
    "name": "Production backend",
    "prefix": "aia_prod_7f3a",
    "created_at": "2026-11-01T10:30:00Z",
    "last_used_at": "2026-11-08T09:42:11Z",
    "status": "active"
  }]
}` },
          { type: "note", value: "The listing never returns the complete secret. The prefix is only an identifier and cannot authenticate a request." },
        ],
      },
      {
        heading: "Lifecycle and rotation",
        blocks: [
          { type: "list", ordered: true, items: ["Create a replacement key in the console with a distinct environment name.", "Deploy the replacement to your server's secret store and restart or reload the application safely.", "Verify that production traffic succeeds with the replacement.", "Revoke the old key in the console and confirm it no longer authenticates.", "Record the rotation without storing either complete key in tickets or logs."] },
          { type: "text", value: "If you suspect exposure, revoke the affected key immediately rather than waiting for a scheduled rotation. Review usage for unexpected activity and contact support@aiaiairouter.com with relevant request IDs." },
        ],
      },
      {
        heading: "What keys do not do",
        blocks: [
          { type: "text", value: "An API key is not a user password and must not be used as a browser session. It does not make provider keys public, and it cannot be reconstructed from the key prefix. AiAiAiRouter's API key endpoints do not provide provider-key management." },
        ],
      },
    ],
  },
];

export const docSlugs = docs.map((doc) => doc.slug);

export function getDoc(slug: string) {
  return docs.find((doc) => doc.slug === slug);
}
