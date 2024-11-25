"use client"
import { useModal } from '@/hooks/useModal'
import { HandHeart } from 'lucide-react'


const ModalTrigerTeacherDay = () => {
    const { onOpen } = useModal();
  return (
    <button onClick={() => onOpen('TeacherDay') } className='fixed z-[999] bottom-3 left-4 bg-blue-600 rounded-full p-3'>
        <HandHeart className='w-7 h-7 text-white'/>
    </button>
  )
}

export default ModalTrigerTeacherDay