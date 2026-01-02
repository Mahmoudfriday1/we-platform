"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { grades } from "@/lib/data"
import { ChevronLeft, GraduationCap } from "lucide-react"

export default function GradesPage() {
  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 p-12 flex flex-col items-center">
        <header className="text-center mb-16">
          <h2 className="text-5xl font-black text-primary mb-4">اختر السنة الدراسية</h2>
          <p className="text-xl text-muted-foreground">اختر صفك الدراسي للوصول إلى المواد التعليمية</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
          {grades.map((grade, index) => (
            <motion.div
              key={grade.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/grades/${grade.id}`}>
                <div
                  className={`h-80 ${grade.color} rounded-3xl p-8 flex flex-col justify-between text-white shadow-2xl btn-hover relative overflow-hidden group`}
                >
                  <GraduationCap className="w-24 h-24 opacity-20 absolute -top-4 -right-4 transition-transform group-hover:scale-110" />

                  <div className="mt-auto">
                    <h3 className="text-4xl font-black mb-4">{grade.name}</h3>
                    <div className="flex items-center gap-2 text-xl font-bold opacity-90">
                      استكشاف المواد
                      <ChevronLeft className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}
