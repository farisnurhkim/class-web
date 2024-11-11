/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes';
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [onScroll, setOnScroll] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { setTheme, theme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState("");
    const  isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

    useEffect(() => {
        setIsDarkMode(theme === "dark" ? "dark" : "light");
    }, [theme]);

    const handleDarkMode = () => {
        if (theme === "dark") {
            setTheme("light")
        } else {
            setTheme("dark")
        }
    }

    useEffect(() => {
        //  Fixed Navbar
        window.addEventListener('scroll', () => {
            if (scrollY > 0) {
                setOnScroll(!onScroll);
            } else {
                setOnScroll(onScroll);
            }
        })
    }, []);



    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let current = '';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute('id') || "";
                }
            });

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const ToggleModeIcon = () => {
        if (isDarkMode === "dark") {
            return <Sun className='w-6 h-6 dark:stroke-white' />
        }
        return <Moon className='w-6 h-6 ' />

    }

    const toggleMenu = useRef(null);
    const navMenu = useRef(null);
    useEffect(() => {
        window.addEventListener('click', (event) => {
            if (event.target !== toggleMenu.current && event.target !== navMenu.current) {
                setIsOpen(false);
            }
        })
    }, [])



    return (
        <header className={cn(
            "top-0 w-full z-[999]",
            onScroll ? "fixed bg-white shadow-md dark:bg-inherit " : "absolute",
            isOpen && (!onScroll && !isDesktop) && "bg-gray-300 dark:bg-slate-900"

        )}>
            <div className="mx-4 ralative">
                <div className="container ">
                    <div className="flex items-center justify-between">
                        <a href="/" className="py-4 flex items-center gap-2">
                            <Image src="/icon/rpl1.jpg" alt='Rekayasa Perangkat Lunak' width={100} height={100} className="rounded-full w-16" />
                            <h1 className="text-xl font-bold">XII RPL1</h1>
                        </a>
                        <div className="py-4 flex items-center">

                            <nav ref={navMenu} className={cn(
                                "max-md:absolute left-0 top-full w-full md:block transition-all origin-top  duration-200 ease-in-out md:static",
                                isOpen ? "max-md:scale-y-1" : "max-md:scale-y-0",
                                isOpen && (!onScroll && !isDesktop) && "bg-gray-300 dark:bg-slate-900",
                                isOpen && onScroll && "bg-white shadow-lg dark:bg-slate-900"

                            )}>
                                <ul className="mx-4 space-y-5 md:space-y-0 md:mx-0 md:flex md:items-center ">
                                    <li className={cn(
                                        "px-4 py-2 rounded-full text-black dark:text-white",
                                        activeSection === "home" && "bg-blue-600 text-white"
                                    )}>
                                        <a href="#home" className={cn(
                                            "transition-all duration-300 ease-in-out font-medium",
                                            activeSection !== "home" && "hover:text-blue-600"
                                        )}>Home</a>
                                    </li>
                                    <li className={cn(
                                        "px-4 py-2 rounded-full text-black dark:text-white",
                                        activeSection === "structure" && "bg-blue-600 text-white"
                                    )}>
                                        <a href="#structure" className={cn(
                                            "transition-all duration-300 ease-in-out font-medium",
                                            activeSection !== "structure" && "hover:text-blue-600"
                                        )}>Structure</a>
                                    </li>
                                    <li className={cn(
                                        "px-4 py-2 rounded-full text-black dark:text-white",
                                        activeSection === "students" && "bg-blue-600 text-white"
                                    )}>
                                        <a href="#students" className={cn(
                                            "transition-all duration-300 ease-in-out font-medium",
                                            activeSection !== "students" && "hover:text-blue-600"
                                        )}>Students</a>
                                    </li>

                                    <li className={cn(
                                        "px-4 py-2 rounded-full text-black dark:text-white",
                                        activeSection === "gallery" && "bg-blue-600 text-white"
                                    )}>
                                        <a href="#gallery" className={cn(
                                            "transition-all duration-300 ease-in-out font-medium",
                                            activeSection !== "gallery" && "hover:text-blue-600"
                                        )}>Gallery</a>
                                    </li>
                                    <li className={cn(
                                        "px-4 py-2 rounded-full text-black dark:text-white",
                                        activeSection === "chat" && "bg-blue-600 text-white"
                                    )}>
                                        <a href="#chat" className={cn(
                                            "transition-all duration-300 ease-in-out font-medium",
                                            activeSection !== "chat" && "hover:text-blue-600"
                                        )}>Chat</a>
                                    </li>
                                    <li className={cn(
                                        "px-4 py-2 rounded-full text-black dark:text-white",
                                    )}>
                                        <button onClick={handleDarkMode}><ToggleModeIcon /></button>
                                    </li>
                                </ul>
                            </nav>
                            <button ref={toggleMenu} onClick={() => setIsOpen(!isOpen)} className="block md:hidden">
                                <span
                                    className={cn(
                                        "hamburger-line transition duration-300 ease-in-out origin-top-left",
                                        isOpen && "rotate-45",
                                    )}
                                ></span>
                                <span
                                    className={cn(
                                        "hamburger-line transition duration-300 ease-in-out origin-top-left",
                                        isOpen && "scale-0",
                                    )}
                                ></span>
                                <span
                                    className={cn(
                                        "hamburger-line transition duration-300 ease-in-out origin-bottom-left",
                                        isOpen && "-rotate-45",
                                    )}
                                ></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar