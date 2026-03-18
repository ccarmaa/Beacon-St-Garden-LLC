import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

export default function MarkdownRenderer({ md }: { md: string }) {
  return (
    <div className="p-2 border border-(--card-border)">
      <ReactMarkdown 
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-semibold mt-8 mb-4">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold mt-6 mb-3">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="leading-relaxed my-4">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-6 my-4 space-y-1">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-6 my-4 space-y-1">{children}</ol>
          ),
          li: ({ children }) => <li className="my-1">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-400 pl-4 italic my-4">
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <table className="table-auto border-collapse my-6">{children}</table>
          ),
          th: ({ children }) => (
            <th className="border px-3 py-2 bg-gray-100 dark:bg-gray-800 font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border px-3 py-2">{children}</td>
          ),
          img: ({ src, alt }) => (
            <img src={src ?? ""} alt={alt ?? ""} className="my-4 rounded-lg" />
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-blue-600 dark:text-blue-400 underline"
            >
              {children}
            </a>
          ),
        }}
      >
        {md}
      </ReactMarkdown>
    </div>
  );
}