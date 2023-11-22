import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Box } from "@mui/joy";

import Header from '@/components/Header';
import Providers from '@/app/Providers';

import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Schoolboard',
  description: 'App to manage courses, classrooms and students in a school',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
