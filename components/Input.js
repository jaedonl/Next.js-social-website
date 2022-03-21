import { useState, useRef, useEffect } from 'react'
import { ChartBarIcon, EmojiHappyIcon, CalendarIcon, PhotographIcon, XIcon } from '@heroicons/react/outline'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import { db, storage } from '../firebase'
import { addDoc, collection, doc, serverTimestamp, updateDoc } from '@firebase/firestore'
import { getDownloadURL, ref, uploadString } from '@firebase/storage'

const Input = () => {
    const [input, setInput] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)
    const [showEmojis, setShowEmojis] = useState(false)
    const [loading, setLoading] = useState(false)
    const filePickerRef = useRef(null)

    const sendPost = async () => {
        if (loading) return
        setLoading(true)

        const docRef = await addDoc(collection(db, 'posts'), {
            // id: session.user.uid,
            // username: session.user.name,
            // userImg: session.user.image,
            // tag: session.user.tag,
            text: input,
            timestamp: serverTimestamp(),
        })
    }

    const addImageToPost = () => {

    }

    const addEmoji = (e) => {
        // let sym = e.unified.split("-")
        // let codesArray = []
        // sym.forEach((el) => codesArray.push("0x" + el))
        // let emoji = String.fromCodePoint(...codesArray)
        // setInput(input + e.native)
        setInput(input + e.native)
    }    

    useEffect(() => {
        
    })

    return (
        <div className={`border-b border-[#EFF3F4]-700 p-3 flex space-x-3 overflow-y-scroll`}>
            <img src="/assets/google-jaedon.jpeg" alt="name" className="h-10 w-10 rounded-full xl:mr-2.5 cursor-pointer" />

            <div className="w-full divide-y divide-[#EFF3F4]-700"> 
                <div className={`${selectedFile && 'pb-7'} ${input && 'space-y-2.5'}`}> 
                    <textarea 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="What's happening?"
                        rows="2"                         
                        className="bg-transparent outline-none text-[#333] text-lg placeholder-[#333]-500 tracking-wide w-full min-h-[50px]"                        
                    />
                    
                    {selectedFile && (
                        <div className="relative">
                            <div
                                onClick={() => setSelectedFile(null)} 
                                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer">
                                <XIcon className="text-white h-5" />
                            </div>

                            <img src={selectedFile} alt="selected file" id="choose-file" name="choose-file" className="rounded-2xl max-h-80 object-contain" />
                        </div>
                    )}                    
                </div>

                <div className="flex items-center justify-between pt-2.5">
                    <div className="flex items-center">
                        <div className="icon" onClick={() => filePickerRef.current.click()}>
                            <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
                            <input type="file" hidden ref={filePickerRef} onChange={addImageToPost} />
                            
                        </div>
                        <div className="icon">
                            <ChartBarIcon className="h-[22px] text-[#1d9bf0]" />                            
                        </div>                        
                        <div className="icon">
                            <CalendarIcon className="h-[22px] text-[#1d9bf0]" />                            
                        </div>
                        <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
                            <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]" />                            
                        </div>

                        {showEmojis && (
                            <Picker
                                onSelect={addEmoji}
                                style={{
                                    position: "absolute",
                                    marginTop: "465px",                     
                                    maxWidth: "320px",
                                    borderRadius: "20px",
                                }}                                
                                theme="auto"                                                  
                            />
                        )}
                    </div>
                    <button 
                        type="button" 
                        disabled={!input.trim() && !selectedFile}
                        className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default"                        
                        onClick={sendPost}
                        >
                        Tweet
                    </button>                    
                </div>
            </div>          
        </div>
    )
}

export default Input