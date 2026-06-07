import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen bg-black overflow-hidden flex flex-col justify-center items-center px-6">
      
      {/* Franja roja de fondo que entra rebotando */}
      <motion.div 
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: -10 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
        className="absolute w-[150%] h-64 bg-[#D31111] z-0 -skew-y-6"
      />

      <div className="z-10 flex flex-col items-center">
        
        {/* Caja blanca inclinada con el nombre */}
        <motion.div
          initial={{ x: -200, opacity: 0, skewX: -20 }}
          animate={{ x: 0, opacity: 1, skewX: -12 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white text-black px-10 py-2 mb-6 border-4 border-black"
        >
          <h1 className="text-7xl font-black uppercase tracking-tighter">
            Álvaro
          </h1>
        </motion.div>

        {/* Caja negra con borde rojo y rotación contraria */}
        <motion.div
          initial={{ x: 200, opacity: 0, rotate: 5 }}
          animate={{ x: 0, opacity: 1, rotate: 2 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-black text-white px-8 py-3 border-2 border-[#D31111] shadow-[4px_4px_0px_#D31111]"
        >
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-center">
            Junior Fullstack Developer | DAM
          </h2>
        </motion.div>

      </div>
    </section>
  );
}