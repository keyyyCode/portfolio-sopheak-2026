import type React from "react";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Samart Sopheak - Software Developer",
  description:
    "Professional portfolio of Samart Sopheak, a software developer specializing in full-stack development, mobile apps, and UI/UX design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // add data-default-theme so the inline script knows the server default
    <html
      lang="en"
      className={inter.className}
      data-default-theme="light"
      suppressHydrationWarning
    >
      <body>
        {/* Inline script: set theme synchronously on first paint to avoid FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var root=document.documentElement;var stored=localStorage.getItem('theme');if(stored){root.setAttribute('data-theme',stored);if(stored==='dark')root.classList.add('dark');else root.classList.remove('dark');return;}var defaultTheme=root.getAttribute('data-default-theme')||'dark';if(defaultTheme==='system'){var prefersDark=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;root.setAttribute('data-theme',prefersDark?'dark':'light');if(prefersDark)root.classList.add('dark');else root.classList.remove('dark');}else{root.setAttribute('data-theme',defaultTheme);if(defaultTheme==='dark')root.classList.add('dark');else root.classList.remove('dark');}}catch(e){}})();`,
          }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
