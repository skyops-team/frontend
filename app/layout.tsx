import type { Metadata } from "next";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";

export const metadata: Metadata = {
    title: "Skyops",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="w-full mx-auto max-w-7xl">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Toaster />
                    <div className="h-screen w-full">
                        <Header />
                        <div className="h-[calc(100%-96px)] px-4">
                            {children}
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
