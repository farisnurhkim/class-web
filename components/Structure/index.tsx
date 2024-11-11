/* eslint-disable @next/next/no-img-element */
"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "../ui/animated-beam";
import Image from "next/image";
import H2 from "../ui/H2";
import { motion } from  'framer-motion';


const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-blue-200 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function Structure() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLImageElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-full max-h-[300px] items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <div className="relative flex flex-col items-center justify-center">
            <Circle ref={div1Ref}>
              <Image src="/icon/crown.png" alt="crown" width={200} height={200} />
            </Circle>
            <div className="flex flex-col items-center justify-center">
              <H2 className="text-sm md:text-base font-bold">Rasyad</H2>
              <P className="text-xs">Class Leader</P>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center">
            <Circle ref={div5Ref}>
              <Image src="/icon/group.png" alt="group" width={200} height={200} />
            </Circle>
            <div className="flex flex-col items-center justify-center">
              <H2 className="text-sm md:text-base font-bold">Khinan</H2>
              <P className="text-xs">Vice chairman</P>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="relative flex flex-col items-center justify-center">
            <Circle ref={div2Ref}>
            <Image src="/icon/gold.png" alt="gold" width={200} height={200} />
            </Circle>
            <div className="flex flex-col items-center justify-center">
              <H2 className="text-sm md:text-base font-bold">Fadli</H2>
              <P className="text-xs">Treasurer</P>
            </div>
          </div>
          
            <img src={"/icon/rpl1.jpg"} alt="rpl"  ref={div4Ref} className="size-24 z-10 rounded-full shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]" />
          <div className="relative flex flex-col items-center justify-center">
            <Circle ref={div6Ref}>
            <Image src="/icon/gold.png" alt="gold" width={200} height={200} />
            </Circle>
            <div className="flex flex-col items-center justify-center">
              <H2 className="text-sm md:text-base font-bold">Zeam</H2>
              <P className="text-xs">Treasurer 2</P>
            </div>
          </div>

        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="relative flex flex-col items-center justify-center">
            <Circle ref={div3Ref}>
            <Image src="/icon/write.png" alt="write" width={200} height={200} />
            </Circle>
            <div className="flex flex-col items-center justify-center">
              <H2 className="text-sm md:text-base font-bold">Azmi</H2>
              <P className="text-xs">Secretary</P>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center">
            <Circle ref={div7Ref}>
            <Image src="/icon/broom.png" alt="broom" width={200} height={200} />
            </Circle>
            <div className="flex flex-col items-center justify-center">
              <H2 className="text-sm md:text-base font-bold">Rifai</H2>
              <P className="text-xs">Cleanliness</P>
            </div>
          </div>
        </div>
      </div>

      

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}


const P = ({children, className}: {children: React.ReactNode; className?: string}) => {
  return (
    <motion.p
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    viewport={{ once: true, amount: 1 }}
    className={className}
    >
      {children}
    </motion.p>
  )
}

