import { RocketIcon } from "lucide-react"

export default function Roadmap() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-[#8B4513] text-5xl font-bold text-center mb-16">
        Roadmap
        <div className="h-1 bg-[#8B4513] mt-2 max-w-[200px] mx-auto"></div>
      </h2>

      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-[#8B4513] -translate-y-1/2" />

        {/* Phases Grid */}
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Phase 1 */}
          <div className="group relative">
            {/* Dot */}
            <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+2rem)] w-4 h-4 rounded-full border-4 border-[#8B4513] bg-[#CD853F]" />

            {/* Card */}
            <div className="bg-white p-6 rounded-xl border-2 border-[#8B4513] transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <RocketIcon className="w-6 h-6 text-[#8B4513]" />
                <h3 className="text-[#8B4513] text-2xl font-bold">PHASE 1</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-[#8B4513]">
                  <span className="mt-2 w-2 h-2 bg-[#8B4513] rounded-full shrink-0" />
                  <span>Fair Launch On PancakeSwap</span>
                </li>
                <li className="flex items-start gap-2 text-[#8B4513]">
                  <span className="mt-2 w-2 h-2 bg-[#8B4513] rounded-full shrink-0" />
                  <span>Meme Campaign & Community Engagement</span>
                </li>
                <li className="flex items-start gap-2 text-[#8B4513]">
                  <span className="mt-2 w-2 h-2 bg-[#8B4513] rounded-full shrink-0" />
                  <span>Twitter & Telegram Activation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="group relative">
            {/* Dot */}
            <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+2rem)] w-4 h-4 rounded-full border-4 border-[#8B4513] bg-[#CD853F]" />

            {/* Card */}
            <div className="bg-white p-6 rounded-xl border-2 border-[#8B4513] transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <RocketIcon className="w-6 h-6 text-[#8B4513]" />
                <h3 className="text-[#8B4513] text-2xl font-bold">PHASE 2</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-[#8B4513]">
                  <span className="mt-2 w-2 h-2 bg-[#8B4513] rounded-full shrink-0" />
                  <span>Influencer Partnerships</span>
                </li>
                <li className="flex items-start gap-2 text-[#8B4513]">
                  <span className="mt-2 w-2 h-2 bg-[#8B4513] rounded-full shrink-0" />
                  <span>Bear Worship Meme Dominance</span>
                </li>
                <li className="flex items-start gap-2 text-[#8B4513]">
                  <span className="mt-2 w-2 h-2 bg-[#8B4513] rounded-full shrink-0" />
                  <span>DEX Listings (Raydium, Orca, Jupiter)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="group relative">
            {/* Dot */}
            <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+2rem)] w-4 h-4 rounded-full border-4 border-[#8B4513] bg-[#CD853F]" />

            {/* Card */}
            <div className="bg-white p-6 rounded-xl border-2 border-[#8B4513] transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <RocketIcon className="w-6 h-6 text-[#8B4513]" />
                <h3 className="text-[#8B4513] text-2xl font-bold">PHASE 3</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-[#8B4513]">
                  <span className="mt-2 w-2 h-2 bg-[#8B4513] rounded-full shrink-0" />
                  <span>Insider-Led CEX Listings</span>
                </li>
                <li className="flex items-start gap-2 text-[#8B4513]">
                  <span className="mt-2 w-2 h-2 bg-[#8B4513] rounded-full shrink-0" />
                  <span>NFT Drop: "The Bear Market Priests"</span>
                </li>
                <li className="flex items-start gap-2 text-[#8B4513]">
                  <span className="mt-2 w-2 h-2 bg-[#8B4513] rounded-full shrink-0" />
                  <span>Strategic Partnerships For Expansion</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Phase 4 */}
          <div className="group relative">
            {/* Dot */}
            <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+2rem)] w-4 h-4 rounded-full border-4 border-[#8B4513] bg-[#CD853F]" />

            {/* Card */}
            <div className="bg-white p-6 rounded-xl border-2 border-[#8B4513] transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <RocketIcon className="w-6 h-6 text-[#8B4513]" />
                <h3 className="text-[#8B4513] text-2xl font-bold">PHASE 4</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-[#8B4513]">
                  <span className="mt-2 w-2 h-2 bg-[#8B4513] rounded-full shrink-0" />
                  <span>The Entire Market Acknowledges BearMarketGod</span>
                </li>
                <li className="flex items-start gap-2 text-[#8B4513]">
                  <span className="mt-2 w-2 h-2 bg-[#8B4513] rounded-full shrink-0" />
                  <span>$BEARGOD Becomes A Cultural Phenomenon</span>
                </li>
                <li className="flex items-start gap-2 text-[#8B4513]">
                  <span className="mt-2 w-2 h-2 bg-[#8B4513] rounded-full shrink-0" />
                  <span>Meme Dominance Across All Of Crypto Twitter</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <div className="w-full h-32 bg-[#f5e6d3] relative">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute bottom-0 bg-white rounded-full"
                style={{
                  left: `${i * 25}%`,
                  width: "300px",
                  height: "150px",
                  transform: "translateX(-50%)",
                  opacity: "0.1",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

