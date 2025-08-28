"use client";

import { motion } from "framer-motion";

export default function Page() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center space-y-32">
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold">Scroll down 👇</h1>
      </section>

      <motion.h2
        className="text-4xl font-semibold"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        First Title Fades In
      </motion.h2>

      <motion.h2
        className="text-4xl font-semibold"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        Second Title Fades In
      </motion.h2>

      <motion.h2
        className="text-4xl font-semibold"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        Third Title Fades In
      </motion.h2>
    </main>
  );
}
