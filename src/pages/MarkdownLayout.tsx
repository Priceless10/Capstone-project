import { useEffect, useRef, useState } from "react"
import { useCreatePost } from "../hooks/useCreatePost"
import { Editor } from "../components/Markdown/Editor"
import Preview from "../components/Markdown/Preview"
import DOMPurify from "dompurify"
import { marked } from "marked"
import Header from "../components/Header"

export const MarkdownLayout = ()=> {
    const [title, setTitle] = useState("")
    const [coverPhoto, setCoverPhoto] = useState<File | undefined>(undefined)
    const [previewCoverPhoto, setPreviewCoverPhoto] = useState("")
    const { createPost } = useCreatePost()
    const getStoredMarkdown = localStorage.getItem("New Post")
    const [markdownText, setMarkdownText] = useState(getStoredMarkdown? getStoredMarkdown : "# New post")
    const content = DOMPurify.sanitize(marked.parse(markdownText))
    const storeMarkdown = (markdownText: string)=> {
        setMarkdownText(markdownText)
        setTitle(title)
        localStorage.setItem("New Title", title)
        localStorage.setItem("New Post", markdownText)
      }
      const publish = ()=> {
        createPost({title, content, coverPhoto })
        setMarkdownText("# New post")
        localStorage.removeItem("New Title")
        localStorage.removeItem("New Post")
      }
      useEffect(()=> {
        if (coverPhoto !== undefined) {
            const temp = URL.createObjectURL(coverPhoto)
            setPreviewCoverPhoto(temp)
            console.log(temp)
            URL.revokeObjectURL(temp)
        }

      },[coverPhoto])



    return(
        <>
        <Header/>
        <div className=" w-[90%] mx-auto">
            <h2 className="text-4xl font-semibold text-gray-500">Share your new idea</h2>
            <div className="">
                <label htmlFor="title"></label>
                <textarea className="w-full font-semibold border-2 border-gray-200  resize-none p-3 text-3xl flex items-center outline-none my-4 text-gray-700" name="title" id="title" placeholder="Enter Title here............." onChange={(e)=> setTitle(e.target.value)}></textarea>
            </div>
            <div className="">
                <img src={previewCoverPhoto} alt="" />
                <input type="file" accept="image/jpg, image/jpeg, imgae/png" onChange={(e)=> setCoverPhoto(e.target.files?.[0])} />

            </div>
            <div className="w-full lg:h-[700px] grid grid-cols-1 lg:grid-cols-2 gap-2 bg-gray-950">
                <Editor markdownText={markdownText} setMarkdownText={storeMarkdown} />
                <Preview markdownText={markdownText} />
            </div>

            <div className="flex justify-end gap-4 p-5">
                <button onClick={()=>storeMarkdown} className="w-[150px] font-semibold rounded-md relative p-2 border border-green-500 bg-green-500">Save as draft</button>
                <button onClick={publish} className="w-[150px] font-semibold rounded-md relative p-2 border border-green-500 bg-green-500">Publish</button>
            </div>
        </div>
        </>
    )
}