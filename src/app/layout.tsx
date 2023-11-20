import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Box } from "@mui/joy";

import Header from '@/components/Header';
import Providers from '@/app/Providers';

import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smart school',
  description: 'App system to manage courses, classrooms and students in a school',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <header>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>🏫</text></svg>" />
      </header>
      <body className={inter.className}>
      <Providers>
        <Header />
        <Box
          component="main"
          p={4}
          width="100%"
          minHeight="calc(100% - 74.4px)"
        >
          {children}
        </Box>
      </Providers>
      </body>
    </html>
  )
}
