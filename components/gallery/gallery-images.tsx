/* eslint-disable @next/next/no-img-element */
"use client";

import { PhotoProvider, PhotoView } from "react-photo-view";
import { ScrollArea } from "../ui/scroll-area";
import { IGallery } from "@/lib/constants";
// import BlurFade from "../ui/blur-fade";

export const GalleryImages = ({ filteredImages }: { filteredImages: IGallery[] }) => {
    return (
        <ScrollArea className="h-[600px] mt-10 rounded-lg">
        <div className="px-3 py-2 bg-background rounded-lg">
          <div className="w-full columns-1 min-[360px]:columns-2 xsm:columns-3 mobile:col-span-4 md:columns-5 gap-2">
            <PhotoProvider >
              {filteredImages.map((gallery) => (
                gallery.images?.map((imageUrl, index) => (
                  // <BlurFade key={index} delay={0.1 + index * 0.05} inView once={true}>
                    <div key={index} className="w-full h-full group overflow-hidden cursor-pointer rounded-lg">
                      <PhotoView src={imageUrl}>
                        <img
                          style={{ objectFit: 'cover' }}
                          className="mb-4 size-full rounded-lg object-contain group-hover:scale-125 transition duration-300 ease-in-out"
                          src={imageUrl}
                          alt={`Gallery: ${gallery.category} ${index + 1}`}
                        />
                      </PhotoView>
                    </div>
                  // </BlurFade>
                ))
              ))}
            </PhotoProvider>
          </div>
        </div>
      </ScrollArea>
    )
}