"use client"
import React, { useState } from 'react'

import { GoogleGenerativeAI } from "@google/generative-ai";
import Markdown from 'react-markdown'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const GenerateAIPage = () => {
    const [prompt, setPrompt] = useState("");
    const [output, setOutput] = useState("");
    const [loading, setLoading] = useState(false);


    const send = async () => {
        setLoading(true);
        const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
        if (!apiKey) {
            console.error("API key is missing.");
            setLoading(false);
            return;
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // const pmt = "Explain how AI works";

        const result = await model.generateContent(prompt);
        // console.log(result.response.text());
        setOutput(result.response.text());
        setLoading(false);
    }
    return (
        <div className=" mx-auto p-4">
        <div className="max-w-xl mx-auto p-4">

            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Generate Content Using AI</h2>

            <div className="mb-4">
                <Label htmlFor="title" >Enter Prompt for AI Generation</Label>
                <Input
                    type="text"
                    id="title"
                    value={prompt}
                    onChange={(e) => {setPrompt(e.target.value)}} 
                    className="mt-2 w-full border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 hover:border-gray-500 hover:ring-1 hover:ring-gray-400"
                />
            </div>

            <Button
                onClick={send}
                disabled={loading}
                className="w-full bg-blue-600 text-white hover:bg-blue-500 mt-4"
            >
                {loading ? 'Generating...' : 'Generate Using AI'}
            </Button>
            </div>

            {output && (
                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-800">Generated Output:</h3>
                    <div className="mt-2 p-6 bg-gray-100 rounded-md">
                        <Markdown>{output}</Markdown>
                        <Button
                            className="mt-4"
                            onClick={() => navigator.clipboard.writeText(output)}
                        >
                            Copy to Clipboard
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
    
}

export default GenerateAIPage

