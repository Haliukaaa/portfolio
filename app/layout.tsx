import type { Metadata } from 'next';

import { ThemeProvider } from './provider';

import './globals.css';

export const metadata: Metadata = {
  title: "Haliuka's Portfolio",
  description: 'My first portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
