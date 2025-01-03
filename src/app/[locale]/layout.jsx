import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Footer from "@/components/Footer";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Huda Mabkhoot",
  description: "Huda Mabkhoot Portfolio",
  openGraph: {
    title: 'Huda Mabkhoot',
    description: 'Huda Mabkhoot Portfolio',
    images: [''],
    url: '',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${cairo.variable} font-sans antialiased bg-main-white h-screen`}
      >
        <NextIntlClientProvider messages={messages}>
        <Navbar />
          <SmoothScrolling>
            {children}
          </SmoothScrolling>
        <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
