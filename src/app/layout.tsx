import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { StoreProvicder } from '@/components/redux/StoreProvicder';
import Navbar from '@/components/layout/NavBar';
import { Suspense } from 'react';
import Loader from '@/components/layout/Loader';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shop Demo',
  description: 'Travware Demo Task'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </head>

      <body className={inter.className}>
        <main>
          <div
            style={{
              minHeight: '80vh'
            }}
          >
            <StoreProvicder>
              <Navbar />
              <Suspense fallback={<Loader />}>{children}</Suspense>
            </StoreProvicder>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
