import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNav from "./components/layout/MainNav";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orasis Challenge",
  description: "Orasis Challenge - Dashboard de Métricas",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${interSans.variable} antialiased`}
      >
        <div className="w-full bg-white h-dvh flex items-start justify-start">
          <MainNav />
          <AppRouterCacheProvider>
            <ReactQueryProvider>
              {children}
            </ReactQueryProvider>
          </AppRouterCacheProvider>
        </div>
      </body>
    </html>
  );
}
