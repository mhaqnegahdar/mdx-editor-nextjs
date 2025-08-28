"use client";
import React, { useState, useEffect, ComponentType } from "react";
import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  linkPlugin,
  linkDialogPlugin,
  imagePlugin,
  tablePlugin,
  codeBlockPlugin,
  codeMirrorPlugin,
  toolbarPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  CodeToggle,
  CreateLink,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
  InsertCodeBlock,
  ListsToggle,
  BlockTypeSelect,
  Separator,
  diffSourcePlugin,
  jsxPlugin,
  JsxEditorProps,
} from "@mdxeditor/editor";

// Import editor styles
import "@mdxeditor/editor/style.css";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CalloutEditor, ConfettiButtonDemo } from "./mdx-components";

interface MdxEditorProps {
  value: string;
  placeholder?: string;
  height?: number;
}

export const MdxEditor: React.FC<MdxEditorProps> = ({
  value,
  placeholder = "Start writing your MDX content...",
  height = 400,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [newContent, setNewContent] = useState("");
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  async function handleSubmit() {
    await fetch("/api/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: newContent }),
    });

    // ensure server revalidates
    router.refresh();
  }

  if (!isMounted) {
    return <></>;
  }

  return (
    <div style={{ height: `${height}px` }}>
      <div
        style={{ maxHeight: `${height - 36}px` }}
        className="border relative rounded-md overflow-auto"
      >
        <MDXEditor
          markdown={value}
          onChange={setNewContent}
          placeholder={placeholder}
          contentEditableClassName="prose max-w-none p-4 focus:outline-none"
          plugins={[
            // Core markdown features
            headingsPlugin({ allowedHeadingLevels: [1, 2, 3, 4, 5, 6] }),
            listsPlugin(),
            quotePlugin(),
            thematicBreakPlugin(),
            markdownShortcutPlugin(),

            // Links and media
            linkPlugin(),
            linkDialogPlugin(),
            imagePlugin({
              imageAutocompleteSuggestions: [
                "https://picsum.photos/400/200",
                "https://picsum.photos/300/200",
              ],
            }),

            // Advanced features
            tablePlugin(),
            codeBlockPlugin({ defaultCodeBlockLanguage: "js" }),
            codeMirrorPlugin({
              codeBlockLanguages: {
                js: "js",
                jsx: "JSX",
                ts: "TypeScript",
                tsx: "TSX",
                html: "HTML",
                css: "CSS",
                python: "Python",
                bash: "Bash",
                json: "JSON",
              },
            }),
            diffSourcePlugin({
              // diffMarkdown: "An older version",
              viewMode: "source",
            }),
            jsxPlugin({
              jsxComponentDescriptors: [
                {
                  name: "ConfettiButtonDemo",
                  kind: "flow",
                  props: [],
                  Editor: ConfettiButtonDemo,
                },
                {
                  name: "Callout",
                  kind: "flow",
                  props: [
                    {
                      name: "type",
                      type: "string",
                    },
                    {
                      name: "title",
                      type: "string",
                    },
                  ],
                  Editor: CalloutEditor as ComponentType<JsxEditorProps>,
                },
              ],
            }),

            // Toolbar - must be last
            toolbarPlugin({
              toolbarContents: () => (
                <>
                  <UndoRedo />
                  <Separator />
                  <BoldItalicUnderlineToggles />
                  <CodeToggle />
                  <Separator />
                  <ListsToggle />
                  <BlockTypeSelect />
                  <Separator />
                  <CreateLink />
                  <InsertImage />
                  <Separator />
                  <InsertTable />
                  <InsertThematicBreak />
                  <InsertCodeBlock />
                </>
              ),
            }),
          ]}
        />
      </div>
      <Button className=" cursor-pointer w-full  " onClick={handleSubmit}>
        Save changes
      </Button>
    </div>
  );
};
