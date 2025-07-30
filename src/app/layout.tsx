import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";

import Header from "@components/Header";

import "./globals.css";
import { getLocale } from "next-intl/server";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vat Comply",
  description: "Vat Comply - Exchange Rate API",
};

export default async function RootLayout({
  children,
  form,
}: Readonly<{
  children: React.ReactNode;
  form: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body className={`${inter.variable} antialiased mb-20`}>
        <NextIntlClientProvider>
          <Header />
          {children}
          {form}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
