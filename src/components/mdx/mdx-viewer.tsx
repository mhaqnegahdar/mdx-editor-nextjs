import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { mdxComponents } from "./mdx-components";
import "highlight.js/styles/github-dark.css";

// Server component to read and render MDX content
export async function MdxViewer({content}:{content:string}) {

  return (
    <div className="prose prose-lg max-w-none mdx-content">
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkMath],
            rehypePlugins: [
              [
                rehypeHighlight,
                {
                  detect: true,
                  ignoreMissing: true,
                  aliases: {
                    js: "javascript",
                    jsx: "javascript",
                    ts: "typescript",
                    tsx: "typescript",
                  },
                },
              ],
              rehypeSlug,
              [
                rehypeAutolinkHeadings,
                {
                  behavior: "wrap",
                  properties: { className: ["anchor"] },
                },
              ],
            ],
          },
        }}
        components={mdxComponents}
      />
    </div>
  );
}
