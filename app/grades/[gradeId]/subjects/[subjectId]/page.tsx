"use client"

import { useParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { lessons, subjects } from "@/lib/data"
import { motion } from "framer-motion"
import Link from "next/link"
import { Play, FileText, ChevronRight, Download } from "lucide-react"

export default function LessonsPage() {
  const { gradeId, subjectId } = useParams()
  const subject = subjects.find((s) => s.id === subjectId)

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 p-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-12">
          <Link
            href={`/grades/${gradeId}`}
            className="p-3 bg-white rounded-2xl shadow-sm border hover:bg-slate-50 transition-colors"
          >
            <ChevronRight className="w-8 h-8 text-primary" />
          </Link>
          <h2 className="text-5xl font-black text-primary">دروس مادة {subject?.name}</h2>
        </div>

        <div className="space-y-6">
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 flex items-center justify-between group hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-6">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center ${lesson.type === "video" ? "bg-red-50 text-red-500" : "bg-blue-50 text-blue-500"}`}
                >
                  {lesson.type === "video" ? (
                    <Play className="w-8 h-8 fill-current" />
                  ) : (
                    <FileText className="w-8 h-8" />
                  )}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-1">{lesson.title}</h3>
                  <p className="text-lg text-muted-foreground">
                    {lesson.type === "video" ? "درس فيديو مسجل" : "ملف تعليمي PDF"}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="px-8 py-4 bg-primary text-white text-xl font-bold rounded-2xl btn-hover flex items-center gap-2">
                  عرض الآن
                </button>
                <button className="p-4 bg-slate-100 text-slate-600 rounded-2xl hover:bg-slate-200 transition-colors">
                  <Download className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}
