"use client";

import { database } from "@/lib/firebaseSDK";
import { child, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";


export interface Chat {
    id: string;
    username: string;
    email: string;
    image: string;
    content: string;
    reply?: string; // Optional, karena reply mungkin tidak selalu ada
    isDeleted: boolean;
    isError?: boolean;
    isSending: boolean;
    createdAt: string;
}


export const useGetDataMessages = () => {
    const [data, setData] = useState<Chat[] | []>([]);

    useEffect(() => {
        const rootRef = ref(database);
        const dbPath = child(rootRef, "chat");

        const unSubscribe = onValue(dbPath, (snapshot) => {
            if (snapshot.exists()) {
                const value = snapshot.val();
                const dataArray = Object.values(value);
                setData(dataArray as Chat[]);
            }
        })

        return () => unSubscribe();
    }, [])

    return { data };
}