"use client"
import H2 from '@/components/ui/H2'
import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"
import { Search } from 'lucide-react'
import { IStudents, students } from '@/lib/constants'
import Students from '@/components/Students'

const StudentsPage = () => {
  const [displayedStudents, setDisplayedStudents] = useState<IStudents[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const studentsLength = students.filter(student => student.name.toLowerCase().includes(searchQuery.toLowerCase())).length;
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setVisibleCount(visibleCount);
  }

  const handleLoadMore = () => {
    setVisibleCount(visibleCount + 8);
  }

  useEffect(() => {
    const filteredStudents = students.filter(student => student.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setDisplayedStudents(filteredStudents.slice(0, visibleCount));

  }, [searchQuery, visibleCount]);

  return (
   <>
          <H2 className="mb-5 pt-12 text-2xl md:text-3xl">Students</H2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full mb-4 flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 bg-white dark:bg-slate-800">
            <Search />
            <input type="text" className="w-full p-1 bg-transparent outline-none ring-0 ring-offset-0 border-none" placeholder="Search student..." onChange={handleSearch} />
          </motion.div>
          <div className="w-full grid grid-cols-4 mobile:grid-cols-12 gap-2">
            {displayedStudents.map((student, index) => (
              <Students key={index} student={student} />
            ))}
          </div>
          {visibleCount < studentsLength && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              onClick={handleLoadMore} className="flex items-center cursor-pointer justify-center my-4 bg-gray-300 dark:bg-slate-800  py-3 rounded-lg">
              <span >Load More</span>
            </motion.div>
          )}
     </>
  )
}

export default StudentsPage