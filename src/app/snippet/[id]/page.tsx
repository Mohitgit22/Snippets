
// import { Button } from '@/components/ui/button';
// import { prisma } from '@/lib/prisma';
// import React from 'react'
// import Link from '../../../../node_modules/next/link';
// import * as actions from "@/actions"
// import { notFound } from '../../../../node_modules/next/navigation';

// export const metadata = {
//   title: "Edit Snippet"
// };

// const SnippetDetailPage = async ({params}: {params:Promise<{id:string}>}) => {
//   const id = parseInt((await params).id);

// //   await new Promise((r) => setTimeout(r,1000));
//   const snippet = await prisma.snippet.findUnique({
//     where:{
//       id
//     }
//   });

//   if(!snippet){
//     notFound();
//   }

//   const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

//   return (
//     <div className="flex flex-col gap-6 p-6 bg-white rounded-lg shadow-md">
//       <div className="flex items-center justify-between">
//         <h1 className="font-bold text-2xl text-gray-900">{snippet.title}</h1>
//         <div className="flex items-center gap-4">
//         <Link href={`/snippet/${snippet.id}/edit`}><Button>Edit</Button></Link>
//         <form action = {deleteSnippetAction}>
//         <Button variant={"destructive"} type="submit">Delete</Button>
//         </form>
         
//         </div>
//       </div>

//       {/* Code snippet */}
//       <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
//         <pre className="overflow-auto">
//           <code className="text-gray-800">{snippet.code}</code>
//         </pre>
//       </div>
//     </div>
//   );
// };

// export default SnippetDetailPage;


// export const generateStaticParams = async () => {
//     const snippets = await prisma.snippet.findMany();
  
//     return snippets.map((snippet)=> {
//       return {id:snippet.id.toString()}
//     })
//   }



import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from '../../../../node_modules/next/link';
import * as actions from "@/actions"
import { notFound } from '../../../../node_modules/next/navigation';
import SnippetDetailClient from "../../../components/SnippetDetailClient" // Import client component

export const metadata = {
  title: "Edit Snippet",
};

const SnippetDetailPage = async ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id);

  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });

  if (!snippet) {
    notFound();
  }

  return (
    <SnippetDetailClient snippet={snippet} /> // Pass data to client component
  );
};

export default SnippetDetailPage;

// Keep generateStaticParams in the server component
export const generateStaticParams = async () => {
  const snippets = await prisma.snippet.findMany();
  return snippets.map((snippet) => ({ id: snippet.id.toString() }));
};
