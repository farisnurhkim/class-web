/* eslint-disable @next/next/no-img-element */
"use client";
import H2 from "@/components/ui/H2";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { imagesData } from "@/lib/constants";
import { useEffect, useMemo, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BlurFade from "@/components/ui/blur-fade";


import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useMediaQuery } from "react-responsive";
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GalleryImages } from "@/components/gallery/gallery-images";
import { GalleryVideos } from "@/components/gallery/gallery-videos";


const GalleryPage = () => {

    const [categoryImage, setCategoryImage] = useState([""]);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [loadingImage, setLoadingImage] = useState(true);

    const [isTabs, setIsTabs] = useState("images");

    const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });


    useEffect(() => {
        const category = imagesData.filter((img) => img.category !== "main").map((item) => item.category);
        setCategoryImage(category);
    }, [])

    const mainImages = imagesData.filter((img) => img.category === "main").map((item) => item.images?.map((item) => item));
    const mainImagesSrc = mainImages.flat();

    const filteredImages = useMemo(() => {
        if (loadingImage) {
            setTimeout(() => { setLoadingImage(false) }, 2000);
        }

        return selectedCategory === "All" ? imagesData : imagesData.filter((img) => img.category === selectedCategory);

    }, [selectedCategory, loadingImage])

    const handleCategory = (value: string) => {
        setSelectedCategory(value);
        setLoadingImage(true);
    }

    const handleTrigerGallery = (value: string) => {
        if (value === "images") {
            setIsTabs(value)
        } else {
            setIsTabs(value);
        }
    }

    const tabsTriger = [
        {
            value: "images",
            name: "Images"
        },
        {
            value: "videos",
            name: "Videos"
        }
    ]

    return (
        <>
            <H2 className="mb-5 pt-12 text-2xl md:text-3xl">Gallery</H2>
            <PhotoProvider speed={() => 800}
                easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
            >
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[...(isDesktop ? [Pagination] : []), Navigation, A11y]}
                >
                    {mainImagesSrc.map((imageSrc, index) => (
                        <SwiperSlide key={index}>

                            <BlurFade key={imageSrc} delay={0.25 + index * 0.05} inView once={false}>
                                <PhotoView src={imageSrc}>
                                    <img src={imageSrc} alt={"Gallery"} className="w-full max-h-[700px] md:max-h-[500px] object-cover object-center mx-auto brightness-50 hover:brightness-75 transition-all" />
                                </PhotoView>
                            </BlurFade>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </PhotoProvider>



            <Tabs defaultValue="images" className="mt-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                >
                    <TabsList className="grid grid-cols-2 w-full">
                        {tabsTriger.map((item, index) => (
                            <TabsTrigger onClick={() => handleTrigerGallery(item.value)} value={item.value} key={index} className={cn("text-base md:text-xl font-medium font-indie")}>{item.name}</TabsTrigger>
                        ))}

                    </TabsList>
                </motion.div>
                <div className="flex flex-wrap gap-2 mt-5">
                    {isTabs === "images" && categoryImage.map((category, index) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            key={index}
                        >
                            <Button onClick={() => handleCategory(category)} className={cn("text-base md:text-xl font-medium bg-slate-800 text-white hover:bg-blue-600 hover:text-white capitalize font-indie", category === selectedCategory && "bg-blue-600 text-white")}>{category}</Button>
                        </motion.div>
                    ))}
                </div>
                <TabsContent value="images">
                    {loadingImage ? (
                        <div className="flex items-center justify-center min-h-[400px]">
                            <div className="w-10 h-10 rounded-full border-b-2 border-b-blue-600 bg-transparent border-t-2 border-t-white animate-spin" />
                        </div>
                    ) : (
                        <GalleryImages filteredImages={filteredImages} />
                    )}
                </TabsContent>
                <TabsContent value="videos">
                    <GalleryVideos />
                </TabsContent>
            </Tabs>
        </>
    )
}

export default GalleryPage