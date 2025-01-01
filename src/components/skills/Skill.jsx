'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function Skill ({ image }) {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="relative h-[100px] min-w-[100px] md:h-[130px] md:min-w-[130px] rounded-xl flex justify-center items-center"
      key={image}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <Image src={image} alt={image} fill style={{ objectFit: "cover" }} />
    </motion.div>
  );
};

export default Skill;
