import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/header/navbar";
import { Indie_Flower } from '@next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

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
  title: "12th Grade RPL 1 batch 2024 - Unforgettable Memories",
  description: "A commemorative website for the 12th-grade RPL 1 class batch 2024 SMK Taruna Bangsa Kota Bekasi, showcasing students, homeroom teacher, class structure, gallery, and real-time chat.",
  icons: {
    icon: "/icon/rpl1.jpg",
  },
  twitter: {
    images: ["/icon/rpl1.jpg"],
    card: "summary_large_image",
    description: "A commemorative website for the 12th-grade RPL 1 class batch 2024 SMK Taruna Bangsa Kota Bekasi, showcasing students, homeroom teacher, class structure, gallery, and real-time chat.",
    title: "12th Grade RPL 1 - Unforgettable Memories",
  },
  openGraph: {
    type: "website",
    images: [
      {
        url: "/icon/rpl1.jpg",
        alt: "12th Grade RPL 1 - Unforgettable Memories",
      }
    ],
    description: "A commemorative website for the 12th-grade RPL 1 class batch 2024 SMK Taruna Bangsa Kota Bekasi, showcasing students, homeroom teacher, class structure, gallery, and real-time chat.",
    title: "12th Grade RPL 1 batch 2024 - Unforgettable Memories"
  }
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
        </ThemeProvider>
      </body>
    </html>
  );
}
