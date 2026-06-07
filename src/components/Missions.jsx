import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";
import PersonaButton from "./Button";

export default function Missions() {
  // Estado para controlar si el modal está abierto o cerrado
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    // Fondo gris muy oscuro para contrastar con el Hero negro
    <section className="relative min-h-screen bg-zinc-900 px-6 py-24 flex flex-col items-center overflow-hidden">
      
      {/* Título de la sección */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-[#D31111] text-white px-12 py-2 mb-20 -skew-x-12 border-4 border-black shadow-[8px_8px_0px_#000]"
      >
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
          Proyects
        </h2>
      </motion.div>

      {/* Tarjeta del Proyecto */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", bounce: 0.3 }}
        // Aquí usamos clip-path para cortar la esquina inferior derecha
        className="w-full max-w-5xl bg-white text-black p-8 md:p-12 border-4 border-black shadow-[16px_16px_0px_#D31111] [clip-path:polygon(0_0,_100%_0,_97%_100%,_0_100%)] relative"
      >
        {/* Etiqueta decorativa de estado */}
        <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 font-bold tracking-widest text-sm md:text-base uppercase">
          COMPLETED
        </div>

        <h3 className="text-4xl md:text-5xl font-black uppercase mb-2">
          CafES App
        </h3>
        
        <p className="text-xl font-bold text-zinc-600 mb-8 border-b-4 border-black pb-4 inline-block">
          Digital management and ordering system for school cafeterias.
        </p>

        {/* Tecnologías / Stack */}
        <div className="flex flex-wrap gap-3 mb-10">
          <span className="bg-black text-white px-4 py-1 font-bold uppercase -skew-x-12">React Vite</span>
          <span className="bg-black text-white px-4 py-1 font-bold uppercase -skew-x-12">TailwindCSS</span>
          <span className="bg-black text-white px-4 py-1 font-bold uppercase -skew-x-12">TypeScript</span>
          <span className="bg-black text-white px-4 py-1 font-bold uppercase -skew-x-12">Node.js</span>
          <span className="bg-black text-white px-4 py-1 font-bold uppercase -skew-x-12">JavaScript</span>
          <span className="bg-black text-white px-4 py-1 font-bold uppercase -skew-x-12">Postman</span>
          <span className="bg-black text-white px-4 py-1 font-bold uppercase -skew-x-12">PostgreSQL</span>
          <span className="bg-black text-white px-4 py-1 font-bold uppercase -skew-x-12">Airtable</span>
        </div>

        {/* Botones de acción MODIFICADOS */}
        <div className="flex flex-wrap gap-6 mt-4">
          <PersonaButton 
            text="Check repository" 
            onClick={() => window.open("https://github.com/AlvaroDG00/CAFES_APP", "_blank")} 
          />
          <PersonaButton 
            text="Details" 
            onClick={() => setIsModalOpen(true)} 
          />
        </div>

      </motion.div>

      {/* MODAL DE DETALLES (Añadido) */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.8, skewX: -10 }} 
              animate={{ scale: 1, skewX: 0 }} 
              exit={{ scale: 0.8, skewX: 10 }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="bg-white p-8 md:p-12 border-4 border-black shadow-[16px_16px_0px_#D31111] max-w-2xl w-full relative text-black"
              // Evita que al hacer clic dentro del modal, este se cierre
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón de cierre en la esquina */}
              <button 
                className="absolute top-4 right-6 text-4xl font-black text-black hover:text-[#D31111] transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>

              <h3 className="text-3xl md:text-4xl font-black uppercase mb-4 border-b-4 border-[#D31111] pb-2 inline-block">
                CafES App - Details
              </h3>
              
              <p className="text-lg font-bold text-zinc-700 mb-4">
                A collaborative team project developed to digitize the order flow and general administration of the school cafeteria service.
              </p>
              <p className="text-lg font-bold text-zinc-700 mb-8">
                The system connects a reactive user interface with a relational database, optimizing response times and facilitating real-time information management.
              </p>

              <div className="flex justify-end mt-6">
                <PersonaButton text="Cerrar" onClick={() => setIsModalOpen(false)} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}