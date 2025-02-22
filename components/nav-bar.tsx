import Link from "next/link"
import Image from "next/image"

export default function NavBar() {
  return (
    <nav className="py-4 bg-[#f5e6d3] shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Beargod_logo-removebg-preview-IbV6bMn9RPtrA2Fy7yoPHnYzRRnZPc.png"
              alt="BearMarketGod Logo"
              width={50}
              height={50}
              className="w-12 h-12 md:w-14 md:h-14"
            />
            <span className="text-[#8B4513] text-2xl md:text-3xl font-bold">BearMarketGod</span>
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 hover:opacity-80"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20(4)-2AZdaThQd70cpA2ePNzOsyEoiyLzVJ.png"
                alt="Twitter"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 brightness-0 sepia-[0.44] saturate-[7.72] hue-rotate-[341deg]"
              />
            </Link>
            <Link
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 hover:opacity-80"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20(5)-xwDqUP1IjY20TUSTskT2RY2bOYxYWW.png"
                alt="Telegram"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 brightness-0 sepia-[0.44] saturate-[7.72] hue-rotate-[341deg]"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

