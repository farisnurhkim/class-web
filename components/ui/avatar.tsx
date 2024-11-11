/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarCirclesProps {
  className?: string;
  avatarUrl: string;
}

const Avatar = ({
  className,
  avatarUrl,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
        <Image
          className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
          src={avatarUrl}
          width={50}
          height={50}
          alt={`Avatar ${avatarUrl}`}
        />
    </div>
  );
};

export default Avatar;
