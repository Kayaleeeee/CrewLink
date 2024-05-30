import type { Metadata } from "next"
import { Bitter, Noto_Sans_KR, Poppins } from "next/font/google"
import "./globals.css"
import { Header } from "./_components/Header/Header"

const NotoSansKr = Noto_Sans_KR({ subsets: ["latin"] })
const BitterFont = Bitter({ subsets: ["latin"] })
const PoppinsFont = Poppins({
  style: "normal",
  subsets: ["latin", "latin-ext"],
  weight: ["700", "800", "900"],
  variable: "--font-poppins",
})

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
      <body
        className={`${NotoSansKr.className} ${BitterFont.className} ${PoppinsFont.variable} mainWrapper`}
      >
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
