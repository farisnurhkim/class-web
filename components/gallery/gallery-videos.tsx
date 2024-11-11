/* eslint-disable @next/next/no-img-element */
"use client";
import { ScrollArea } from "../ui/scroll-area";
import { videosData } from "@/lib/constants";
import HeroVideoDialog from "../ui/hero-video-dialog";
import { Button } from "../ui/button";

export const GalleryVideos = () => {

  const videos = videosData.videos.map((video) => ({
    video: video.video,
    thumbnail: video.thumbnail
  }));
  return (
    <>
     <Button className="text-base md:text-xl font-medium bg-blue-600 text-white capitalize select-none hover:bg-blue-500 font-indie">Random Videos</Button>
      <ScrollArea className="h-[600px] mt-5 rounded-lg ">
        <div className="px-3 py-2 bg-background rounded-lg relative">
          <div className="w-full columns-1 min-[360px]:columns-2 xsm:columns-3 mobile:col-span-4 md:columns-5 gap-2">
            {videos.map((item, index) => (
              <HeroVideoDialog
                key={index}
                className="block"
                animationStyle="from-center"
                videoSrc={item.video}
                thumbnailSrc={item.thumbnail}
                thumbnailAlt={`video: ${item.video}`}
              />
            ))}
          </div>
        </div>
      </ScrollArea>
    </>
  )
}