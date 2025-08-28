"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [showFirstName, setShowFirstName] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstName((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="py-8 scroll-mt-28">
      <div className="container mx-auto">
        <div className="mt-28 lg:mt-16 px-8 md:px-16 lg:px-0 lg:pl-72">
          <div>
            <h1 className="flex flex-col text-8xl text-left font-extrabold text-[#3d3d3d]">
              <span>Hi,</span>
              {/* <AnimatePresence mode="wait">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    Hi,
                  </motion.span>
              </AnimatePresence> */}
              <span>I&apos;m</span>
              {/* <AnimatePresence mode="wait">
                <motion.span
                    key="firstName"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    I&apos;m
                  </motion.span>
              </AnimatePresence> */}
              
              <AnimatePresence mode="wait">
                {showFirstName ? (
                  <motion.span
                    key="firstName"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    Harsh
                  </motion.span>
                ) : (
                  <motion.span
                    key="lastName"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    Varun.
                  </motion.span>
                )}
              </AnimatePresence>
            </h1>
          </div>
          <div className="mt-8">
            <p className="text-left text-xl text-[#3d3d3d]/60 font-bold">
              - &quot;Turning ideas into interactive experiences, one pixel at a time.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
