import type { Metadata } from "next"
import { Bitter, Noto_Sans_KR } from "next/font/google"
import "./globals.css"
import { Header } from "./_components/Header/Header"

const NotoSansKr = Noto_Sans_KR({ subsets: ["latin"] })
const BitterFont = Bitter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Genersated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${NotoSansKr.className} ${BitterFont.className} mainWrapper`}>
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
