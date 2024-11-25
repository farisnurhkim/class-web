"use client"

import { useEffect, useState } from "react"
import ModalAi from "./modal/modal-ai";
import ModalTeacherDay from "./modal/modal-teacher-day";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) return null;

  return (
    <>
        <ModalAi/>
        <ModalTeacherDay/>
    </>
  )
}

export default ModalProvider