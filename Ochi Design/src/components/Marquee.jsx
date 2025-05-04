import React from 'react';
import { motion } from 'framer-motion';

function Marquee() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed='.2' className="marquee w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl overflow-hidden">
      <div className="text border-t-2 border-b-2 border-zinc-300 whitespace-nowrap flex">
        <motion.div
          className="flex"
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            ease: 'linear',
            duration: 10,
            repeat: Infinity,
          }}
        >
          {/* First copy */}
          <h1 className="text-[17vw] leading-none font-[Founders-Grotesk-X-Condensed] uppercase pt-10 -mb-[2.5vw] font-semibold pr-[4vw]">
            WE ARE OCHI DESIGN
          </h1>

          {/* Second copy */}
          <h1 className="text-[17vw] leading-none font-[Founders-Grotesk-X-Condensed] uppercase pt-10 -mb-[2.5vw] font-semibold pr-[4vw]">
            WE ARE OCHI DESIGN
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
