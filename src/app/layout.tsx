import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VideoFlow - Visual AI Video Pipeline Builder',
  description: 'Turn complex ComfyUI workflows into shareable, monetizable APIs via visual interface. Build once, API forever.',
  keywords: 'AI video, ComfyUI, workflow builder, API generation, no-code',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}