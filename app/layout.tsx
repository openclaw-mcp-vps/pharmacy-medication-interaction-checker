import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RxCheck — Medication Interaction Checker',
  description: 'Check dangerous drug interactions instantly. Built for independent pharmacists and healthcare providers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6f02d50b-d8c9-40fc-9b7a-66b6c1315bc9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
