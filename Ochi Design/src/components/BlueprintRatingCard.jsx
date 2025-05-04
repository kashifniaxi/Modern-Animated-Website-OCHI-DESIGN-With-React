// import React from 'react'

// function BlueprintRatingCard({url, bgcolor, button1}) {
//   return (
    
//       <div className=" rounded-[2vw] w-[26vw] h-[60vh] flex justify-center items-center bg-red-900 " >
//           <img src={url} alt="logo" className='w-[10vw] h-[10vh]' />
//         {/* <Button className="px-2 py-4 w-1 h-2 rounded-[2vw] bg-[#004D43] text-white font-bold text-[1.5vw] hover:bg-[#004D43] hover:text-white transition duration-300 ease-in-out">
//           {button1}</Button> */}

//       </div>
//   )
// }

// export default BlueprintRatingCard






import React from 'react';

function BlueprintRatingCard({ url, bgcolor, button1 }) {
  return (
    <div className={` relative rounded-[2vw] w-[26vw] h-[60vh] flex justify-center items-center bg-${bgcolor}`}>
      <img src={url} alt="logo" className="w-[10vw] h-[10vh]" />
      <button className="absolute bottom-3 left-6 px-6 py-1.5 rounded-[2vw] bg-black text-white text-[1.2vw] hover:bg-white hover:text-black transition duration-300 ease-in-out">
            {button1}</button>
    </div>
  );
}

export default BlueprintRatingCard;
