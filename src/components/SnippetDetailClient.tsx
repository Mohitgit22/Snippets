// "use client";

// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import Link from "next/link";

// const SnippetDetailClient = ({ snippet }: { snippet: { id: number; title: string; code: string } }) => {
//   return (
//     <div className="flex flex-col gap-6 p-6 bg-white rounded-lg shadow-md">
//       <div className="flex items-center justify-between">
//         <h1 className="font-bold text-2xl text-gray-900">{snippet.title}</h1>
//         <div className="flex items-center gap-4">
//           <Link href={`/snippet/${snippet.id}/edit`}>
//             <Button>Edit</Button>
//           </Link>
//           <form action={`/api/snippets/delete/${snippet.id}`} method="POST">
//             <Button variant={"destructive"} type="submit">Delete</Button>
//           </form>
//         </div>
//       </div>

//       {/* Code Snippet with Copy Button */}
//       <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 relative">
//         <pre className="overflow-auto">
//           <code className="text-gray-800">{snippet.code}</code>
//         </pre>
//         <CopyButton text={snippet.code} />
//       </div>
//     </div>
//   );
// };

// // Copy Button Component
// const CopyButton = ({ text }: { text: string }) => {
//   const [copied, setCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(text);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <Button 
//       className="absolute top-2 right-2 text-sm bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-500 transition"
//       onClick={handleCopy}
//     >
//       {copied ? "Copied!" : "Copy"}
//     </Button>
//   );
// };

// export default SnippetDetailClient;
