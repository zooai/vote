import './globals.css'
import dynamic from 'next/dynamic'

const Providers = dynamic(() => import('./providers').then(m => ({ default: m.Providers })), {
  ssr: false,
})

export const metadata = {
  title: 'Zoo Vote',
  description: 'Governance for Zoo Network',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
