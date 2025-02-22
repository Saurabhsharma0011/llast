import Image from "next/image"
import Link from "next/link"

export default function NavBar() {
  return (
    <nav className="bg-[#f5e6d3] py-4 px-8 fixed w-full top-0 z-50">
      <div className="container mx-auto">
        <Link href="/" className="inline-block">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Beargod_logo-removebg-preview-IbV6bMn9RPtrA2Fy7yoPHnYzRRnZPc.png"
            alt="BearMarketGod Logo"
            width={60}
            height={60}
            className="w-auto h-auto"
          />
        </Link>
      </div>
    </nav>
  )
}

