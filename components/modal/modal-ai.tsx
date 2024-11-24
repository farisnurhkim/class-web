/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area';
import { useModal } from '@/hooks/useModal';
import { Bot, Send } from 'lucide-react';
import SignInButton from '../signin-button';
import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useConnectionStatus } from '@/hooks/useConnectionStatus';

const ModalAi = () => {
  const { type, isOpen, onClose, data } = useModal();
  const user = data.user;
  const isOpenModal = isOpen && type === "AI";
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState<any[]>([]);

  const isOnline = useConnectionStatus();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isOnline) {
      console.error("You are Offline");
      return;
    }
    
    if (!user) {
      console.error("Unauthorized");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      if (!text || text.trim() === "") {
        console.error("Text is empty!");
        throw new Error("Text is empty!");
      }

    
      const currentText = text;
     
      let newHistory = [
        ...history,
        {
          role: "user",
          text: currentText ,
        },
      ];
      setHistory(newHistory);
      setText("");


      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: currentText })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      newHistory = [
        ...history,
        {
          role: "user",
          text: currentText,
        },
        {
          role: "model",
          text: result.data, 
        },
      ];

      setHistory(newHistory);



    } catch (error) {
      if (error instanceof Error) {
        setError(error.message + " Maaf Terjadi Kesalahan, mohon untuk refresh halaman" || "Unexpected error occurred");
      } else {
        setError("An unknown error occurred");
      }
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isUserScrollingUp, setIsUserScrollingUp] = useState(false);

  const scrollToBottom = useCallback(() => {
    if (!isUserScrollingUp && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isUserScrollingUp]);

  useEffect(() => {
      scrollToBottom();
  }, [history, scrollToBottom]);

  const handleScroll = () => {
      if (containerRef.current) {
          const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
          setIsUserScrollingUp(scrollTop + clientHeight < scrollHeight - 100);
      }
  };


  return (
    <Dialog open={isOpenModal} onOpenChange={() => onClose()}>
      <DialogContent className='h-[calc(100vh-35px)] sm:h-[calc(100vh-50)] md:h-[calc(100vh-70)] lg:h-[calc(100vh-90)] flex flex-col'>
        <DialogHeader>
          <DialogTitle className='flex items-center gap-1'>
            <Bot className='text-black dark:text-white w-7 h-7' />
            <span>RPL ONE AI</span>
          </DialogTitle>
          <DialogDescription className='text-sm'>
            More detailed information is available for grades 11 and 12, with the most content available in those grades, while data for grade 10 is still limited.
          </DialogDescription>
        </DialogHeader>

        {!user && (
          <div className="w-full h-full flex items-center justify-center">
            <SignInButton />
          </div>
        )}

        {user && (
          <>
            <ScrollArea onScroll={handleScroll} ref={containerRef} className="flex-1">
              <div className="mx-3">
                <div className='flex justify-start'>
                  <div className='text-black rounded-lg px-4 py-2 bg-gray-300 text-sm mb-3'>
                    Hello! I am RPL One AI, an intelligent assistant specifically designed to help you on the RPL 1 class website for the 21st batch. I am here to make it easier for you to access information about RPL 1 and SMK Taruna Bangsa, as well as to answer your questions. Is there anything I can assist you with?
                  </div>
                </div>
                {history.map((item, index) => (
                  <div key={index}>
                    <div className={cn("flex", item.role === "user" ? "justify-end" : "justify-start")}>
                      <div className={cn(" rounded-lg px-4 py-2 text-sm mb-3", item.role === "user" ? "bg-blue-600 text-white" : "bg-gray-300 text-black")}
                      dangerouslySetInnerHTML={{ __html: item.text  }}
                      >
                      </div>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="loader"></div>
                  </div>
                )}

                {error && (
                  <div className='flex justify-start'>
                  <div className='text-black rounded-lg px-4 py-2 bg-gray-300 text-sm mb-3'>
                    {error}
                  </div>
                </div>
                )}

                <div ref={messagesEndRef}/>

              </div>
            </ScrollArea>
            <form onSubmit={handleSubmit}>
              <div className="flex items-center">
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder={isOnline ? "Type your message here..." : "You are offline"} required className='w-full "bg-gray-200 dark:bg-slate-700 text-black dark:text-white py-2 px-3 rounded-lg flex-1 mr-2' />
                <button disabled={isLoading} type='submit' className={cn("bg-blue-600 text-white py-2 px-3 rounded-lg flex items-center", isLoading && "cursor-not-allowed bg-opacity-75")}>
                  <Send className='text-white w-5 h-5' />
                </button>
              </div>
            </form>
          </>
        )}



      </DialogContent>
    </Dialog>
  )
}

export default ModalAi