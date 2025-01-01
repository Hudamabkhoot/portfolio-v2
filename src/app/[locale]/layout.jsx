import { Open_Sans, Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';


const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
});

export const metadata = {
  title: "Huda Mabkhoot",
  description: "Huda Mabkhoot Portfolio",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();


  return (
    <html lang={locale}>
      <body
        className={`${cairo.variable} ${openSans.variable} antialiased bg-main-white h-screen`}
      >
        <NextIntlClientProvider messages={messages}>
        <Navbar />
          <SmoothScrolling>
            {children}
          </SmoothScrolling>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
