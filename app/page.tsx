import { Button } from "@/components/ui/button"
import NavBar from "@/components/nav-bar"
import Image from "next/image"
import SectionDivider from "@/components/section-divider"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5e6d3] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#8B4513] opacity-5 pattern-grid-lg pointer-events-none" />

      <NavBar />

      {/* Hero Section */}
      <section className="pt-16 md:pt-24 relative">
        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="max-w-4xl md:ml-auto relative">
            <h1 className="text-[#8B4513] text-4xl md:text-7xl font-bold mb-6 md:mb-8 text-center md:text-right">
              BearMarketGod
              <div className="h-1 bg-gradient-to-r from-[#8B4513] to-[#CD853F] mt-2"></div>
            </h1>

            <div className="space-y-6 md:space-y-8 text-center md:text-right">
              <p className="text-[#8B4513] text-lg md:text-xl leading-relaxed">
                The Bear Market Is Inevitable, So Why Fight It? BearMarketGod ($BEARGOD) Is The First And Only Token
                That Fully Embraces Bear Supremacy. While Others Pray For A Bull Run, We Kneel Before The Bear God.
              </p>

              <p className="text-[#8B4513] text-lg md:text-xl leading-relaxed">
                $BEARGOD Isn't Just Another Meme Token—It's A Movement. It Thrives In Red Candles, Feeds On
                Liquidations, And Turns Market Fear Into Absolute Dominance. We Don't Fear The Bear—We Worship It.
              </p>

              <div className="flex justify-center md:justify-end">
                <Button className="bg-gradient-to-r from-[#CD853F] to-[#8B4513] hover:from-[#8B4513] hover:to-[#CD853F] text-white text-lg md:text-xl px-6 py-4 md:px-8 md:py-6 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                  Buy $BEARGOD
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Tokenomics Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 relative">
        <h2 className="text-[#8B4513] text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16">
          Tokenomics
          <div className="h-1 bg-gradient-to-r from-[#8B4513] to-[#CD853F] mt-2 max-w-[150px] md:max-w-[200px] mx-auto"></div>
        </h2>

        <div className="max-w-5xl mx-auto">
          {/* Top Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
            {/* Total Supply Card */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border-2 border-[#8B4513]">
              <h3 className="text-[#8B4513] text-lg md:text-xl font-bold mb-2 md:mb-3">Total Supply</h3>
              <p className="text-[#8B4513] text-sm md:text-base">1,000,000,000 $BEARGOD</p>
            </div>

            {/* Liquidity Card */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border-2 border-[#8B4513]">
              <h3 className="text-[#8B4513] text-lg md:text-xl font-bold mb-2 md:mb-3">Liquidity</h3>
              <p className="text-[#8B4513] text-sm md:text-base">100% Locked</p>
            </div>

            {/* Tax Card */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border-2 border-[#8B4513]">
              <h3 className="text-[#8B4513] text-lg md:text-xl font-bold mb-2 md:mb-3">Tax</h3>
              <p className="text-[#8B4513] text-sm md:text-base">0% Buy | 0% Sell</p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Fair Launch Card */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border-2 border-[#8B4513]">
              <h3 className="text-[#8B4513] text-lg md:text-xl font-bold mb-2 md:mb-3">Fair Launch</h3>
              <p className="text-[#8B4513] text-sm md:text-base">No Presale, No Team Allocation-Pure Degen Power</p>
            </div>

            {/* CEX Listings Card */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border-2 border-[#8B4513]">
              <h3 className="text-[#8B4513] text-lg md:text-xl font-bold mb-2 md:mb-3">CEX Listings</h3>
              <p className="text-[#8B4513] text-sm md:text-base">
                We are in talks with Major Exchange Listing Teams. This Project Will Be Listed On CEXs Soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Roadmap Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 relative">
        <h2 className="text-[#8B4513] text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16">
          Roadmap
          <div className="h-1 bg-gradient-to-r from-[#8B4513] to-[#CD853F] mt-2 max-w-[150px] md:max-w-[200px] mx-auto"></div>
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Phase 1 */}
            <div className="group bg-white rounded-xl p-4 md:p-6 shadow-lg border-2 border-[#8B4513] transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B4513]/0 to-[#CD853F]/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              <div className="relative">
                <h3 className="text-[#8B4513] text-xl md:text-2xl font-bold mb-4 flex items-center">
                  <span className="bg-[#8B4513] text-white w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                    1
                  </span>
                  Phase 1
                </h3>
                <ul className="list-none text-[#8B4513] space-y-2 md:space-y-3 text-sm md:text-base">
                  {[
                    "Fair Launch On Pump.Fun",
                    "Meme Campaign & Community Engagement",
                    "Twitter & Telegram Activation",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-2 w-2 h-2 bg-[#8B4513] rounded-full shrink-0"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="group bg-white rounded-xl p-4 md:p-6 shadow-lg border-2 border-[#8B4513] transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B4513]/0 to-[#CD853F]/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              <div className="relative">
                <h3 className="text-[#8B4513] text-xl md:text-2xl font-bold mb-4 flex items-center">
                  <span className="bg-[#8B4513] text-white w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                    2
                  </span>
                  Phase 2
                </h3>
                <ul className="list-none text-[#8B4513] space-y-2 md:space-y-3 text-sm md:text-base">
                  {[
                    "Influencer Partnerships",
                    "Bear Worship Meme Dominance",
                    "DEX Listings (Raydium, Orca, Jupiter)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-2 w-2 h-2 bg-[#8B4513] rounded-full shrink-0"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="group bg-white rounded-xl p-4 md:p-6 shadow-lg border-2 border-[#8B4513] transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B4513]/0 to-[#CD853F]/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              <div className="relative">
                <h3 className="text-[#8B4513] text-xl md:text-2xl font-bold mb-4 flex items-center">
                  <span className="bg-[#8B4513] text-white w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                    3
                  </span>
                  Phase 3
                </h3>
                <ul className="list-none text-[#8B4513] space-y-2 md:space-y-3 text-sm md:text-base">
                  {[
                    "Insider-Led CEX Listings",
                    'NFT Drop: "The Bear Market Priests"',
                    "Strategic Partnerships For Expansion",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-2 w-2 h-2 bg-[#8B4513] rounded-full shrink-0"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="group bg-white rounded-xl p-4 md:p-6 shadow-lg border-2 border-[#8B4513] transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B4513]/0 to-[#CD853F]/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              <div className="relative">
                <h3 className="text-[#8B4513] text-xl md:text-2xl font-bold mb-4 flex items-center">
                  <span className="bg-[#8B4513] text-white w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                    4
                  </span>
                  Phase 4
                </h3>
                <ul className="list-none text-[#8B4513] space-y-2 md:space-y-3 text-sm md:text-base">
                  {[
                    "The Entire Market Acknowledges BearMarketGod",
                    "$BEARGOD Becomes A Cultural Phenomenon",
                    "Meme Dominance Across All Of Crypto",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-2 w-2 h-2 bg-[#8B4513] rounded-full shrink-0"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Final Words Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 relative">
        <h2 className="text-[#8B4513] text-3xl md:text-5xl font-bold text-center mb-6 md:mb-8">
          Final Words
          <div className="h-1 bg-gradient-to-r from-[#8B4513] to-[#CD853F] mt-2 max-w-[150px] md:max-w-[200px] mx-auto"></div>
        </h2>

        <div className="space-y-6 md:space-y-8 text-center">
          <p className="text-[#8B4513] text-lg md:text-xl leading-relaxed">
            The Bear Market Is Eternal, And Only The Strongest Will Survive. BearMarketGod Isn't Just A Token—It's A
            Movement. The Community Is Everything, And Together, We Will Make $BEARGOD A Force To Be Reckoned With.
          </p>

          <p className="text-[#8B4513] text-xl md:text-2xl font-bold">Kneel Before The Bear. The Cult Is Rising.</p>
        </div>
      </section>

      <SectionDivider />

      {/* Footer */}
      <footer className="bg-[#8B4513] py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#000] opacity-10 pattern-grid-lg" />

        <div className="container mx-auto px-4 relative">
          <div className="grid gap-16 md:grid-cols-2 md:gap-20">
            {/* CEX Partners */}
            <div>
              <h3 className="text-white text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center">CEX Partners</h3>
              <div className="flex justify-center items-center gap-8 md:gap-12">
                {/* Updated LBANK */}
                <div className="transition-all duration-300 hover:scale-110">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-I0JwdhgPNvxtr47QHk8xMbawD7o9Lk.png"
                    alt="LBANK"
                    width={200}
                    height={80}
                    className="w-auto h-12 md:h-20 object-contain"
                  />
                </div>
                {/* MEXC Global */}
                <div className="transition-all duration-300 hover:scale-110">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview-mQVcTNQcvdk30WD7flR4oQqHU1zz3S.png"
                    alt="MEXC Global"
                    width={200}
                    height={80}
                    className="w-auto h-12 md:h-20 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* DEX Partners */}
            <div>
              <h3 className="text-white text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center">DEX Partners</h3>
              <div className="flex justify-center items-center gap-8 md:gap-12">
                {/* DEX Screener Logo */}
                <a
                  href="https://dexscreener.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110"
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20(2)-VSYkTzaT3uFkbpjm8Tv2iNZtPVOHpE.png"
                    alt="DEX Screener"
                    width={200}
                    height={80}
                    className="w-auto h-12 md:h-20 object-contain brightness-0 invert"
                  />
                </a>
                {/* DEX Tools Logo */}
                <a
                  href="https://www.dextools.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110"
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20(3)-tLS8rxM6eE9FnnJg9ajIFO69slu1Ao.png"
                    alt="DEX Tools"
                    width={200}
                    height={80}
                    className="w-auto h-12 md:h-20 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

