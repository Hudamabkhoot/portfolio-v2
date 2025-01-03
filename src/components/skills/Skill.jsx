import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function Skill ({ images }) {

  return (
    <>
      {images.map((item, idx) => (
        <div key={`${item.text}-${idx}`} className="lg:tooltip" data-tip={item.text}>
          <motion.div
            className="relative h-[100px] min-w-[100px] md:h-[130px] md:min-w-[130px] rounded-xl flex justify-center items-center"
          >
            <Image src={item.img} alt={item.text} fill style={{ objectFit: "cover" }} />
          </motion.div>
        </div>
      ))}
    </>
  );
};

export default Skill;
