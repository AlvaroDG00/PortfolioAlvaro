import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen bg-black overflow-hidden flex flex-col justify-center items-center px-4 md:px-6">
      
      {/* Hacemos la franja más ancha en móvil para que cubra la rotación (w-[200%] a w-[150%]) */}
      <motion.div 
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: -10 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
        className="absolute w-[200%] md:w-[150%] h-64 bg-[#D31111] z-0 -skew-y-6"
      />

      <div className="z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ x: -200, opacity: 0, skewX: -20 }}
          animate={{ x: 0, opacity: 1, skewX: -12 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white text-black px-6 md:px-10 py-2 mb-6 border-4 border-black"
        >
          {/* Tamaño dinámico: text-5xl en móvil, text-7xl en PC */}
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Álvaro
          </h1>
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0, rotate: 5 }}
          animate={{ x: 0, opacity: 1, rotate: 2 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-black text-white px-4 md:px-8 py-3 border-2 border-[#D31111] shadow-[4px_4px_0px_#D31111] text-center"
        >
          <h2 className="text-sm md:text-2xl font-bold uppercase tracking-widest text-center">
            Junior Fullstack Developer | DAM
          </h2>
        </motion.div>

      </div>
    </section>
  );
}