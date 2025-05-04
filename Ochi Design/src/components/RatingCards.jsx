// import React from 'react'
// import BlueprintRatingCard from './BlueprintRatingCard';
// function RatingCards() {
//     let cardsData = [
//         {
//             image: "https://ochi.design/wp-content/uploads/2022/04/logo001.svg",
//             bgcolor:"[#004D43]",
//             button1:"c2019-2022"
//             },
//             {
//                 image: "https://ochi.design/wp-content/uploads/2022/04/logo002.svg",
//                 bgcolor: "zinc-900",
//                 button1: "Rating 5.0 On Clutch",
//             },
//             {
//                 image: "https://ochi.design/wp-content/uploads/2022/04/logo003.png",
//                 bgcolor: "zinc-900",
//                 button1: "Business of Alumni",
//             }
//         ];


//   return (
//     <div>
//         {cardsData.map((card, index) => (
//             <div key={index} className="flex flex-row gap-x-6 px-[13vh] py-4">
//                 <BlueprintRatingCard url={card.image} bgcolor={card.bgcolor} button1={card.button1} />
//             </div>
//         ))}
//             </div>
//   )
// }

// export default RatingCards



import React from 'react';
import BlueprintRatingCard from './BlueprintRatingCard';

function RatingCards() {
  let cardsData = [
    {
      image: "https://ochi.design/wp-content/uploads/2022/04/logo001.svg",
      bgcolor: "[#004D43]",
      button1: "c2019-2022",
    },
    {
      image: "https://ochi.design/wp-content/uploads/2022/04/logo002.svg",
      bgcolor: "red-900",
      button1: "Rating 5.0 On Clutch",
    },
    {
      image: "https://ochi.design/wp-content/uploads/2022/04/logo003.png",
      bgcolor: "[#004D43]",
      button1: "Business of Alumni",
    },
  ];

  return (
    <div className="flex flex-row gap-x-6 px-[13vh] py-10">
      {cardsData.map((card, index) => (
        <BlueprintRatingCard
          key={index}
          url={card.image}
          bgcolor={card.bgcolor}
          button1={card.button1}
        />
      ))}
    </div>
  );
}

export default RatingCards;
