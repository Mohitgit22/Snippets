

"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface SnippetCardProps {
  id: string;
  title: string;
}

const SnippetCard = ({ id, title }: SnippetCardProps) => {
  return (
    <div className="flex items-center justify-between bg-gray-950 p-4 rounded-lg shadow-md hover:from-gray-700 hover:to-black transition-all duration-300">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <Link href={`/snippet/${id}`}>
      <Button className="bg-white text-black hover:bg-gray-100 transition-colors duration-300">View</Button> 
    </Link>
  </div>
//    <div className="flex items-center justify-between bg-gray-200 p-4 rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300">
//    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
//    <Link href={`snippet/${id}`}>
//      <Button className="bg-black text-white hover:bg-gray-700">View</Button> {/* Changed hover color */}
//    </Link>
//  </div>
  
  );
};

export default SnippetCard;
