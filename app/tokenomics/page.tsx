import Image from "next/image"

export default function Tokenomics() {
  return (
    <main className="min-h-screen bg-[#f5e6d3]">
      <div className="container mx-auto px-4 py-16">
        {/* Heading */}
        <h1 className="text-[#8B4513] text-5xl font-bold text-center mb-16">Tokenomics</h1>

        {/* Grid Layout */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Total Supply Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#8B4513]">
              <h2 className="text-[#8B4513] text-xl font-bold mb-3">Total Supply</h2>
              <p className="text-[#8B4513]">1,000,000,000 $BEARGOD</p>
            </div>

            {/* Liquidity Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#8B4513]">
              <h2 className="text-[#8B4513] text-xl font-bold mb-3">Liquidity</h2>
              <p className="text-[#8B4513]">100% Locked</p>
            </div>

            {/* Tax Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#8B4513]">
              <h2 className="text-[#8B4513] text-xl font-bold mb-3">Tax</h2>
              <p className="text-[#8B4513]">0% Buy | 0% Sell</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fair Launch Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#8B4513]">
              <h2 className="text-[#8B4513] text-xl font-bold mb-3">Fair Launch</h2>
              <p className="text-[#8B4513]">No Presale, No Team Allocation-Pure Degen Power</p>
            </div>

            {/* CEX Listings Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#8B4513]">
              <h2 className="text-[#8B4513] text-xl font-bold mb-3">CEX Listings</h2>
              <p className="text-[#8B4513]">
                We are in talks with Major Exchange Listing Teams. This Project Will Be Listed On CEXs Soon.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="w-full bg-[#8B4513] mt-16 py-4 overflow-hidden">
        <div className="flex animate-scroll">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center space-x-2 mx-4 shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Beargod_logo-removebg-preview-IbV6bMn9RPtrA2Fy7yoPHnYzRRnZPc.png"
                alt="BearMarketGod Logo"
                width={40}
                height={40}
              />
              <span className="text-white text-2xl font-bold whitespace-nowrap">BearMarketGod</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

