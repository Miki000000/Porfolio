import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const texts = [
  "I specialize in C# and .NET development, building robust backend solutions and scalable applications.",
  "I'm well-versed in TypeScript and JavaScript, crafting modern UIs with React, Next.js, Vue, and Nuxt.",
  "I'm expanding my expertise into Kotlin development, exploring its powerful ecosystem and capabilities."
]

export function AnimatedText() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="h-[4rem] relative">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-lg text-muted-foreground absolute"
        >
          {texts[currentIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
} 