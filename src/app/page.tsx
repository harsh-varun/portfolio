"use client"
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Academic from "@/sections/Academic";
import Certificates from "@/sections/Certificates";
import Achievements from "@/sections/Achievements";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Academic />
      <Certificates />
      <Achievements />
      <Contact />
    </>
  );
}
