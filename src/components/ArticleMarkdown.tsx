import Markdown from "react-markdown";
import type { Components } from "react-markdown";
import { Children, isValidElement } from "react";
import remarkGfm from "remark-gfm";
import type { Root } from "mdast";
import type { Locale } from "@/lib/i18n/locales";
import { addArticleHeadingAnchors, articleReadingCopy, type ArticleHeading } from "@/lib/article-reading";

function articleMarkdownComponents(locale: Locale): Components {
  return {
    h1({ children, id }) {
      return <h2 id={id} tabIndex={-1}>{children}</h2>;
    },
    h2({ children, id }) {
      return <h2 id={id} tabIndex={-1}>{children}</h2>;
    },
    h3({ children, id }) {
      return <h3 id={id} tabIndex={-1}>{children}</h3>;
    },
    table({ children }) {
      return (
        <div>
          <p className="article-table-hint">{articleReadingCopy[locale].tableHint}</p>
          <div className="article-table-wrap" role="region" aria-label={articleReadingCopy[locale].table} tabIndex={0}>
            <table>{children}</table>
          </div>
        </div>
      );
    },
    p({ children, className, id }) {
      const isInquiryCallout = Children.toArray(children).some(
        (child) =>
          isValidElement<{ href?: string }>(child) &&
          child.props.href?.includes("#poptavkovy-formular")
      );

      const classes = [className, isInquiryCallout ? "article-inquiry-callout" : undefined]
        .filter(Boolean)
        .join(" ");

      return <p id={id} className={classes || undefined}>{children}</p>;
    }
  };
}

/** Synchronous server renderer; collect headings once, without a second parser or client JS. */
export function renderArticleMarkdown(children: string, locale: Locale = "cs") {
  let headings: ArticleHeading[] = [];
  const content = Markdown({
    children,
    remarkPlugins: [remarkGfm, function outlinePlugin() {
      return (tree: Root) => { headings = addArticleHeadingAnchors(tree); };
    }],
    components: articleMarkdownComponents(locale)
  });
  return { content, headings };
}

type Props = {
  children: string;
};

export function ArticleMarkdown({ children }: Props) {
  return renderArticleMarkdown(children).content;
}
