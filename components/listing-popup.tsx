"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface ListingPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function ListingPopup({ isOpen, onClose }: ListingPopupProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-[#f5e6d3] p-6 rounded-lg shadow-xl max-w-md w-full mx-4 transform transition-all duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-[#8B4513] text-xl font-bold">Upcoming Listing</h3>
          <button onClick={onClose} className="text-[#8B4513] hover:text-[#CD853F] transition-colors">
            <X size={24} />
          </button>
        </div>
        <p className="text-[#8B4513] mb-4">
          Listing will happen soon. Please check our Twitter for official announcements.
        </p>
        <a
          href="https://twitter.com/BearMarketGod"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#CD853F] transition-colors inline-block"
        >
          Follow us on Twitter
        </a>
      </div>
    </div>
  )
}

