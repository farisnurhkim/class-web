"use client";
import React from 'react';
import { motion } from "framer-motion";
import { cn } from '@/lib/utils';

const H2 = ({ className, children }: { className?: string, children: React.ReactNode }) => {
    return (
        <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.8 }}
            className={cn("font-bold text-slate-800 dark:text-white", className)}
        >
        {children}
        </motion.h2>
    )
}

export default H2