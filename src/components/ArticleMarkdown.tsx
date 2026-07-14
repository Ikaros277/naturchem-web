import Markdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const articleMarkdownComponents: Components = {
  h1({ children, ...props }) {
    return <h2 {...props}>{children}</h2>;
  },
  table({ children, ...props }) {
    return (
      <div className="article-table-wrap">
        <table {...props}>{children}</table>
      </div>
    );
  }
};

type Props = {
  children: string;
};

export function ArticleMarkdown({ children }: Props) {
  return (
    <Markdown remarkPlugins={[remarkGfm]} components={articleMarkdownComponents}>
      {children}
    </Markdown>
  );
}
