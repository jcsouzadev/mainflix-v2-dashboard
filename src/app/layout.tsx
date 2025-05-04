import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mainflix V2 Dashboard",
  description: "Painel de gestão de equipamentos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen">
          {/* Sidebar com largura fixa */}
          <div className="w-64 fixed h-full">
            <Sidebar />
          </div>
          
          {/* Conteúdo principal */}
          <main className="flex-1 ml-64 p-6 bg-[#FAFAFA] min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}