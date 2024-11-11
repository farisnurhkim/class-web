"use client";
import React from 'react'
import ShineBorder from '../ui/shine-border';
import { motion } from 'framer-motion';
import { IStudents } from '@/lib/constants';
import { Instagram } from 'lucide-react';

const Students = ({ student }: { student: IStudents }) => {
    const name = student.name.split(' ');
    const [letterFirstName, letterLastName] = name;
    const firstName = letterFirstName ? letterFirstName.charAt(0).toUpperCase() : '';
    const lastName = letterLastName ? letterLastName.charAt(0).toUpperCase() : '';

    const profileName = `${firstName}${lastName}`;



    return (
        <motion.div
            initial={{ scale: 0.5, y: 10, opacity: 0 }}
            whileInView={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}

            className="w-full col-span-full xsm:col-span-2 mobile:col-span-6 md:col-span-4 lg:col-span-3 bg-background rounded-md shadow-lg">
            <ShineBorder
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                className='h-full '
            >
                <div className='flex items-center w-full mr-2 py-2'>
                    <div className="flex items-center justify-center rounded-full w-12 h-12 bg-gray-200">
                        <span className="text-blue-400 font-bold">{profileName}</span>
                    </div>
                    <div className='flex flex-col ml-2'>
                        <h2 className="text-sm md:text-base font-semibold line-clamp-1">{student.name}</h2>
                        {student.instagram && (
                            <div className='flex items-center gap-1'>
                                <Instagram className='w-4 h-4' /> 
                                <p className="text-xs md:text-sm">@{student.instagram}</p>
                            </div>
                        )}
                    </div>
                </div>
                {student.role && (
                    <button className='flex items-center mt-1 cursor-default px-3 py-1 text-xs md:text-sm rounded-full bg-blue-500 mb-3 text-white '>
                        {student.role}
                    </button>
                )}
            </ShineBorder>
        </motion.div>
    )
}

export default Students