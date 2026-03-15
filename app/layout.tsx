import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-poppins",
});

import { createClient } from "@/lib/supabase/server";

export async function generateMetadata(): Promise<Metadata> {
    const supabase = createClient();
    const { data: settings } = await supabase.from("site_settings").select("*").single();

    return {
        title: settings?.store_name || "Modern E-commerce Store",
        description: settings?.store_description || "A premium single-vendor e-commerce platform",
    };
}

import { ToastProvider } from "@/components/shared/toast-provider";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn("min-h-screen bg-background font-poppins antialiased", poppins.variable)}>
                {children}
                <ToastProvider />
            </body>
        </html>
    );
}
