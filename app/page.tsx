"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl w-full text-center z-10"
        >
          <div className="mb-12 flex justify-center">
            <div className="relative p-6 bg-white rounded-3xl shadow-2xl border border-primary/10">
              <Image
                src="./public/logo1.jpeg"
                alt="WE Logo"
                width={400}
                height={150}
                priority
                className="w-full max-w-[500px] h-auto"
              />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-black text-primary mb-6 leading-tight">منصة WE التعليمية الذكية</h1>
          <p className="text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
            مرحباً بكم في بوابتكم الرقمية للتميز التكنولوجي. المنهج الدراسي الكامل بين أيديكم في بيئة تعليمية ذكية
            ومتطورة.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/grades" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-80 h-24 bg-primary text-white text-3xl font-bold rounded-2xl shadow-xl flex items-center justify-center gap-4 transition-all hover:bg-accent"
              >
                ابدأ التعلم الآن
                <ArrowLeft className="w-8 h-8" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </main>

      <footer className="w-full py-8 border-t bg-white flex flex-col items-center gap-4">
        <Image src="./public/logo2.jpeg" alt="WE Icon" width={60} height={60} />
        <p className="text-muted-foreground font-medium text-lg">
          جميع الحقوق محفوظة لمدارس WE للتكنولوجيا التطبيقية © ٢٠٢٦
        </p>
      </footer>
    </div>
  )
}
