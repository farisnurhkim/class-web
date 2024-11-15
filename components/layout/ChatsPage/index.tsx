/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { signout } from '@/app/actions';
import Avatar from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import H2 from '@/components/ui/H2'
import { useConnectionStatus } from '@/hooks/useConnectionStatus';
import { Chat, useGetDataMessages } from '@/hooks/useGetDataMessages';
import { cn } from '@/lib/utils';
import { Check, CheckCheck, CircleAlert, MessageCircleOff, Send, X } from 'lucide-react'
import { User } from 'next-auth';
import { useCallback, useEffect, useOptimistic, useRef, useState } from 'react';
import { format } from "date-fns";
import { Copy, Loader, Reply, Trash2 } from 'lucide-react'
import { v4 as uuidv4 } from 'uuid';
import { motion, AnimatePresence } from 'framer-motion';


const ChatsPage = ({ user }: { user: User | null | undefined }) => {
    const id = uuidv4();
    const isOnline = useConnectionStatus();
    const { data } = useGetDataMessages();
    const [Omessages, OaddMessages] = useOptimistic(data, (prevMessages, newMessages) => [
        ...prevMessages, newMessages as Chat
    ]);

    const [failedMessages, setFailedMessages] = useState<Chat[]>([]);
    const [debouncedMessages, setDebouncedMessages] = useState<Chat[]>(Omessages);

    useEffect(() => {
        const handler = setTimeout(() => {
            const combinedMessages = [...Omessages, ...failedMessages].sort((a, b) =>
                new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );

            const isDifferent = JSON.stringify(debouncedMessages) !== JSON.stringify(combinedMessages);

            if (isDifferent) {
                setDebouncedMessages(combinedMessages);
            }
        }, 100);

        return () => clearTimeout(handler);

    }, [Omessages, failedMessages, debouncedMessages]);

    const [value, setValue] = useState("");
    const [copied, setCopied] = useState(false);

    const [reply, setReply] = useState({
        isReply: false,
        username: "",
    });
    const [keyReply, setKeyReply] = useState("");

    const handleCopy = (content: string) => {
        setCopied(true);
        handleMenuClose();

        navigator.clipboard.writeText(content);

        setTimeout(() => {
            setCopied(false);
        }, 1000);
    }

    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleSendMessage = async () => {
        const date = new Date().toISOString();
        const message = {
            id: id,
            username: user?.name || "",
            email: user?.email || "",
            image: user?.image || "",
            content: value || "",
            reply: keyReply,
            isDeleted: false,
            isSending: true,
            createdAt: date,
        }

        if (!user) {
            console.error('User is not authenticated');
            return;
        }

        if (!value) {
            console.error("Please enter a message");
            return;
        }

        setValue("");
        handleCloseReply();
        scrollToBottom();

        try {
            OaddMessages(message)

            if (!isOnline) {
                throw new Error('You are offline');
            }

            const res = await fetch("/api/chat/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(message),

            });


            if (res.status !== 200) {
                throw new Error(res.statusText)
            }


        } catch (error) {
            if (error instanceof Error) {
                setFailedMessages(prev => [...prev, { ...message, isSending: false, isError: true }]);
            }
            console.log(error)
        }
    }

    const handleDelete = async (id: string) => {
        handleMenuClose();
        try {
            if (!user) {
                throw new Error('User is not authenticated');
            }

            if (!isOnline) {
                throw new Error('You are offline');
            }

            const errorIdMessage = failedMessages.find(item => item.id === id);

            if (errorIdMessage) {
                const updateMessage = failedMessages.filter(item => item.id !== id);
                setFailedMessages(updateMessage);
                return;
            }

            const res = await fetch("/api/chat/delete", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id })
            });

            if (res.status !== 200) {
                throw new Error(res.statusText)
            }

        } catch (error) {
            console.log(error);
        }
    }

    const handleCloseReply = () => {
        setReply({
            isReply: false,
            username: "",
        });
        setKeyReply("");
    }

    const inputRef = useRef<HTMLInputElement | null>(null);
    const handleReply = useCallback(async (id: string, username: string) => {
        setReply({ isReply: true, username });
        setKeyReply(id);
        handleMenuClose();

        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    }, []);

    useEffect(() => {
        if (reply.isReply) {
            inputRef.current?.focus();
        }
    }, [reply]);

    // scroll chat
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isUserScrollingUp, setIsUserScrollingUp] = useState(false);

    const scrollToBottom = useCallback(() => {
        if (containerRef.current && !isUserScrollingUp) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [isUserScrollingUp]);

    useEffect(() => {
        scrollToBottom();
    }, [debouncedMessages, scrollToBottom]);

    const handleScroll = () => {
        if (containerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
            setIsUserScrollingUp(scrollTop + clientHeight < scrollHeight - 100);
        }
    };


    // scroll lihat pesan reply
    const messageRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const scrollToMessage = (id: string) => {
        const element = messageRefs.current[id];
        handleMenuClose();
        if (element) {
            window.scrollTo({ top: window.scrollY + 1, behavior: 'smooth' });
            setTimeout(() => {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }, 600)

            element.classList.add('bg-blue-200');
            element.classList.add('dark:bg-slate-800');
            setTimeout(() => {
                element.classList.remove('bg-blue-200');
                element.classList.remove('dark:bg-slate-800');
            }, 2100);
        }
    };



    const [showMenu, setShowMenu] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const [selectedMessage, setSelectedMessage] = useState("");

    const calculateMenuPosition = (clickX: number, clickY: number) => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const menuWidth = menuRef.current?.offsetWidth || 200;
        const menuHeight = menuRef.current?.offsetHeight || 300;

        let x = clickX;
        let y = clickY;

        if (x + menuWidth > viewportWidth) {
            x = viewportWidth - menuWidth - 10;
        }

        if (y + menuHeight > viewportHeight) {
            y = viewportHeight - menuHeight - 10;
        }

        x = Math.max(10, x);
        y = Math.max(10, y);

        return { x, y };
    };

    const handleLongPressStart = useCallback((e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>, messageId: string) => {
        const pressX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const pressY = 'touches' in e ? e.touches[0].clientY : e.clientY;

        timeoutRef.current = setTimeout(() => {
            const position = calculateMenuPosition(pressX, pressY);
            setSelectedMessage(messageId)
            setMenuPosition(position);
            setShowMenu(true);
        }, 1000);
    }, []);

    const handleLongPressEnd = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }, []);


    const handleMenuClose = () => {
        setShowMenu(false);
    };

    useEffect(() => {
        if (!showMenu) {
            setSelectedMessage("");
        }
    }, [showMenu])

    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [showMenu]);

    const menuVariants = {
        initial: {
            opacity: 0,
            scale: 0.95,
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.15,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.1,
                ease: "easeIn"
            }
        }
    };

    const backdropVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.2
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.15,
                delay: 0.1
            }
        }
    };

    const buttonVariants = {
        hover: {
            backgroundColor: "rgb(243, 244, 246)",
            transition: { duration: 0.2 }
        },
        tap: {
            backgroundColor: "rgb(229, 231, 235)",
            scale: 0.98
        }
    };



    return (
        <>
            <H2 className="mb-5 pt-12 text-2xl md:text-3xl">Class Chat</H2>
            <div className="bg-background rounded-xl overflow-hidden relative">
                <div className="w-full py-3 px-3 shadow-md dark:bg-slate-800 flex items-center justify-between">
                    <div className="text-white font-sans font-bold w-full flex items-center">
                        {user && (
                            <DropdownMenu >
                                <DropdownMenuTrigger>
                                    <Avatar avatarUrl={user.image || ""} />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>
                                        {user && (
                                            <span className="ml-2">{user.name}</span>
                                        )}
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => signout()}>
                                        Sign Out
                                    </DropdownMenuItem>

                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}

                    </div>
                    <div className="flex items-center w-full justify-end gap-3 py-2">
                        <span className="block w-5 h-5 bg-rose-400 rounded-full animate-pulse" />
                        <span className="block w-5 h-5 bg-yellow-400 rounded-full animate-pulse" />
                        <span className="block w-5 h-5 bg-green-400 rounded-full animate-pulse" />
                    </div>
                </div>
                <div ref={containerRef} onScroll={handleScroll} className="w-full mx-auto px-4 py-6 text-white font-sans h-[590px] md:h-[550px] lg:h-[510px] overflow-y-auto pb-16">

                    {debouncedMessages.map((message, index) => {
                        const dataReply = debouncedMessages.find((msg) => msg.id === message.reply);
                        const selectedMessageId = debouncedMessages.find((msg) => msg.id === selectedMessage);
                        return (
                            <div ref={(el: HTMLDivElement | null) => {
                                if (el) {
                                    messageRefs.current[message.id] = el;
                                }
                            }} key={index} className='mb-2 py-2 px-1 w-full transition duration-300 rounded-lg'>

                                <div className={cn("flex relative items-start mb-3", user?.email === message.email && "justify-end")}>
                                    {message.email !== user?.email && (
                                        <Avatar avatarUrl={message.image} className='mr-2' />
                                    )}



                                    <motion.div
                                        whileHover={{ scale: 1.005 }}
                                        whileTap={{ scale: 0.995 }}
                                        onTouchStart={(e) => handleLongPressStart(e, message.id)}
                                        onTouchEnd={handleLongPressEnd}
                                        onMouseDown={(e) => handleLongPressStart(e, message.id)}
                                        onMouseUp={handleLongPressEnd}
                                        onMouseLeave={handleLongPressEnd}
                                        className={cn("px-3 py-2 rounded-lg max-w-[80%]", user?.email === message.email ? "bg-blue-600" : "bg-gray-200 dark:bg-slate-800")}>
                                        {message.email !== user?.email && (
                                            <div className="text-orange-400 font-bold select-none">{message.username}</div>
                                        )}

                                        {dataReply && (
                                            <div onClick={() => scrollToMessage(message?.reply || "")}
                                             className={cn("px-2 z-[150] py-1 rounded-md border-l-4 border-l-green-600 mt-2", user && user?.email === message?.email ? "bg-blue-700" : "bg-gray-300 dark:bg-slate-900")}>
                                                <div className={cn("font-semibold select-none", dataReply?.email === user?.email ? "text-green-500" : " text-orange-400")}>{dataReply?.email === user?.email ? "You" : dataReply?.username}</div>
                                                <div className={cn("text-sm select-none line-clamp-3", dataReply?.isDeleted ? "text-gray-400 dark:text-gray-400 italic flex items-center gap-1" : "dark:text-white")}>
                                                    {dataReply?.isDeleted && (
                                                        <MessageCircleOff className='text-gray-400 w-4 h-4' />
                                                    )}
                                                    <span className={cn("text-sm mt-1 select-none", dataReply?.isDeleted ? "text-gray-400 dark:text-gray-400 italic" : "dark:text-white",
                                                        user && user?.email !== message?.email ? "text-black" : "text-white"
                                                    )}
                                                    >

                                                        {dataReply?.content}

                                                    </span>
                                                </div>
                                                <div className="text-gray-100 dark:text-gray-400 text-xs text-right">{dataReply?.createdAt && format(new Date(dataReply?.createdAt), "HH:mm")}</div>
                                            </div>
                                        )}


                                        <div className={cn("text-sm mt-1 select-none", user?.email === message.email ? "text-white" : "text-black",
                                            message.isDeleted && "flex gap-1 text-gray-400 items-center "
                                        )}>
                                            {message.isDeleted && (
                                                <MessageCircleOff className="text-gray-400 dark:text-gray-400 italic h-4 w-4" />
                                            )}
                                            <span className={cn("text-sm mt-1 select-none", message.isDeleted ? "text-gray-400 dark:text-gray-400 italic" : "dark:text-white")}>
                                                {message.content}
                                            </span>

                                        </div>

                                    </motion.div>

                                    {/* menu */}
                                    <AnimatePresence>
                                        {showMenu && (!selectedMessageId?.isDeleted) && (
                                            <>
                                                <motion.div
                                                    className="fixed inset-0 z-[999] bg-black bg-opacity-10"
                                                    onClick={handleMenuClose}
                                                    variants={backdropVariants}
                                                    initial="initial"
                                                    animate="animate"
                                                    exit="exit"
                                                />
                                                <motion.div
                                                    ref={menuRef}
                                                    className="fixed z-[99999] bg-background rounded-lg shadow-md"
                                                    style={{
                                                        left: `${menuPosition.x}px`,
                                                        top: `${menuPosition.y}px`,
                                                        zIndex: 1000,
                                                        originX: 0,
                                                        originY: 0
                                                    }}
                                                    variants={menuVariants}
                                                    initial="initial"
                                                    animate="animate"
                                                    exit="exit"
                                                >
                                                    <div className="py-1">
                                                        {selectedMessageId && (

                                                            <>
                                                                {!selectedMessageId.isDeleted && (!selectedMessageId.isError || selectedMessageId.isSending) && user && (
                                                                    <motion.button
                                                                        onClick={() => handleReply(selectedMessageId.id, selectedMessageId.username)}
                                                                        className="flex group items-center space-x-3 px-4 py-2 w-full"
                                                                        variants={buttonVariants}
                                                                        whileHover="hover"
                                                                        whileTap="tap"
                                                                    >
                                                                        <Reply className="w-4 h-4 text-black dark:text-white group-hover:text-black" />
                                                                        <span className='select-none group-hover:text-black text-black dark:text-white'>Reply</span>
                                                                    </motion.button>
                                                                )}

                                                               
                                                                {user && user?.email === selectedMessageId.email && !selectedMessageId.isDeleted && (
                                                                    <motion.button
                                                                        onClick={() => handleDelete(selectedMessageId.id)}
                                                                        className="flex group items-center space-x-3 px-4 py-2 w-full"
                                                                        variants={buttonVariants}
                                                                        whileHover="hover"
                                                                        whileTap="tap"
                                                                    >
                                                                        <Trash2 className="w-4 h-4 text-black dark:text-white group-hover:text-black " />
                                                                        <span className='select-none text-black dark:text-white group-hover:text-black'>Delete</span>
                                                                    </motion.button>
                                                                )}
                                                                {!selectedMessageId.isDeleted && (
                                                                    <motion.button
                                                                        onClick={() => handleCopy(selectedMessageId.content)}
                                                                        className="flex group items-center space-x-3 px-4 py-2 w-full"
                                                                        variants={buttonVariants}
                                                                        whileHover="hover"
                                                                        whileTap="tap"
                                                                    >
                                                                        {copied ? (
                                                                            <Loader className='w-4 h-4 animate-spin text-black dark:text-white group-hover:text-black' />
                                                                        ) : (
                                                                            <Copy className="w-4 h-4 text-black dark:text-white group-hover:text-black" />
                                                                        )}
                                                                        <span className='select-none text-black dark:text-white group-hover:text-black'>Copy</span>
                                                                    </motion.button>
                                                                )}
                                                            </>
                                                        )}



                                                    </div>
                                                </motion.div>
                                            </>
                                        )}
                                    </AnimatePresence>



                                </div>
                                <div className={cn("flex text-gray-400 text-xs text-right", user?.email === message.email ? "justify-end" : "ml-12")}>
                                    <span>
                                        {format(new Date(message.createdAt), "yyyy-MM-dd HH:mm:ss")}

                                    </span>
                                    <span>
                                        {user && message.isError && message.email === user.email && !message.isSending && (
                                            <CircleAlert className='text-rose-600 w-4 h-4 ml-2' />
                                        )}

                                        {user && !message.isError && user.email === message.email && message.isSending && (
                                            <Check className='ml-2 w-4 h-4' />
                                        )}
                                        {user && !message.isError && user.email === message.email && !message.isSending && (
                                            <CheckCheck className='ml-2 w-4 h-4' />
                                        )}
                                    </span>
                                </div>
                            </div>
                        )

                    })}

                    <div ref={messagesEndRef} />


                    {user && (
                        <div className="absolute z-50 bottom-0 left-0 px-4 mx-auto bg-background py-3 w-full">
                            {reply.isReply && (
                                <div className='relative'>
                                    <span className="text-black dark:text-white">Replying to {reply.username === user?.name ? 'You' : `@ ${reply.username}`}</span>
                                    <button onClick={handleCloseReply} className='absolute right-2 top-1'>
                                        <X className='w-5 h-5 text-black dark:text-white' />
                                    </button>
                                </div>
                            )}
                            <form action={handleSendMessage} className="flex items-center mt-4">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    onChange={handleMessageChange}
                                    value={value}
                                    className={cn("bg-gray-200 dark:bg-slate-700 text-black dark:text-white py-2 px-3 rounded-lg flex-1 mr-2")}
                                    placeholder={isOnline ? "Send a message..." : "You are offline"}
                                />
                                <button
                                    type="submit"
                                    disabled={!value ? true : false}
                                    className="bg-blue-600 text-white py-2 px-3 rounded-lg flex items-center"
                                >
                                    <Send className="w-5 h-5 mr-1" />
                                </button>
                            </form>
                        </div>
                    )}


                </div>


            </div>
        </>
    )
}

export default ChatsPage