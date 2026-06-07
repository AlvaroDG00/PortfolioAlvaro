import { motion } from "framer-motion";

export default function Stats() {
  // Lista de habilidades estructurada
  const skillCategories = [
    {
      title: "FRONTEND",
      skills: ["React Vite", "JavaScript", "TypeScript", "TailwindCSS", "Motion", "HTML5", "CSS3", "BootStrap"],
      color: "bg-white text-black border-black",
    },
    {
      title: "BACKEND",
      skills: ["Java", "ASP", ".NET", "Node.js", "Python", "Kotlin"],
      color: "bg-black text-white border-white",
    },
    {
      title: "DATA & TOOLS",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Airtable", "Postman", "Git"],
      color: "bg-[#D31111] text-white border-black",
    }
  ];

  // Configuración de la animación en cascada para los elementos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, skewX: -20 },
    visible: { opacity: 1, x: 0, skewX: -10, transition: { type: "spring" } }
  };

  return (
    // Fondo con un patrón visual o simplemente un gris roto, usaremos un blanco hueso para máximo contraste
    <section className="relative min-h-screen bg-zinc-100 px-6 py-24 flex flex-col items-center overflow-hidden">
      
      {/* Título de la sección rotado */}
      <motion.div
        initial={{ scale: 0, rotate: 10 }}
        whileInView={{ scale: 1, rotate: -5 }}
        viewport={{ once: true }}
        className="mb-20 z-10"
      >
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-black mix-blend-difference drop-shadow-[5px_5px_0px_#D31111]">
          Stack
        </h2>
      </motion.div>

      {/* Contenedor de las categorías */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 items start"
      >
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className={`p-8 border-4 shadow-[8px_8px_0px_#000] ${category.color} flex flex-col`}
          >
            {/* Cabecera de la categoría estilo recorte */}
            <h3 className="text-3xl font-black uppercase mb-6 tracking-widest bg-black text-white px-2 py-1 self-start -skew-x-6 shadow-[3px_3px_0px_#D31111]">
              {category.title}
            </h3>

            {/* Etiquetas de habilidades */}
            <div className="flex flex-wrap gap-3 mt-8">
              {category.skills.map((skill, sIndex) => (
                <span 
                  key={sIndex} 
                  className="font-bold text-lg px-3 py-1 border-2 border-current bg-opacity-10 backdrop-blur-sm -skew-x-12 hover:scale-110 hover:-skew-x-6 transition-transform cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Elemento de fondo decorativo gigante */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-black opacity-5 pointer-events-none -rotate-12 select-none">
        SKILLS
      </div>

    </section>
  );
}