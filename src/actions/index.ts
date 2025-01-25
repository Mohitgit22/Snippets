"use server"
import { prisma } from "@/lib/prisma"
import { redirect } from "../../node_modules/next/navigation"
import { revalidatePath } from "../../node_modules/next/cache"

export const saveSnippet = async(id: number, code:string) => {
    await prisma.snippet.update({
        where:{
            id
        },
        data: {
            code
        }
    })
     

    revalidatePath(`/snippet/${id}`);
     // throw new Error("Some Internal server error");
    redirect(`/snippet/${id}`)
}

export const deleteSnippet = async (id:number) => {
    await prisma.snippet.delete({
        where : {id}
    });
    revalidatePath("/");
    redirect("/");
}


export  async function createSnippet(prevState: {message:string}, formData:FormData) {

    try {
        const title = formData.get("fulltitle");
        const code = formData.get("fullcode");
    
        if(typeof title !== "string" || title.length < 1){
            return {message: "Title is required"}
        }
        if(typeof code !== "string" || code.length < 1){
            return {message: "Code is required"}
        }
        const snippet =  await prisma.snippet.create({
            data:{
                title,
                code
            }
        });
        console.log("created snippet", snippet);  
        revalidatePath("/");  
    } catch (error) {
        if(error instanceof Error){
            return { message: error.message}
        }else{
            return {message:"Some internal server error"}
        }
    }
   
    //after saving the data to database, navigate to home page
    redirect("/");
   }