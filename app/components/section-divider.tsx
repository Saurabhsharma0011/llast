import Image from "next/image"

export default function SectionDivider() {
  return (
    <div className="w-full overflow-hidden bg-[#8B4513]">
      <div className="flex animate-ticker">
        {[...Array(8)].map((_, i) => (
          <Image
            key={i}
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FK5R3OahBAuGGcPIvqlThTfzj3ouLl.png"
            alt="BearMarketGod Banner"
            width={800}
            height={40}
            className="h-12 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  )
}

