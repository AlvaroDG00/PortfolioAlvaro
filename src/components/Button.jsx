import { motion } from "framer-motion";

export default function PersonaButton({ text, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      // En móvil ocupa todo el ancho (w-full), en PC se ajusta a su contenido (md:w-auto)
      className="relative px-6 md:px-8 py-3 w-full md:w-auto text-lg md:text-xl font-black uppercase tracking-widest text-white bg-black border-2 border-white cursor-pointer select-none"
      style={{ transform: "skewX(-15deg)" }}
      whileHover={{
        scale: 1.1,
        skewX: -5,
        backgroundColor: "#D31111",
        color: "#000000",
        borderColor: "#000000",
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      // Reacción inmediata y agresiva al tocar la pantalla con el dedo
      whileTap={{ 
        scale: 0.95,
        skewX: -5,
        backgroundColor: "#D31111",
        color: "#000000",
      }}
    >
      <span className="block">{text}</span>
    </motion.button>
  );
}