"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testPages = [
  { id: 1, title: "Cover Page", color: "bg-blue-500" },
  { id: 2, title: "Table of Contents", color: "bg-green-500" },
  { id: 3, title: "Bauhaus History", color: "bg-red-500" },
  { id: 4, title: "Bauhaus Design", color: "bg-yellow-500" },
  { id: 5, title: "Art Deco History", color: "bg-purple-500" },
]

export default function TestNavigation() {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = testPages.length

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const currentPageData = testPages[currentPage]

  return (
    <div className={`min-h-screen ${currentPageData.color} flex items-center justify-center transition-all duration-500`}>
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">{currentPageData.title}</h1>
        <p className="text-2xl mb-8">Page {currentPage + 1} of {totalPages}</p>
        
        <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 max-w-md mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-4">Navigation Test</h2>
          <p className="text-lg">
            This tests if the navigation buttons work properly.
            Try clicking the arrows below!
          </p>
        </div>
      </div>

      {/* Navigation - Same as the book */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white backdrop-blur-xl rounded-full px-6 py-4 flex items-center gap-6 shadow-2xl border-2 border-blue-200">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="bg-gray-200 hover:bg-gray-300 disabled:opacity-50 text-gray-700 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="text-gray-700 font-semibold min-w-20 text-center">
            <div className="text-sm text-gray-500">Page</div>
            <div className="font-bold">{currentPage + 1} / {totalPages}</div>
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Debug Info */}
      <div className="fixed top-4 left-4 bg-black/50 text-white p-4 rounded-lg">
        <div>Current: {currentPage}</div>
        <div>Total: {totalPages}</div>
        <div>Page: {currentPageData.title}</div>
      </div>
    </div>
  )
} 