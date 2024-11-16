"use client"
import { useState } from "react"
import { generateCorporateNumber } from "./lib/generateCorporateNumber"
import { useCopyToClipboard } from "usehooks-ts"

export default function Home() {
  const [isCopied, setIsCopied] = useState(false)
  const [, copyToClipboard] = useCopyToClipboard()
  const handleCopyCorporateNumberOnClick = async () => {
    try {
      await copyToClipboard(generateCorporateNumber())
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button
        onClick={handleCopyCorporateNumberOnClick}
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
      >
        {isCopied ? "コピーしました！" : " 法人番号を生成"}
      </button>
    </div>
  )
}
