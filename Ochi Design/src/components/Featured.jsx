// import React from 'react'
// import Cards from './Cards'
// function Featured() {
//     const cardsData = [
//         {
//           image: 'https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png',
//           title: 'Salience Labs',
//           buttons: ['BRAND IDENTITY', 'PITCH DECK'],
//         },
//         {
//           image: 'https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png',
//           title: 'Cardboard Spaceship',
//           buttons: ['BRANDED TEMPLATE', 'SALES DECK', 'SOCIAL MEDIA TEMPLATE', 'Share'],
//         },

//         {
//             image: 'https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png',
//             title: 'AH2 & Matt Horn',
//             buttons: ['PITCH DECK'],
//           },
//           {
//             image: 'https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-663x551.png',
//             title: 'Fyde',
//             buttons: ['AUDIT','COPYWRITING','SALES DESCK','SLIDES DESIGN'],
//           },
//           {
//             image: 'https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-663x551.png',
//             title: 'VISE',
//             buttons: ['AGENCY', 'COMPANY PRESENTATION'],
//           },
//           {
//             image: 'https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-663x551.png',
//             title: 'ALL THINGS GO',
//             buttons: ['BRAND IDENTITY', 'PITCH DECK', 'Buy', 'Share'],
//           },

//           {
//             image: 'https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg',
//             title: 'TRAWA',
//             buttons: ['BRAND IDENTITY', 'DESIGN RESEARCH', 'INVESTOR DECK'],
//           },
//           {
//             image: 'https://ochi.design/wp-content/uploads/2022/06/Frame-3876-663x551.jpg',
//             title: 'BLACK BOOK',
//             buttons: ['INVESTOR DECK', 'REDESIGN','REVIEW'],
//           },
//           {
//             image: 'https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png',
//             title: 'PREMIUM BLEND',
//             buttons: ['BRANED TEMPLATE '],
//           },
//           {
//             image: 'https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-663x551.jpg',
//             title: 'SOFTSTART',
//             buttons: ['BRANDED TEMPLATE', 'SALES DECK'],
//           },
//           {
//             image: 'https://ochi.design/wp-content/uploads/2022/05/Officevibe-Short-1-663x551.jpg',
//             title: 'OFFICEVIBE',
//             buttons: ['BRANDED TEMPLATE'],
//           },
//       ];
//   return (
//     <div className='w-full py-20'>
//         <div className='w-full bg-zinc-900 px-15 border-b-[1px] border-zinc-800 pb-10'>
//             <h1 className='text-7xl font-["Neue-Montreal"] tracking-tight'>Featured projects</h1>
//         </div>
//         <div className='px-20'>
//         {cardsData.map((card, index) => (
//         <Cards
//           key={index}
//           image={card.image}
//           title={card.title}
//           buttons={card.buttons}
//         />
//       ))}
//         </div>

//     </div>
//   )
// }
// export default Featured







// import React from 'react';
// import Cards from './Cards';

// function Featured() {
//   const cardsData = [
//     {
//       image: 'https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png',
//       title: 'Salience Labs',
//       buttons: ['BRAND IDENTITY', 'PITCH DECK'],
//     },
//     {
//       image: 'https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png',
//       title: 'Cardboard Spaceship',
//       buttons: ['BRANDED TEMPLATE', 'SALES DECK', 'SOCIAL MEDIA TEMPLATE', 'Share'],
//     },
//     {
//       image: 'https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png',
//       title: 'AH2 & Matt Horn',
//       buttons: ['PITCH DECK'],
//     },
//     {
//       image: 'https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-663x551.png',
//       title: 'Fyde',
//       buttons: ['AUDIT', 'COPYWRITING', 'SALES DESCK', 'SLIDES DESIGN'],
//     },
//     {
//       image: 'https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-663x551.png',
//       title: 'VISE',
//       buttons: ['AGENCY', 'COMPANY PRESENTATION'],
//     },
//     {
//       image: 'https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-663x551.png',
//       title: 'ALL THINGS GO',
//       buttons: ['BRAND IDENTITY', 'PITCH DECK', 'Buy', 'Share'],
//     },
//     {
//       image: 'https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg',
//       title: 'TRAWA',
//       buttons: ['BRAND IDENTITY', 'DESIGN RESEARCH', 'INVESTOR DECK'],
//     },
//     {
//       image: 'https://ochi.design/wp-content/uploads/2022/06/Frame-3876-663x551.jpg',
//       title: 'BLACK BOOK',
//       buttons: ['INVESTOR DECK', 'REDESIGN', 'REVIEW'],
//     },
//     {
//       image: 'https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png',
//       title: 'PREMIUM BLEND',
//       buttons: ['BRANED TEMPLATE'],
//     },
//     {
//       image: 'https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-663x551.jpg',
//       title: 'SOFTSTART',
//       buttons: ['BRANDED TEMPLATE', 'SALES DECK'],
//     },
//     {
//       image: 'https://ochi.design/wp-content/uploads/2022/05/Officevibe-Short-1-663x551.jpg',
//       title: 'OFFICEVIBE',
//       buttons: ['BRANDED TEMPLATE'],
//     },
//   ];

