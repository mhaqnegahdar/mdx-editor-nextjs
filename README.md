**Answer:**
Here’s a clean, practical README for your `mdx-editor-nextjs` project, keeping the structure close to your example but tailored for an MDX editor + viewer setup.

---

# MDX Editor + Viewer for Next.js

A minimal yet extensible setup for writing and rendering MDX in Next.js.
Includes a feature-rich **editor** powered by `@mdxeditor/editor` and a **viewer** powered by `next-mdx-remote`. Perfect for blogs, documentation, and interactive content.

## 📚 Table of Contents

- [Features](#-features)
- [Installation](#-installation)

  - [Prerequisites](#prerequisites)
  - [Project Setup](#project-setup)

- [Quick Start](#-quick-start)

  - [MDX Editor](#1-mdx-editor)
  - [MDX Viewer](#2-mdx-viewer)
  - [Demo Page](#3-demo-page)

- [Available Components](#-available-components)
- [Customization](#-customization)
- [Plugin Ecosystem](#-plugin-ecosystem)
- [Best Practices](#-best-practices)
- [Contributing](#-contributing)

## 🚀 Features

- **Full MDX Support**: Markdown + React components in one file
- **Rich Editor**: Toolbar, lists, tables, images, code blocks, JSX embedding
- **Custom Components**: Callouts, badges, confetti buttons, etc.
- **Syntax Highlighting**: Powered by `rehype-highlight` with GitHub themes
- **Accessible Output**: Slugs + autolinked headings for navigation
- **Next.js Native**: Works with App Router, server actions, and RSC

## 📦 Installation

### Prerequisites

Make sure you have a Next.js 13+ project:

```bash
npx create-next-app@latest mdx-editor-nextjs
cd mdx-editor-nextjs
```

### Project Setup

Install dependencies:

```bash
npm install @mdxeditor/editor next-mdx-remote
npm install remark-gfm remark-math
npm install rehype-highlight rehype-slug rehype-autolink-headings
```

(Optionally add `shadcn/ui` for UI components.)

## 🎯 Quick Start

### 1. MDX Editor

`src/components/mdx/mdx-editor.tsx`

```tsx
<MDXEditor
  markdown={value}
  onChange={setNewContent}
  contentEditableClassName="prose max-w-none p-4 focus:outline-none"
  plugins={[
    headingsPlugin(),
    listsPlugin(),
    codeBlockPlugin(),
    codeMirrorPlugin(),
    toolbarPlugin({ toolbarContents: () => <UndoRedo /> }),
  ]}
/>
```

### 2. MDX Viewer

`src/components/mdx/mdx-viewer.tsx`

```tsx
<MDXRemote
  source={content}
  options={{
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkMath],
      rehypePlugins: [rehypeHighlight, rehypeSlug, rehypeAutolinkHeadings],
    },
  }}
  components={mdxComponents}
/>
```

### 3. Demo Page

`src/app/page.tsx`

```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  <MdxEditor value={content} height={600} />
  <div className="border rounded-md p-4 h-[600px] overflow-y-auto">
    <MdxViewer content={content} />
  </div>
</div>
```

## 📚 Available Components

- **Callout** – info/warning/success/error banners
- **Badge** – styled text badge
- **ConfettiButton** – interactive button with confetti 🎉
- **Table / Code / Blockquote** – styled markdown overrides

## 🎨 Customization

- Extend `mdxComponents` in `mdx-components.tsx` to override default markdown elements (`h1`, `p`, `a`, `table`, etc.)
- Add your own JSX components for interactive content.
- Swap out highlight.js themes by importing a different CSS file.

## 🔌 Plugin Ecosystem

- **Remark plugins**: Markdown-level (e.g., tables, math, GFM)
- **Rehype plugins**: HTML-level (e.g., syntax highlighting, slugs, autolinks)
- **MDXEditor plugins**: UI/UX features inside the editor (toolbar, lists, code blocks)

## ✨ Best Practices

1. Start with minimal plugins; add complexity as needed
2. Use `prose` styles from Tailwind for readable output
3. Define custom components for reusable blog elements
4. Keep plugins in the correct order (`rehype-slug` before `rehype-autolink-headings`)
5. Separate **editor** and **viewer** responsibilities cleanly

