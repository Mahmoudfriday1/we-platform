"use client"

import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  return (
    <nav className="w-full h-24 px-8 flex items-center justify-between border-b bg-white shadow-sm sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
        <Image
          src="/images/img-20260102-wa0004.jpg"
          alt="WE Applied Technology School Logo"
          width={180}
          height={60}
          className="h-16 w-auto object-contain"
        />
      </Link>

      <div className="flex gap-8">
        <Link href="/" className="text-xl font-bold text-primary hover:text-secondary transition-colors">
          الرئيسية
        </Link>
        <Link href="/grades" className="text-xl font-bold text-primary hover:text-secondary transition-colors">
          السنوات الدراسية
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-medium text-muted-foreground">التاريخ</p>
          <p className="text-lg font-bold text-primary">الجمعة، ٢ يناير ٢٠٢٦</p>
        </div>
      </div>
    </nav>
  )
}
