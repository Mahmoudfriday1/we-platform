export const grades = [
  { id: "1", name: "الصف الأول الثانوي", color: "bg-primary" },
  { id: "2", name: "الصف الثاني الثانوي", color: "bg-secondary" },
  { id: "3", name: "الصف الثالث الثانوي", color: "bg-accent" },
]

export const subjects = [
  { id: "prog", name: "البرمجة", icon: "Code", gradeId: "1" },
  { id: "net", name: "الشبكات", icon: "Network", gradeId: "1" },
  { id: "ict", name: "ICT", icon: "Laptop", gradeId: "1" },
  { id: "math", name: "الرياضيات", icon: "Calculator", gradeId: "1" },
  { id: "phys", name: "الفيزياء", icon: "Zap", gradeId: "1" },
]

export const lessons = [
  { id: "1", title: "مقدمة في لغة Python", type: "video", subjectId: "prog" },
  { id: "2", title: "أساسيات قواعد البيانات", type: "pdf", subjectId: "prog" },
  { id: "3", title: "تطوير الويب باستخدام React", type: "video", subjectId: "prog" },
]
