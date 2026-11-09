export type ModelCapability = "Text" | "Reasoning" | "Vision" | "Video" | "Coding" | "Structured output";
export type FeatureSupport = "yes" | "no" | "varies";

export type AIModel = {
  id: string;
  name: string;
  provider: "Alibaba Cloud" | "Moonshot AI" | "Z.AI";
  family: string;
  description: string;
  capabilities: ModelCapability[];
  context: number;
  maxOutput?: number;
  streaming: boolean;
  tools: FeatureSupport;
  toolNote?: string;
  pricing: { input: number; output: number; note: string } | null;
  sourceUrl: string;
  sourceLabel: string;
  pricingUrl?: string;
  notice?: string;
};

export const models: AIModel[] = [
  {
    id: "qwen-plus",
    name: "Qwen Plus",
    provider: "Alibaba Cloud",
    family: "Qwen",
    description: "A multilingual text model for reasoning, code generation, structured output, and general assistant workloads.",
    capabilities: ["Text", "Reasoning", "Coding", "Structured output"],
    context: 1_000_000,
    maxOutput: 32_768,
    streaming: true,
    tools: "varies",
    toolNote: "Function calling depends on the Alibaba Cloud deployment region.",
    pricing: { input: 0.4, output: 1.2, note: "International rate for non-thinking requests with input up to 256K tokens." },
    sourceUrl: "https://www.alibabacloud.com/help/en/model-studio/qwen-plus",
    sourceLabel: "Qwen Plus specifications and pricing",
  },
  {
    id: "qwen-max",
    name: "Qwen Max",
    provider: "Alibaba Cloud",
    family: "Qwen",
    description: "A multilingual text model for complex reasoning, code generation, creative writing, and structured responses.",
    capabilities: ["Text", "Reasoning", "Coding", "Structured output"],
    context: 32_768,
    maxOutput: 8_192,
    streaming: true,
    tools: "varies",
    toolNote: "Function calling depends on the Alibaba Cloud deployment region.",
    pricing: { input: 1.6, output: 6.4, note: "International standard rate. Batch and implicit-cache rates differ." },
    sourceUrl: "https://www.alibabacloud.com/help/en/model-studio/qwen-max",
    sourceLabel: "Qwen Max specifications and pricing",
  },
  {
    id: "kimi-k2.6",
    name: "Kimi K2.6",
    provider: "Moonshot AI",
    family: "Kimi K2",
    description: "A multimodal model for text, image, and video understanding, with thinking modes and multi-step tool use.",
    capabilities: ["Text", "Reasoning", "Vision", "Video", "Coding"],
    context: 262_144,
    maxOutput: 32_768,
    streaming: true,
    tools: "yes",
    pricing: null,
    sourceUrl: "https://platform.moonshot.ai/docs/guide/kimi-k2-6-quickstart",
    sourceLabel: "Kimi K2.6 model guide",
    pricingUrl: "https://platform.moonshot.ai/docs/pricing/chat",
    notice: "Moonshot AI has announced that K2 models will retire by the end of December 2026. Plan a migration before using this model for new workloads.",
  },
  {
    id: "glm-4.7",
    name: "GLM-4.7",
    provider: "Z.AI",
    family: "GLM",
    description: "A text model for agentic coding, multi-step reasoning, structured output, and multi-turn tool execution.",
    capabilities: ["Text", "Reasoning", "Coding", "Structured output"],
    context: 200_000,
    maxOutput: 128_000,
    streaming: true,
    tools: "yes",
    pricing: { input: 0.6, output: 2.2, note: "Standard input and output rate. Cached input is priced separately." },
    sourceUrl: "https://docs.z.ai/guides/llm/glm-4.7",
    sourceLabel: "GLM-4.7 model guide",
    pricingUrl: "https://docs.z.ai/guides/overview/pricing",
  },
  {
    id: "glm-4.7-flashx",
    name: "GLM-4.7 FlashX",
    provider: "Z.AI",
    family: "GLM",
    description: "A high-speed text model in the GLM-4.7 series with thinking modes, streaming, tools, and structured output.",
    capabilities: ["Text", "Reasoning", "Coding", "Structured output"],
    context: 200_000,
    maxOutput: 128_000,
    streaming: true,
    tools: "yes",
    pricing: { input: 0.07, output: 0.4, note: "Standard FlashX rate. Cached input is priced separately." },
    sourceUrl: "https://docs.z.ai/guides/llm/glm-4.7",
    sourceLabel: "GLM-4.7 series model guide",
    pricingUrl: "https://docs.z.ai/guides/overview/pricing",
  },
];

export const pricedModels = models.filter((model) => model.pricing !== null);

export function formatContext(tokens: number) {
  if (tokens >= 1_000_000) return `${tokens / 1_000_000}M`;
  return `${Math.round(tokens / 1000)}K`;
}

export function formatPrice(value: number) {
  return `$${value.toFixed(value < 1 ? 3 : 2).replace(/0+$/, "").replace(/\.$/, "")}`;
}
