import type { ReactNode } from "react";

/**
 * Renders plain text with optional **phrase** emphasis as <strong>.
 * Unmatched markers are left as literal text.
 */
export function InlineEmphasis({ text }: { text: string }): ReactNode {
  if (!text.includes("**")) return text;

  const nodes: ReactNode[] = [];
  const pattern = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    nodes.push(<strong key={`em-${key++}`}>{match[1]}</strong>);
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.length === 1 ? nodes[0] : nodes;
}
