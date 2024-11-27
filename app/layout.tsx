import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/header/navbar";
import { Indie_Flower } from '@next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import ModalProvider from "@/components/modal-provider";

const indieFlower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
  variable: "--font-indie-flower",
});


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SMK Taruna Bangsa - 12 RPL 1, Batch 2021 - Unforgettable Memories",
  keywords: [
    "SMK Taruna Bangsa",
    "RPL 1",
    "RPL 1 batch 21",
    "XII RPL 1",
    "XII RPL 1 batch 21",
    "XII RPL 1 2024 graduates",
    "12 RPL 1",
    "12 RPL 1 batch 21",
    "12 RPL 1 2024 graduates",
    "kelas 12",
    "memories",
    "portal siswa",
  ],
  authors: [{ name: "Faris Nur Hakim", url: "https://smktarunabangsa.rpl1.xyz" }],
  description: "A commemorative website for the 12 RPL 1 class, batch 2021. 2024 graduates, SMK Taruna Bangsa Kota Bekasi, showcasing students, homeroom teacher, class structure, gallery, and real-time chat. Virtual Asistants AI, and more!",
  icons: {
    icon: "/favicon.ico",

  },
  twitter: {
    images: ["/icon/rpl1.jpg"],
    card: "summary_large_image",
    description: "A commemorative website for the 12 RPL 1 class, batch 2021. 2024 graduates, SMK Taruna Bangsa Kota Bekasi, showcasing students, homeroom teacher, class structure, gallery, and real-time chat. Virtual Asistants AI, and more!",
    title: "SMK Taruna Bangsa - 12 RPL 1, Batch 2021 - Unforgettable Memories",
  },
  openGraph: {
    type: "website",
    images: [
      {
        url: "/icon/rpl1.jpg",
        alt: "RPL 1 - Unforgettable Memories",
      }
    ],
    description: "A commemorative website for the 12 RPL 1 class, batch 2021. 2024 graduates, SMK Taruna Bangsa Kota Bekasi, showcasing students, homeroom teacher, class structure, gallery, and real-time chat. Virtual Asistants AI, and more!",
    title: "SMK Taruna Bangsa - 12 RPL 1, Batch 2021 - Unforgettable Memories",
    locale: "id_ID",
  },
  verification: {
    google: "AfRBACOb1s7Vu4r7JLsUQqc-mzvi9De0Bq5x-FOiLtQ"
  },
  applicationName: "SMK Taruna Bangsa - 12 RPL 1, Batch 2021 - Unforgettable Memories",
  
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${indieFlower.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="dark"
        >
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
          <Navbar />
          {children}
          <ModalProvider/>
        </ThemeProvider>
      </body>
    </html>
  );
}
