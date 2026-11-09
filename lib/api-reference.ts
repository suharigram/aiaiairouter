import { apiUrl } from "@/lib/env";
import type { ApiExamples } from "@/components/api-example-tabs";

export type ApiParameter = { name: string; type: string; required: boolean; description: string };
export type ApiEndpoint = {
  id: string;
  method: "GET" | "POST";
  path: string;
  title: string;
  description: string;
  parameterLocation: "query" | "body" | "none";
  parameters: ApiParameter[];
  response: string;
  errors: { status: string; code: string; description: string }[];
  examples: ApiExamples;
};

export const endpoints: ApiEndpoint[] = [
  {
    id: "list-models",
    method: "GET",
    path: "/v1/models",
    title: "List models",
    description: "Returns the model IDs currently available to the authenticated account. Use an id from this list in a chat completion request.",
    parameterLocation: "none",
    parameters: [],
    response: `{
  "object": "list",
  "data": [
    {"id": "qwen-plus", "object": "model", "owned_by": "alibaba-cloud"},
    {"id": "kimi-k2.6", "object": "model", "owned_by": "moonshot-ai"},
    {"id": "glm-4.7", "object": "model", "owned_by": "z-ai"}
  ]
}`,
    errors: [
      { status: "401", code: "invalid_api_key", description: "The key is missing, invalid, or revoked." },
      { status: "429", code: "rate_limit_exceeded", description: "The applicable request limit was exceeded." },
    ],
    examples: {
      curl: `curl ${apiUrl}/models \\
  -H "Authorization: Bearer $AIAIAIROUTER_API_KEY"`,
      javascript: `const response = await fetch("${apiUrl}/models", {
  headers: {
    Authorization: \`Bearer \${process.env.AIAIAIROUTER_API_KEY}\`,
  },
});

if (!response.ok) throw new Error(\`Request failed: \${response.status}\`);
const models = await response.json();
console.log(models.data.map((model) => model.id));`,
      python: `import os
import requests

response = requests.get(
    "${apiUrl}/models",
    headers={"Authorization": f"Bearer {os.environ['AIAIAIROUTER_API_KEY']}"},
    timeout=30,
)
response.raise_for_status()
print([model["id"] for model in response.json()["data"]])`,
    },
  },
  {
    id: "create-chat-completion",
    method: "POST",
    path: "/v1/chat/completions",
    title: "Create a chat completion",
    description: "Generates a model response for a sequence of messages. Supports standard responses and server-sent event streaming; model-specific limits and capabilities still apply.",
    parameterLocation: "body",
    parameters: [
      { name: "model", type: "string", required: true, description: "An available model ID, such as qwen-plus." },
      { name: "messages", type: "array", required: true, description: "Ordered system, user, assistant, and tool messages." },
      { name: "stream", type: "boolean", required: false, description: "If true, returns chat.completion.chunk events. Defaults to false." },
      { name: "max_tokens", type: "integer", required: false, description: "Maximum generated tokens, within the selected model's limit." },
      { name: "temperature", type: "number", required: false, description: "Sampling temperature when the selected model accepts it." },
      { name: "tools", type: "array", required: false, description: "Function definitions for models and regions that support tool calls." },
    ],
    response: `{
  "id": "chatcmpl_01JEXAMPLE",
  "object": "chat.completion",
  "created": 1794096000,
  "model": "qwen-plus",
  "choices": [{
    "index": 0,
    "message": {"role": "assistant", "content": "An API gateway provides one consistent entry point for model requests."},
    "finish_reason": "stop"
  }],
  "usage": {"prompt_tokens": 18, "completion_tokens": 14, "total_tokens": 32}
}`,
    errors: [
      { status: "400", code: "invalid_request", description: "A field is invalid or unsupported by the selected model." },
      { status: "401", code: "invalid_api_key", description: "Authentication failed." },
      { status: "402", code: "insufficient_credits", description: "The usable balance is insufficient." },
      { status: "404", code: "model_not_found", description: "The requested model ID is unavailable." },
      { status: "429", code: "rate_limit_exceeded", description: "A request or token limit was exceeded." },
      { status: "502", code: "upstream_error", description: "The model provider returned or caused an error." },
    ],
    examples: {
      curl: `curl ${apiUrl}/chat/completions \\
  -H "Authorization: Bearer $AIAIAIROUTER_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen-plus",
    "messages": [{"role": "user", "content": "Define an API gateway."}],
    "stream": false
  }'`,
      javascript: `import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.AIAIAIROUTER_API_KEY,
  baseURL: "${apiUrl}",
});

const completion = await client.chat.completions.create({
  model: "qwen-plus",
  messages: [{ role: "user", content: "Define an API gateway." }],
});

console.log(completion.choices[0].message.content);`,
      python: `import os
from openai import OpenAI

client = OpenAI(
    api_key=os.environ["AIAIAIROUTER_API_KEY"],
    base_url="${apiUrl}",
)

completion = client.chat.completions.create(
    model="qwen-plus",
    messages=[{"role": "user", "content": "Define an API gateway."}],
)
print(completion.choices[0].message.content)`,
    },
  },
  {
    id: "get-usage",
    method: "GET",
    path: "/v1/usage",
    title: "Get usage",
    description: "Returns aggregate request, token, and cost data for the authenticated account over a selected date range. Use the console ledger for authoritative billing detail.",
    parameterLocation: "query",
    parameters: [
      { name: "start_date", type: "string", required: true, description: "Inclusive period start in YYYY-MM-DD format." },
      { name: "end_date", type: "string", required: true, description: "Inclusive period end in YYYY-MM-DD format; must not precede start_date." },
      { name: "model", type: "string", required: false, description: "Restricts the summary to one exact model ID." },
    ],
    response: `{
  "object": "usage_summary",
  "period": {"start_date": "2026-11-01", "end_date": "2026-11-08"},
  "currency": "USD",
  "requests": 42,
  "prompt_tokens": 50400,
  "completion_tokens": 14700,
  "total_tokens": 65100,
  "total_cost": 0.0734
}`,
    errors: [
      { status: "400", code: "invalid_date_range", description: "A date is malformed or end_date precedes start_date." },
      { status: "401", code: "invalid_api_key", description: "Authentication failed." },
      { status: "429", code: "rate_limit_exceeded", description: "The applicable request limit was exceeded." },
    ],
    examples: {
      curl: `curl "${apiUrl}/usage?start_date=2026-11-01&end_date=2026-11-08" \\
  -H "Authorization: Bearer $AIAIAIROUTER_API_KEY"`,
      javascript: `const params = new URLSearchParams({
  start_date: "2026-11-01",
  end_date: "2026-11-08",
});

const response = await fetch(\`${apiUrl}/usage?\${params}\`, {
  headers: { Authorization: \`Bearer \${process.env.AIAIAIROUTER_API_KEY}\` },
});

if (!response.ok) throw new Error(\`Request failed: \${response.status}\`);
console.log(await response.json());`,
      python: `import os
import requests

response = requests.get(
    "${apiUrl}/usage",
    params={"start_date": "2026-11-01", "end_date": "2026-11-08"},
    headers={"Authorization": f"Bearer {os.environ['AIAIAIROUTER_API_KEY']}"},
    timeout=30,
)
response.raise_for_status()
print(response.json())`,
    },
  },
  {
    id: "list-api-keys",
    method: "GET",
    path: "/v1/keys",
    title: "List API keys",
    description: "Returns non-secret metadata for keys owned by the authenticated account. Create and revoke keys in the console. Complete secrets are never returned by this endpoint.",
    parameterLocation: "none",
    parameters: [],
    response: `{
  "object": "list",
  "data": [{
    "id": "key_01JEXAMPLE",
    "name": "Production backend",
    "prefix": "aia_prod_7f3a",
    "created_at": "2026-11-01T10:30:00Z",
    "last_used_at": "2026-11-08T09:42:11Z",
    "status": "active"
  }]
}`,
    errors: [
      { status: "401", code: "invalid_api_key", description: "Authentication failed." },
      { status: "429", code: "rate_limit_exceeded", description: "The applicable request limit was exceeded." },
    ],
    examples: {
      curl: `curl ${apiUrl}/keys \\
  -H "Authorization: Bearer $AIAIAIROUTER_API_KEY"`,
      javascript: `const response = await fetch("${apiUrl}/keys", {
  headers: { Authorization: \`Bearer \${process.env.AIAIAIROUTER_API_KEY}\` },
});

if (!response.ok) throw new Error(\`Request failed: \${response.status}\`);
const keys = await response.json();
console.log(keys.data);`,
      python: `import os
import requests

response = requests.get(
    "${apiUrl}/keys",
    headers={"Authorization": f"Bearer {os.environ['AIAIAIROUTER_API_KEY']}"},
    timeout=30,
)
response.raise_for_status()
print(response.json()["data"])`,
    },
  },
];
