"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "", id: "home" },
  { label: "Academics", href: "", id: "academics" },
  { label: "Certificates", href: "", id: "certificates" },
  { label: "Achievements", href: "", id: "achievements" },
  { label: "Contact", href: "", id: "contact" },
];

export default function Navbar() {
  const [selectedTab, setSelectedTab] = useState<string>("Home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelectedTab(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // adjust sensitivity
    );

    navLinks.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-8">
      {/* for Mobile and Table */}
      <div className="container  mx-auto lg:hidden">
        <div className="px-8">
          <div className="h-12 bg-[#3d3d3d] rounded-full flex justify-center items-center overflow-hidden">
            <div className="text-6xl font-extrabold text-[#E2DFD2] translate-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 38 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
              >
                HARSH
              </motion.h1>
            </div>
          </div>
        </div>
      </div>

      {/* for Desktop */}
      <div className="fixed lg:flex mt-36 ml-4 hidden">
        <div className="container flex flex-col justify-center items-center">
          <div className="p-2 px-2 text-center flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.id} className={`h-10 px-6 flex justify-center items-center rounded-full transition-all duration-150 ${
                  selectedTab === link.id ? "bg-[#3d3d3d]" : ""
                }`}>
                <a
                  href={`#${link.id}`}
                  className={`transition-colors text-3xl font-extrabold translate-y-2 cursor-pointer ${
                    selectedTab === link.id
                      ? "text-[#E2DFD2] font-bold"
                      : "text-[#3d3d3d]"
                  }`}
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