//   // Split into pairs of 2
//   const cardPairs = [];
//   for (let i = 0; i < cardsData.length; i += 2) {
//     cardPairs.push([cardsData[i], cardsData[i + 1]]);
//   }

//   return (
//     <div className="w-full py-20">
//       <div className="w-full bg-zinc-900 px-15 border-b-[1px] border-zinc-800 pb-10">
//         <h1 className="text-7xl font-['Neue-Montreal'] tracking-tight">Featured projects</h1>
//       </div>
//       <div className="px-20">
//         {cardPairs.map(([left, right], index) => (
//           <Cards key={index} leftCard={left} rightCard={right} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Featured;




/* Featured.jsx */
import React from 'react';
import Cards from './Cards';

function Featured() {
  const cardsData = [
    { image: 'https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png', title: 'Salience Labs', buttons: ['BRAND IDENTITY', 'PITCH DECK'] },
    { image: 'https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png', title: 'Cardboard Spaceship', buttons: ['BRANDED TEMPLATE', 'SALES DECK', 'SOCIAL MEDIA TEMPLATE', 'Share'] },
    { image: 'https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png', title: 'AH2 & Matt Horn', buttons: ['PITCH DECK'] },
    { image: 'https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-663x551.png', title: 'Fyde', buttons: ['AUDIT','COPYWRITING','SALES DESCK','SLIDES DESIGN'] },
    { image: 'https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-663x551.png', title: 'VISE', buttons: ['AGENCY', 'COMPANY PRESENTATION'] },
    { image: 'https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-663x551.png', title: 'ALL THINGS GO', buttons: ['BRAND IDENTITY', 'PITCH DECK', 'Buy', 'Share'] },
    { image: 'https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg', title: 'TRAWA', buttons: ['BRAND IDENTITY', 'DESIGN RESEARCH', 'INVESTOR DECK'] },
    { image: 'https://ochi.design/wp-content/uploads/2022/06/Frame-3876-663x551.jpg', title: 'BLACK BOOK', buttons: ['INVESTOR DECK','REDESIGN','REVIEW'] },
    { image: 'https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png', title: 'PREMIUM BLEND', buttons: ['BRANED TEMPLATE'] },
    { image: 'https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-663x551.jpg', title: 'SOFTSTART', buttons: ['BRANDED TEMPLATE', 'SALES DECK'] },
    { image: 'https://ochi.design/wp-content/uploads/2022/05/Officevibe-Short-1-663x551.jpg', title: 'OFFICEVIBE', buttons: ['BRANDED TEMPLATE'] },
  ];

  // Group into pairs
  const cardPairs = [];
  for (let i = 0; i < cardsData.length; i += 2) {
    cardPairs.push([cardsData[i], cardsData[i + 1]]);
  }

  return (
    <div className="w-full py-20">
      <div className="w-full bg-zinc-900 px-15 border-b-[1px] border-zinc-800 pb-15">
        <h1 className='text-7xl font-["Neue-Montreal"] tracking-tight'>Featured projects</h1>
      </div>
      <div className="px-20">
        {cardPairs.map(([left, right], index) => (
          <Cards key={index} leftCard={left} rightCard={right || left} />
        ))}
      </div>
    </div>
  );
}

export default Featured;


