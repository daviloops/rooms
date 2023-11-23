import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Box } from "@mui/joy";

import Header from '@/app/_components/Header';
import Providers from '@/app/_components/Providers';
import Background from '@/app/_components/Background';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Schoolboard',
  description: 'App to manage courses, classrooms and students in a school',
}

export default function RootLayout({ children, }: { children: ReactNode, }) {
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
          <Background />
          {children}
        </Box>
      </Providers>
      </body>
    </html>
  )
}
