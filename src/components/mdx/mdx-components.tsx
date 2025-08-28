import React from "react";
import { Badge } from "@/components/ui/badge"; // Adjust import based on your UI library
import { ConfettiButton } from "@/components/ui/confetti";

// HTML element props types
type HTMLProps = React.HTMLAttributes<HTMLElement>;
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type TableProps = React.TableHTMLAttributes<HTMLTableElement>
type CellProps = React.TdHTMLAttributes<HTMLTableCellElement>

// Custom callout component
export function Callout({
  type = "info",
  children,
  title,
}: {
  type?: "info" | "warning" | "success" | "error";
  children: React.ReactNode;
  title?: string;
}) {
  const styles = {
    info: "border-l-blue-500 bg-blue-50 text-blue-900",
    warning: "border-l-yellow-500 bg-yellow-50 text-yellow-900",
    success: "border-l-green-500 bg-green-50 text-green-900",
    error: "border-l-red-500 bg-red-50 text-red-900",
  };

  return (
    <div className={`border-l-4 p-4 my-4 ${styles[type]}`}>
      {title && <div className="font-bold mb-2">{title}</div>}
      <div>{children}</div>
    </div>
  );
}
// Editor wrapper for Callout
export const CalloutEditor = ({ type, title }: { type?: string; title?: string }) => {
  return (
    <Callout
      type={type as "info" | "warning" | "success" | "error"}
      title={title}
    >
      Editor placeholder content
    </Callout>
  );
};
// Custom Confetti Button
export function ConfettiButtonDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <ConfettiButton>Confetti 🎉</ConfettiButton>
    </div>
  );
}

// Custom code block with copy functionality

// Export components map for MDXRemote
export const mdxComponents = {
  // Override default HTML elements
  h1: (props: HTMLProps) => (
    <h1 className="text-4xl font-bold mb-4 mt-8" {...props} />
  ),
  h2: (props: HTMLProps) => (
    <h2 className="text-3xl font-semibold mb-3 mt-6" {...props} />
  ),
  h3: (props: HTMLProps) => (
    <h3 className="text-2xl font-medium mb-2 mt-4" {...props} />
  ),
  p: (props: HTMLProps) => <p className="mb-4 leading-relaxed" {...props} />,
  a: (props: AnchorProps) => (
    <a className="text-blue-600 hover:text-blue-800 underline" {...props} />
  ),
  code: (props: HTMLProps) => (
    <code className="bg-gray-100 px-1 py-0.5 rounded text-sm" {...props} />
  ),
  // pre: CustomCodeBlock,
  blockquote: (props: HTMLProps) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic my-4"
      {...props}
    />
  ),
table: (props: TableProps) => (
  <div className="overflow-x-auto">
    <table
      className="min-w-full border border-gray-200 divide-y divide-gray-200 text-sm text-left"
      {...props}
    />
  </div>
),
th: (props: CellProps) => (
  <th
    className="px-4 py-2 bg-gray-50 font-medium text-gray-700 border-b border-gray-200"
    {...props}
  />
),
td: (props: CellProps) => (
  <td
    className="px-4 py-2 text-gray-700 border-b border-gray-200"
    {...props}
  />
),
hr: (props: HTMLProps) => (
  <hr className="my-6 border-t border-gray-300" {...props} />
),

  // Custom components available in MDX
  Callout,
  Badge,
  ConfettiButtonDemo,
};
