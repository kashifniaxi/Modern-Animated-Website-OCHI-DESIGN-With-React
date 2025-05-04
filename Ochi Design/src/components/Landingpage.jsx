// import { motion } from 'framer-motion';
// import React from 'react'
// import { FaArrowUpLong } from "react-icons/fa6";

// function Landingpage() {
//   return (
//     <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='landingpage w-full h-screen bg-zinc-900 pt-10'>
//       <div className='px-20 mt-32'>
//         {['WE CREATE', 'EYE-OPENING', 'PRESENTATIONS'].map((item, index) => {
//           return (
//             <div key={index} className='relative overflow-hidden'>
//               <div className='flex items-center'>
//                 {index === 1 && (
//                   <motion.div initial={{width:0}} animate={{width:"7.5vw"}} transition={{ease:[0.76,0,0.24,1], duration:1 }} className='mr-4 w-[8vw] h-[6vw] bg-green-500 rounded-md'></motion.div>
//                 )}
//                 <h1 className='font-["Neue_Montreal"] text-[7vw] text-white leading-[0.8] tracking-tighter'>
//                   {item}
//                 </h1>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div className='border-t-2 border-zinc-800 bottom-0 left-0 right-0 mt-28'>
//         <div className='px-20 flex justify-between items-center'>
//           {['For public and private companies', 'From the first pitch to IPO'].map((item, index) => {
//             return (
//               <div key={index} className='py-4 text-md font-light text-zinc-400'>{item}</div>
//             );
//           })}
//           <div className='flex items-center gap-3'>
//             <button className='px-5 py-1 border-[1px] border-zinc-500 text-zinc-400 rounded-full text-sm uppercase'>
//               Start the project
//             </button>
//             <div className='w-10 h-10 border-[1px] border-zinc-500 rounded-full flex items-center justify-center rotate-45'>
//               <FaArrowUpLong className='text-zinc-400' />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Landingpage




import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
import img from '../assets/logo.png';

function Landingpage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='landingpage w-full h-screen bg-zinc-900 pt-10'>
      <div className='px-20 mt-32'>
        {['WE CREATE', 'EYE-OPENING', 'PRESENTATIONS'].map((item, index) => {
          return (
            <div key={index} className='relative overflow-hidden'>
              <div className='flex items-center'>
                {index === 1 && (
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "7.5vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className='mr-4 w-[8vw] h-[6vw] rounded-md'
                    style={{
                      backgroundImage: `url("${img}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></motion.div>
                )}
                <h1 className='font-["Neue_Montreal"] text-[7vw] text-white leading-[0.8] tracking-tighter'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className='border-t-2 border-zinc-800 bottom-0 left-0 right-0 mt-28'>
        <div className='px-20 flex justify-between items-center'>
          {['For public and private companies', 'From the first pitch to IPO'].map((item, index) => {
            return (
              <div key={index} className='py-4 text-md font-light text-zinc-400'>{item}</div>
            );
          })}
          <div className='flex items-center gap-3'>
            <button className='px-5 py-1 border-[1px] border-zinc-500 text-zinc-400 rounded-full text-sm uppercase'>
              Start the project
            </button>
            <div className='w-10 h-10 border-[1px] border-zinc-500 rounded-full flex items-center justify-center rotate-45'>
              <FaArrowUpLong className='text-zinc-400' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;