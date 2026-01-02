"use client"

import { useParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { subjects, grades } from "@/lib/data"
import { motion } from "framer-motion"
import Link from "next/link"
import { Code, Network, Laptop, Calculator, Zap, ChevronRight } from "lucide-react"

const iconMap = {
  Code,
  Network,
  Laptop,
  Calculator,
  Zap,
}

export default function SubjectsPage() {
  const { gradeId } = useParams()
  const grade = grades.find((g) => g.id === gradeId)

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 p-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-12">
          <Link
            href="/grades"
            className="p-3 bg-white rounded-2xl shadow-sm border hover:bg-slate-50 transition-colors"
          >
            <ChevronRight className="w-8 h-8 text-primary" />
          </Link>
          <h2 className="text-5xl font-black text-primary">مواد {grade?.name}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => {
            const Icon = iconMap[subject.icon as keyof typeof iconMap] || Code
            return (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/grades/${gradeId}/subjects/${subject.id}`}>
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 flex items-center gap-6 btn-hover">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                      <Icon className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-primary">{subject.name}</h3>
                      <p className="text-muted-foreground text-lg">المحتوى التعليمي والدروس</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
