/* eslint-disable @next/next/no-img-element */
"use client";

import React from 'react'
import { Button } from './ui/button';
import { signin } from '@/app/actions';

const SignInButton = () => {
    return (
        <div className="flex items-center justify-center mt-4">
            <Button onClick={() => signin()} className="flex items-center bg-white group hover:bg-blue-600 ">
                <img src="/icon/google.png" alt="gogle" className="w-8" />
                <span className="text-black font-medium group-hover:text-white">Login to Google to use realtime chat</span>
            </Button>
        </div>
    )
}

export default SignInButton