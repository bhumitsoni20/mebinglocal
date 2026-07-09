import type { Metadata } from "next";
import { Providers } from "@/components/providers/Providers";
import { Toaster } from "sonner";
import "@/styles/index.css";

export const metadata: Metadata = {
  title: "MebingLocal",
  description: "Find your local companions and events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans bg-background text-foreground">
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
