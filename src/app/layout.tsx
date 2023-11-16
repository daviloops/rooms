import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Layout from '@/components/Layout';
import Providers from '@/app/Providers';

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
      <body className={inter.className}>
      <Providers>
        <Layout>
          {children}
        </Layout>
      </Providers>
      </body>
    </html>
  )
}
