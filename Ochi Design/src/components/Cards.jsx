// import React from 'react'

// function Cards({url,title ,button}) {
//   return (
//     <div>
//       <div className='cards w-full flex gap-10 mt-10'>
//                 <div className=' relative cardcontainer w-1/2 h-[75vh]'>
//                     <h1 className='absolute text-[#CDEA68] text-8xl font-["Neue-Montreal"] tracking-tight leading-none font semibold left-full -translate-x-1/2 top-1/2 -translate-y-1/2'>
//                     {"SALIANCE LAB".split("").map((letter, index) => (<span>{letter}</span>))}
//                     </h1>
//                     <div className='card w-full h-full rounded-xl overflow-hidden '>
//                         <img className='w-full h-full bg-cover' src={url} />
//                     </div>
//                 </div>
                
//                 <div className='cardcontainer w-1/2 h-[75vh] relative'>
//                     <h1 className='absolute text-[#CDEA68] text-8xl font-["Neue-Montreal"] tracking-tight leading-none font semibold right-full translate-x-1/2 top-1/2 -translate-y-1/2'>
//                     {"CARDBOARD SPACESHIP".split("").map((letter, index) => (<span>{letter}</span>))}
//                     </h1>
//                     <div className='card w-full h-full rounded-xl overflow-hidden '>
//                         <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" />
//                     </div>
//                 </div>
//             </div>
//     </div>
//   )
// }

// export default Cards












// my updated code with my approach by gpt 

// import React from 'react';

// function Cards({ leftCard, rightCard }) {
//   return (
//     <div className="cards w-full flex gap-10 mt-10">
//       {[leftCard, rightCard].map((card, idx) => (
//         card && (
//           <div key={idx} className="relative cardcontainer w-1/2 h-[75vh] flex flex-col justify-between">
//             <div>
//               <h1 className="absolute text-[#CDEA68] text-8xl font-['Neue-Montreal'] tracking-tight leading-none font-semibold left-full -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none z-10">
//                 {card.title.split("").map((letter, index) => (
//                   <span key={index}>{letter}</span>
//                 ))}
//               </h1>
//               <div className="card w-full h-full rounded-xl overflow-hidden relative z-0">
//                 <img
//                   className="w-full h-full object-cover"
//                   src={card.image}
//                   alt={card.title}
//                 />
//               </div>
//             </div>
//             <div className="mt-4 flex flex-wrap gap-2 z-10 relative">
//               {card.buttons.map((btn, i) => (
//                 <button
//                   key={i}
//                   className="bg-black text-white text-sm px-3 py-1 rounded hover:bg-zinc-800 transition"
//                 >
//                   {btn}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )
//       ))}
//     </div>
//   );
// }

// export default Cards;








// GPT OWN UPDATED CODE 
/* Cards.jsx */
import React, { useState } from 'react';

function Cards({ leftCard, rightCard }) {
  const cards = [leftCard, rightCard];
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div className="cards relative w-full flex flex-col gap-4 mb-10 mt-20">
      {/* Card Images Row */}
      <div className="flex w-full gap-10">
        {cards.map((card, i) => (
          <div
            key={i}
            className="cardcontainer relative flex-1 h-[75vh] overflow-visible rounded-xl"
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {/* Fixed Title Outside Top-Left Corner */}
            <h2 className="absolute -top-10 left-0 text-[#CDEA68] text-[5vh] font-[Neue-Montreal] font-bold z-20 pointer-events-none tracking-tighter">
              {card.title}
            </h2>

            {/* Card Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}

        {/* Hover Pop-up Title Centered */}
        {hoveredIdx !== null && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 transition-opacity duration-300">
            <h1 className="text-7xl text-[#CDEA68] font-[Neue-Montreal] font-bold whitespace-nowrap tracking-tighter">
              {cards[hoveredIdx].title}
            </h1>
          </div>
        )}
      </div>

      {/* Buttons Row Under Cards */}
      <div className="flex w-full gap-10 mt-4">
        {cards.map((card, i) => (
          <div key={i} className="flex-1 flex flex-wrap gap-4">
            {card.buttons.map((btn, j) => (
              <button
                key={j}
                className="px-2 py-1 border border-white text-white text-sm uppercase tracking-wide rounded-3xl hover:bg-white hover:text-black transition"
              >
                {btn}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;