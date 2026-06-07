import { motion } from "framer-motion";

export default function PersonaButton({ text, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      // Clases base: texto blanco, fondo negro, borde blanco
      className="relative px-8 py-3 mx-2 text-xl font-black uppercase tracking-widest text-white bg-black border-2 border-white cursor-pointer select-none"
      // Inclinación por defecto
      style={{ transform: "skewX(-15deg)" }}
      // Animación al pasar el ratón (Hover)
      whileHover={{
        scale: 1.1,
        skewX: -5, // Se endereza un poco de golpe
        backgroundColor: "#D31111", // Pasa a rojo
        color: "#000000", // Texto pasa a negro
        borderColor: "#000000",
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      // Animación al hacer clic
      whileTap={{ scale: 0.9 }}
    >
      {/* Contenedor interno del texto para contrarrestar visualmente la inclinación si se desea, 
          aunque en este estilo dejamos que el texto fluya con el corte */}
      <span className="block">{text}</span>
    </motion.button>
  );
}