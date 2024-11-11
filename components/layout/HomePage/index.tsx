/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react'
import BoxReveal from '@/components/ui/box-reveal'
import Image from 'next/image'
import ShimmerButton from '@/components/ui/shimmer-button'
import Walas from '@/components/Walas'
import H2 from '@/components/ui/H2'
import GridPattern from '@/components/ui/animated-grid-pattern'
import { cn } from '@/lib/utils'
import NumberTicker from '@/components/ui/number-ticker'
import { MoveRight } from 'lucide-react'
import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      <div className="mt-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl z-10">
        <div className="px-6 py-2">
          <div className="flex justify-between flex-wrap">
            <div className="mt-2 relative flex flex-col items-start">
              <BoxReveal boxColor="#fafafa" duration={0.5}>
                <div className="flex items-center justify-center gap-2">
                  <Image src="/icon/favicon.ico" width={500} height={500} alt="RPL" className="w-8 z-40 drop-shadow-xl" />
                  <h3 className="text-[11px] z-10 md:text-sm text-white font-semibold">SMK TARUNA BANGSA KOTA BEKASI</h3>
                </div>
              </BoxReveal>
              <div className="mt-3">
                <BoxReveal boxColor="#fafafa" duration={0.5}>
                  <h2 className="z-10 text-2xl md:text-3xl lg:text-4xl font-bold text-white">Welcome to XII RPL 1</h2>
                </BoxReveal>
                <BoxReveal boxColor="#fafafa" duration={0.5}>
                  <p className="z-10 text-white text-sm md:text-base">Software Engineering Excellence | Batch 2024</p>
                </BoxReveal>
                <div className="mt-3">
                  <BoxReveal boxColor="#fafafa" duration={0.5}>
                    <span className="text-sm mt-2 flex items-center text-white z-40"><MoveRight className="w-4 h-4 mr-2 z-40" /> <p>Share memories, stay  connected, and cherish our moment together</p></span>
                  </BoxReveal>
                </div>
                <BoxReveal boxColor="#fafafa" duration={0.5}>
                  <Link href={"https://instagram.com/informatics_one"} target='_blank'>
                    <ShimmerButton className="mt-2 z-40 dark:text-white theme-transition">
                      @informatics_one
                    </ShimmerButton>
                  </Link>
                </BoxReveal>
              </div>

            </div>
            <div className="flex items-center justify-center max-md:m-auto max-md:mt-5">
              <BoxReveal boxColor="#fafafa" duration={0.5}>
                <img src="/icon/rpl.png" alt="RPL" className="w-60" />
              </BoxReveal>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 shadow-xl rounded-lg bg-white dark:bg-slate-800 overflow-hidden theme-transition">
        <H2 className="ml-5 mt-4 text-base md:text-xl">Homeroom Teacher</H2>
        <div className="w-full px-2 py-5 grid grid-cols-1 md:grid-cols-2 ">
          <Walas walasName="Mrs. Yeva Purnama" periode="XI RPL1 - XII RPL 1" edu="Bachelor of Education" animateX={-50} />
          <Walas walasName="Mrs. Wulan Nafesa" periode="X RPL 1" edu="Bachelor of Computer Science" animateX={50} />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 shadow-xl rounded-lg mt-7 px-4 py-2 flex items-center justify-even">
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="font-bold text-xl md:text-2xl dark:text-white"><NumberTicker value={32} /></h2>
          <p className="text-[11px] text-center sm:text-sm text-black dark:text-white">Total Male Students</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="font-bold text-xl md:text-2xl dark:text-white">0</h2>
          <p className="text-[11px] text-center sm:text-sm text-black dark:text-white">Total Female Students</p>

        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="font-bold text-xl md:text-2xl dark:text-white"><NumberTicker value={2} /></h2>
          <p className="text-[11px] text-center sm:text-sm text-black dark:text-white">Homeroom Teacher</p>
        </div>
      </div>



      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] absolute",
        )}
      />

    </>
  )
}

export default HomePage