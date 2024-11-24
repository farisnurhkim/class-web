"use client"

import { useEffect, useState } from "react"
import ModalAi from "./modal/modal-ai";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) return null;

  return (
    <>
        <ModalAi/>
    </>
  )
}

export default ModalProvider