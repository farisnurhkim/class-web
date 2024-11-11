"use client";
import React, { useEffect, useState } from 'react'
import { MagicCard } from '../ui/magic-card'
import { useTheme } from 'next-themes';
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';

const Walas = ({ walasName, periode, edu, animateX }: { walasName: string, periode: string, edu: string, animateX: number }) => {
    const { theme } = useTheme();
    const [hoverColor, setHoverColor] = useState('#d1d5db');
    useEffect(() => {
        if (theme === 'dark') {
            setHoverColor('#94a3b8');
        } else {
            setHoverColor('#d1d5db');
        }
    }, [theme])
    
    const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

    return (
        <motion.div
            initial={{
                opacity: 0,
                x: isDesktop ? animateX : 0,
                y: isDesktop ? 0 : -50
            }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.7 }}
            className="w-full px-4 py-2 mb-3">
            <MagicCard gradientSize={100} gradientColor={hoverColor} className='dark:bg-slate-700 shadow-lg'>
                <div className="mx-2 py-4 flex w-full items-center">
                    <div className='flex items-center justify-center bg-gray-300 rounded-full p-3'>
                        <Image src="/img/teacher.png" alt='teacher' width={50} height={50} />
                    </div>
                    <div className="flex-grow px-4">
                        <h2 className="font-semibold text-sm md:text-base">{walasName}</h2>
                        <p className="text-xs md:text-sm">Homeroom Teacher {periode}</p>
                        <p className='text-xs md:text-sm'>{edu}</p>
                    </div>
                </div>
            </MagicCard>
        </motion.div>

    )
}

export default Walas