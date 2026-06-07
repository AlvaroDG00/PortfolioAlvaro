import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PersonaButton from "./Button";

export default function CallingCard() {
  // Estados para guardar los datos y controlar el envío
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  // Función que captura los cambios en los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Función que envía los datos a Formspree
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue
    setStatus("sending");

    try {
      // IMPORTANTE: Cambia esta URL por la que te dio Formspree en el Paso 1
      const response = await fetch("https://formspree.io/f/mgoboqav", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Limpia el formulario
        // Vuelve al estado normal después de 4 segundos
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="relative min-h-screen bg-[#D31111] px-6 py-24 flex flex-col justify-center items-center overflow-hidden z-20">

      {/* Texto gigante de fondo decorativo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none overflow-hidden">
        {/* Ajustado el texto de 15rem a 6rem en móvil */}
        <span className="text-[6rem] md:text-[15rem] font-black text-black -rotate-12 leading-none whitespace-nowrap">
          CALLING CARD
        </span>
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
        whileInView={{ scale: 1, opacity: 1, rotate: -3 }}
        transition={{ type: "spring", bounce: 0.5 }}
        viewport={{ once: true }}
        className="relative bg-white text-black p-8 md:p-12 w-full max-w-2xl border-4 border-black shadow-[20px_20px_0px_#000] z-10"
      >
        <div className="absolute -top-6 -right-6 bg-black text-white p-4 rotate-12 border-2 border-white shadow-[4px_4px_0px_#D31111] flex items-center justify-center">
          <span className="text-4xl font-black block translate-y-[2px]">✉</span>
        </div>

        <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 bg-black text-white inline-block px-4 py-2 -skew-x-6 shadow-[4px_4px_0px_#D31111]">
          Contact
        </h2>

        <p className="text-xl font-bold mb-8 uppercase tracking-widest text-zinc-800">
          Contact me with this form!
        </p>

        {/* Zona del Formulario y Mensaje de Éxito */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              // Mensaje cuando se envía correctamente (Estilo "Take Your Heart")
              <motion.div
                key="success-msg"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 2 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="absolute inset-0 flex items-center justify-center bg-black text-[#D31111] border-4 border-[#D31111] p-6 z-20 shadow-[10px_10px_0px_#D31111]"
              >
                <h3 className="text-4xl font-black uppercase tracking-tighter text-center">
                  Acknowledged!
                </h3>
              </motion.div>
            ) : (
              // El formulario real
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-6"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col">
                  <label className="font-black uppercase mb-1">Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    type="text"
                    className="border-4 border-black p-3 font-bold bg-zinc-100 focus:bg-white focus:outline-none focus:border-[#D31111] transition-colors -skew-x-3"
                    placeholder="Your name/Corportative name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-black uppercase mb-1">Email</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    type="email"
                    className="border-4 border-black p-3 font-bold bg-zinc-100 focus:bg-white focus:outline-none focus:border-[#D31111] transition-colors -skew-x-3"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-black uppercase mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="border-4 border-black p-3 font-bold bg-zinc-100 focus:bg-white focus:outline-none focus:border-[#D31111] transition-colors -skew-x-3 resize-none"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                <div className="mt-6 self-center">
                  <PersonaButton
                    text={status === "sending" ? "Sending..." : "Send"}
                    onClick={handleSubmit}
                  />
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Enlaces a redes centrados */}
        <div className="mt-12 pt-8 border-t-4 border-black flex flex-wrap justify-center items-center gap-6">
          <a
            href="https://github.com/AlvaroDG00"
            target="_blank"
            rel="noreferrer"
            className="text-black bg-zinc-200 px-6 py-2 -skew-x-6 hover:bg-[#D31111] hover:text-white transition-colors border-2 border-black font-black uppercase text-xl"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/álvaro-dámaso-gonzález-945b52281/"
            target="_blank"
            rel="noreferrer"
            className="text-black bg-zinc-200 px-6 py-2 -skew-x-6 hover:bg-[#D31111] hover:text-white transition-colors border-2 border-black font-black uppercase text-xl"
          >
            LinkedIn
          </a>
        </div>

      </motion.div>
    </section>
  );
}