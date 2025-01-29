import React from 'react'
import EditSnippetForm from '@/components/EditSnippetForm';
import { prisma } from '@/lib/prisma';

const EditPageSnippet = async ({params} : {params:Promise<{id:string}>}) => {
    const id = parseInt((await params).id);

    const snippet = await prisma.snippet.findUnique({
        where: {
            id,
        }
    })

     // Handle the case where snippet is null
  if (!snippet) {
    return (
      <div className="text-center text-gray-500">
        Snippet not found.
      </div>
    );
  }
  
  return (
    <EditSnippetForm snippet = {snippet}/>
  )
}

export default EditPageSnippet