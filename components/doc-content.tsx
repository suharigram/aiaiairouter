import { Info } from "lucide-react";
import { CodeBlock } from "@/components/code-block";
import type { DocBlock } from "@/lib/docs";

function Block({ block }: { block: DocBlock }) {
  switch (block.type) {
    case "text":
      return <p>{block.value}</p>;
    case "list":
      return block.ordered ? <ol>{block.items.map((item) => <li key={item}>{item}</li>)}</ol> : <ul>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
    case "code":
      return <div className="my-5"><CodeBlock code={block.code} language={block.language} /></div>;
    case "table":
      return <div className="my-5 overflow-x-auto rounded-lg border border-border"><table className="w-full min-w-[560px] border-collapse text-left text-sm"><thead className="bg-muted"><tr>{block.headers.map((header) => <th key={header} scope="col" className="border-b border-border px-4 py-3 font-medium text-foreground">{header}</th>)}</tr></thead><tbody>{block.rows.map((row, rowIndex) => <tr key={rowIndex} className="border-b border-border last:border-0">{row.map((cell, cellIndex) => <td key={cellIndex} className="px-4 py-3 align-top leading-6 text-muted-foreground">{cellIndex === 0 ? <code>{cell}</code> : cell}</td>)}</tr>)}</tbody></table></div>;
    case "note":
      return <div className="my-5 flex gap-3 rounded-lg border border-border bg-accent-soft/60 p-4 text-sm leading-6 text-foreground"><Info className="mt-0.5 size-4 shrink-0 text-accent" /><p className="!m-0">{block.value}</p></div>;
  }
}

export function DocContent({ sections }: { sections: { heading: string; blocks: DocBlock[] }[] }) {
  return <div className="prose-docs">{sections.map((section) => <section key={section.heading}><h2 id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "")}>{section.heading}</h2>{section.blocks.map((block, index) => <Block key={index} block={block} />)}</section>)}</div>;
}
