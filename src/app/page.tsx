import React from "react";
import { MdxEditor } from "@/components/mdx/mdx-editor";
import { MdxViewer } from "@/components/mdx/mdx-viewer";

import getContent from "@/actions/get-content";

export default async function MdxDemo() {
  const { content } = await getContent();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">MDX Editor Demo</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Editor Panel */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Editor</h2>
          <MdxEditor value={content} height={600} />
        </div>

        {/* Preview Panel */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Preview</h2>
          <div className="border rounded-md p-4 h-[600px] overflow-y-auto bg-white">
            <MdxViewer content={content} />
          </div>
        </div>
      </div>
    </div>
  );
}
