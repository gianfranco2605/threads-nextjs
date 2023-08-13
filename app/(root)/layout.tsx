import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// Components
import Topbar from '@/components/shared/Topbar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'
import Bottombar from '@/components/shared/Bottombar'

// Google fonts
const inter = Inter({ subsets: ['latin'] })

// Favicon
export const metadata = {
  title: 'Threads',
  description: 'A Next.js 13 Meta Threads Application'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>
          <Topbar />  

          <main>
            <LeftSidebar />

            <section className='main-container'>
              <div className='w-full max-w-4xl'>
                {children}
              </div>
            </section>

            <RightSidebar />
          </main>
          
          <Bottombar />
          </body>
        </html>
    </ClerkProvider>
  )
}
