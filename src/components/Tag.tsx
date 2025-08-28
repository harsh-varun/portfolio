import { HTMLAttributes } from "react";
import { motion } from "framer-motion";

export default function Tag(props: HTMLAttributes<HTMLHeadingElement>) {
  const { children } = props;
  const fadeIn = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="pb-8 text-4xl font-bold text-[#3d3d3d] flex justify-center"
      >
        {children}
      </motion.div>
    </div>
  );
}
