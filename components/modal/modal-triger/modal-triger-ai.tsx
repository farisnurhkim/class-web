"use client"
import { useModal } from '@/hooks/useModal'
import { Bot } from 'lucide-react'
import { User } from "next-auth"


const ModalTrigerAi = ({user}: {user: User | null | undefined}) => {
    const { onOpen } = useModal();
  return (
    <button onClick={() => onOpen('AI', {user}) } className='fixed z-[999] bottom-3 right-4 bg-blue-600 rounded-full p-3'>
        <Bot className='w-7 h-7 text-white'/>
    </button>
  )
}

export default ModalTrigerAi