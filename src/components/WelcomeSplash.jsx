import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function WelcomeSplash({ onComplete }) {
  const [textIndex, setTextIndex] = useState(0);
  
  // Textos que parpadearán rápidamente al estilo "Take Your Time"
  const greetings = ["Welcome", "Bienvenido", "Welkom"];

  useEffect(() => {
    // Cambiamos de palabra cada 300 milisegundos
    const interval = setInterval(() => {
      setTextIndex((prev) => {
        if (prev < greetings.length - 1) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 300);

    // Después de 1.8 segundos, le decimos a App.jsx que oculte esta pantalla
    const timeout = setTimeout(() => {
      onComplete();
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      // La pantalla sale disparada hacia arriba cuando termina
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
    >
      <motion.div
        key={textIndex}
        initial={{ opacity: 0, scale: 0.8, skewX: -20 }}
        animate={{ opacity: 1, scale: 1, skewX: -10 }}
        className="bg-white px-8 py-2 border-4 border-[#D31111] shadow-[8px_8px_0px_#D31111]"
      >
        <h1 className="text-6xl md:text-8xl font-black text-black uppercase tracking-tighter">
          {greetings[textIndex]}
        </h1>
      </motion.div>
    </motion.div>
  );
}