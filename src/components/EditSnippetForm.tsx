"use client"
import React, { useState } from 'react'
import Editor from '@monaco-editor/react';

import type { Snippet } from '../../node_modules/.prisma/client/index';
import { Button } from './ui/button';
import { saveSnippet } from '@/actions/index';



const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
    const [code, setCode] = useState(snippet.code);

    const changeEventHandler = (value:string) => {
        setCode(value);
    }

    const saveSnippetAction = saveSnippet.bind(null, snippet.id, code)

    return (
        <div className='flex flex-col gap-5'>
            <form action = {saveSnippetAction} className='flex items-center justify-between'>
            <h1 className="text-3xl font-bold font-inter text-gray-800  ">
  Your Code Editor
</h1>
                <Button>Save</Button>
            </form>

            <Editor
                height="65vh"
                theme='vs-dark'
                defaultLanguage="javascript"
                defaultValue={code}
                onChange = {changeEventHandler}
                options={{
                    wordWrap: 'on',
                    minimap: { enabled: false },
                    fontSize: 14,
                    lineHeight: 24,
                    fontFamily: 'Fira Code, monospace',
                    renderWhitespace: 'boundary',
                    scrollBeyondLastLine: true,
                }}
            />
        </div>
    )
}

export default EditSnippetForm

// "use client"
// import React, { useState } from 'react'
// import Editor from '@monaco-editor/react';

// import type { Snippet } from '../../node_modules/.prisma/client/index';
// import { Button } from './ui/button';
// import { saveSnippet } from '@/actions/index';

// const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
//     const [code, setCode] = useState(snippet.code);

//     const changeEventHandler = (value: string) => {
//         setCode(value);
//     }

//     const saveSnippetAction = saveSnippet.bind(null, snippet.id, code)

//     return (
//         <div className="flex flex-col gap-8 p-8 bg-white shadow-xl rounded-xl max-w-4xl mx-auto">
//             {/* Form Header */}
//             <div className="flex items-center justify-between mb-8">
//                 <h1 className="text-3xl font-semibold text-gray-900">Code Editor</h1>
//                 <Button
//                     className="bg-indigo-600 text-white hover:bg-indigo-700 font-medium py-3 px-6 rounded-lg transition duration-300"
//                 >
//                     Save
//                 </Button>
//             </div>

//             {/* Monaco Code Editor */}
//             <Editor
//                 height="75vh"
//                 theme="vs-dark"
//                 defaultLanguage="javascript"
//                 defaultValue={code}
//                 onChange={changeEventHandler}
//                 options={{
//                     wordWrap: 'on',
//                     minimap: { enabled: false },
//                     fontSize: 14,
//                     lineHeight: 24,
//                     fontFamily: 'Fira Code, monospace',
//                     renderWhitespace: 'boundary',
//                     scrollBeyondLastLine: false,
//                 }}
//             />
//         </div>
//     );
// }

// export default EditSnippetForm;
