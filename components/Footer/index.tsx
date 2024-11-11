"use client";
import React from 'react'
import H2 from '../ui/H2';
import BlurFade from '../ui/blur-fade';

const Footer = () => {
    const writingCategories = [
        { name: "Memmories", },
        { name: "Class Memmories", },
        { name: "Gallery", },
        { name: "School" }
    ];

    const useFullLink = [
        { name: "Home", link: "#home" },
        { name: "Structure", link: "#structure" },
        { name: "Students", link: "#students" },
        { name: "Gallery", link: "#gallery" },
        { name: "Chat", link: "#chat" },
    ]


    return (
        <footer className="bg-gradient-to-r from-blue-600 to-purple-600 pt-24 pb-12">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 text-slate-300 font-medium md:w-1/3 mb-12">
                        <H2 className="text-4xl text-white mb-5">XII RPL 1</H2>
                        <H2 className="font-bold text-2xl mb-2">Address</H2>
                        <BlurFade delay={0.45} once={true}>
                            <p>@smktarunabangsabekasiofficial</p>
                            <p>Jl. Kali Abang Tengah, Perwira, Kec. Bekasi Utara, Kota Bks, Jawa Barat 17122193</p>
                            <p>Bekasi</p>
                        </BlurFade>
                    </div>
                    <div className="w-full px-4 mb-12 md:w-1/3">
                        <H2 className="font-semibold text-xl text-white mb-5">
                            Writing Categories
                        </H2>
                        <ul className="text-slate-300">
                            {writingCategories.map((category, index) => (
                                <BlurFade key={index} delay={0.45} once={true} >
                                    <li >
                                        {category.name}
                                    </li>
                                </BlurFade>

                            ))}

                        </ul>
                    </div>
                    <div className="w-full px-4 mb-12 md:w-1/3">
                        <H2 className="font-semibold text-xl text-white mb-5">Useful Links</H2>
                        <ul className="text-slate-300">

                            {useFullLink.map((item, index) => (
                                <BlurFade key={index} delay={0.45} once={true}>
                                    <li key={index}>
                                        <a
                                            href={item.link}
                                            className="inline-block text-base hover:text-primary mb-3"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                </BlurFade>
                            ))}

                        </ul>
                    </div>
                </div>

                <div className="w-full pt-10 border-t border-slate-700">
                   
                    <BlurFade once={true} delay={0.45}>
                    <p className="text-sm text-white font-bold text-center">
                        Created with <span className="text-pink-500"> ❤️</span> by
                        <a
                            href="https://instagram.com/informatics_one"
                            target="_blank"
                            className="font-bold text-orange-500"
                        > XII RPL1 | batch 2024 </a>

                        <a
                            href="https://instagram.com/informatics_one"
                            target="_blank"
                            className="font-bold text-white"
                        > @informatics_one</a
                        >
                    </p>
                    </BlurFade>

                </div>
            </div>
        </footer>
    )
}

export default Footer