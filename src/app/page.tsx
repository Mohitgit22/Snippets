// import Image from "next/image";
// import { Button } from "@/components/ui/button"
// import Link from "../../node_modules/next/link";
// import { prisma } from "@/lib/prisma";
// import React from "react";

// export const metadata = {
//   title: 'Homepage'
// }

// export default async function Home() {

//   const snippets = await prisma.snippet.findMany()

//   if (!snippets) {
//     return ("No snippet")
//   }
//   return (
//     <div>
//       <div className="font-bold text-4xl">Home</div>

//       <div className="flex items-center justify-between ">
//         <h1>Snippets</h1>
//         <Link href={"/snippet/new"}><Button>New</Button></Link>
//       </div>

//       {
//         snippets.map((snippet) => (
//           <div key={snippet.id} className="flex items-center justify-between bg-gray-200 p-2 rounded-md my-2">
//             <h1>{snippet.title}</h1>
//             <Link href={`/snippet/${snippet.id}`}><Button>View</Button></Link>
//           </div>
//         ))
//       }
//     </div>
//   );
// }




// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { prisma } from "@/lib/prisma";
// import SnippetCard from "@/components/SnippetCard";

// export const metadata = {
//   title: 'Snippet Repository',
// };

// export default async function Home() {
//   const snippets = await prisma.snippet.findMany();

//   if (!snippets || snippets.length === 0) {
//     return (
//       <div className="text-center text-gray-500">
//         No snippets available at the moment.
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-6 py-8">
//       {/* Section Heading */}
//       <div className="flex items-center justify-between mb-8">
//         <h2 className="text-3xl font-semibold text-gray-800">Available Snippets</h2>
//         <Link href="/snippet/new">
//           <Button className="bg-blue-600 text-white hover:bg-blue-500 text-lg px-6 py-2 rounded-lg transition-colors duration-300">
//             Add New Snippet
//           </Button>
//         </Link>
//       </div>

//       {/* Snippet Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {snippets.map((snippet) => (
//           <SnippetCard key={snippet.id} id={snippet.id} title={snippet.title} />
//         ))}
//       </div>
//     </div>
//   );
// }


import { Button } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import SnippetCard from "@/components/SnippetCard";

export const metadata = {
  title: 'Snippet Repository',
};

export default async function Home() {
  const snippets = await prisma.snippet.findMany();

  if (!snippets || snippets.length === 0) {
    return (
      <div className="text-center text-gray-500">
        No snippets available at the moment.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Section Heading with Bottom Border */}
      <div className="flex items-center justify-between mb-8 border-b-2 border-gray-300 pb-4">
        <h2 className="text-3xl font-semibold text-gray-800">Learn from Our Collection of Code Snippets</h2>
        <Link href="/snippet/new">
          <Button className="bg-blue-950 text-white hover:bg-gray-700 text-lg px-6 py-2 rounded-lg transition-colors duration-300">
            Add New 
          </Button>
        </Link>
      </div>

      {/* Divider Line */}
      {/* <div className="border-t-2 border-gray-800 mb-6"></div> */}

      {/* Snippet Cards in Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {snippets.map((snippet) => (
          <SnippetCard key={snippet.id} id={snippet.id} title={snippet.title} />
        ))}
      </div>

   
    </div>
  );
}

