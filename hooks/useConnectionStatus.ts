"use client";

import { useEffect, useState } from "react";

export const useConnectionStatus = () => {
    const [isOnline, setIsOnline] = useState(false);

    useEffect(() => {
        setIsOnline(navigator.onLine);

        const online = () => {
            setIsOnline(true);
        }

        const offline = () => {
            setIsOnline(false);
        }
        
        window.addEventListener('online', online);
        window.addEventListener('offline', offline);

        return () => {
            window.removeEventListener('online', online);
            window.removeEventListener('offline', offline);
        }

    }, []);

    return isOnline;
}