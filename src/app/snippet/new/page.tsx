"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { prisma } from '@/lib/prisma'
import React, { useActionState, useState } from 'react'
import { redirect } from '../../../../node_modules/next/navigation'
import * as actions from "@/actions"

// export const metadata = {
//     title: "New Snippet"
//   }


const CreateSnippetPage = () => {
    const [formStateData, createSnippetAction] = useActionState(actions.createSnippet, { message: "" });
   
  return (
   
    <form action={createSnippetAction}>
    <div>
        <div>
            <Label>Title</Label>
            <Input type="text" name='fulltitle' id='title' 
              className="border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 hover:border-gray-500 hover:ring-1 hover:ring-gray-400"></Input>
        </div>
        <div >
            <Label>Code</Label>
            <Textarea name='fullcode' id='code'  className="h-[500px] border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 hover:border-gray-500 hover:ring-1 hover:ring-gray-400"></Textarea>  
        </div>
       {formStateData.message && <div className='p-2 bg-red-300 border-red-600 rounded-lg '> {formStateData.message}</div>} 
        <Button type='submit' className='my-4'>New</Button>
    </div>
    </form>
  )
}

export default CreateSnippetPage