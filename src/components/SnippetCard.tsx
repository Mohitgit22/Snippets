// "use client";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// interface SnippetCardProps {
//   id: string;
//   title: string;
// }

// const SnippetCard = ({ id, title }: SnippetCardProps) => {
//   return (
//     <div className="flex items-center justify-between bg-gray-950 p-4 rounded-lg shadow-md hover:from-gray-700 hover:to-black transition-all duration-300">
//     <h3 className="text-lg font-semibold text-white">{title}</h3>
//     <Link href={`/snippet/${id}`}>
//       <Button className="bg-white text-black hover:bg-gray-100 transition-colors duration-300">View</Button> 
//     </Link>
//   </div> 
//   );
// };

// export default SnippetCard;
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface SnippetCardProps {
  id: string;
  title: string;
}

const SnippetCard = ({ id, title }: SnippetCardProps) => {
  return (
    // <div className="bg-black p-6 rounded-lg shadow-lg border border-gray-700 transition-transform transform hover:scale-105 hover:shadow-xl">
    <div className="bg-[#011c2f] p-6 rounded-lg shadow-lg border border-gray-700 transition-transform transform hover:scale-105 hover:shadow-xl">
      <h3 className="text-lg font-bold text-gray-200 mb-2" >{title}</h3>
      <div className="flex justify-end">
        <Link href={`/snippet/${id}`}>
          <Button className="bg-white text-black hover:bg-gray-400 transition-colors duration-300 px-4 py-2 rounded-lg">
            View
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SnippetCard;