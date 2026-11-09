"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/code-block";
import { cn } from "@/lib/utils";

const languages = ["cURL", "TypeScript", "Python"] as const;
type Language = (typeof languages)[number];

export function SdkExamples({ baseUrl }: { baseUrl: string }) {
  const [active, setActive] = useState<Language>("cURL");
  const examples: Record<Language, string> = {
    cURL: `curl ${baseUrl}/chat/completions \\
  -H "Authorization: Bearer $AIAIAIROUTER_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen-plus",
    "messages": [
      {"role": "user", "content": "Explain routing in one sentence."}
    ]
  }'`,
    TypeScript: `import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.AIAIAIROUTER_API_KEY,
  baseURL: "${baseUrl}",
});

const completion = await client.chat.completions.create({
  model: "qwen-plus",
  messages: [
    { role: "user", content: "Explain routing in one sentence." },
  ],
});

console.log(completion.choices[0].message.content);`,
    Python: `import os
from openai import OpenAI

client = OpenAI(
    api_key=os.environ["AIAIAIROUTER_API_KEY"],
    base_url="${baseUrl}",
)

completion = client.chat.completions.create(
    model="qwen-plus",
    messages=[
        {"role": "user", "content": "Explain routing in one sentence."},
    ],
)

print(completion.choices[0].message.content)`,
  };

  return (
    <div>
      <div className="mb-3 flex gap-1" role="tablist" aria-label="Code language">
        {languages.map((language) => (
          <button key={language} type="button" role="tab" aria-selected={active === language} onClick={() => setActive(language)} className={cn("rounded-md px-3 py-2 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-accent", active === language ? "bg-foreground text-background" : "text-muted-foreground hover:bg-muted hover:text-foreground")}>{language}</button>
        ))}
      </div>
      <CodeBlock code={examples[active]} language={active.toLowerCase()} />
    </div>
  );
}
