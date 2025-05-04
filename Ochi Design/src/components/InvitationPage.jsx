import React, { useState, useEffect } from 'react';

function InvitationPage() {
  const [eyePosition, setEyePosition] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
      setEyePosition(angle - 180);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className='w-full h-[60vw] bg-[#CDEA68] flex flex-col justify-center items-center relative overflow-hidden'>

      {/* Eyes positioned on top of the text */}
      <div className='absolute top-[22vw] flex gap-[4vw] z-10'>
        {/* Left Eye */}
        <div className='rounded-full bg-zinc-200 h-[16vw] w-[16vw] flex items-center justify-center relative'>
          <div className='absolute rounded-full bg-zinc-900 h-[10vw] w-[10vw] flex items-center justify-center'>
            <div
              style={{ transform: `rotate(${eyePosition}deg) translate(-40%, -40%)` }}
              className='line w-full h-10 flex items-center justify-center'
            >
              <div className='rounded-full bg-zinc-200 h-[2vw] w-[2vw]' />
            </div>
          </div>
        </div>

        {/* Right Eye */}
        <div className='rounded-full bg-zinc-200 h-[16vw] w-[16vw] flex items-center justify-center relative'>
          <div className='absolute rounded-full bg-zinc-900 h-[10vw] w-[10vw] flex items-center justify-center'>
            <div
              style={{ transform: `rotate(${eyePosition}deg) translate(-40%, -40%)` }}
              className='line w-full h-10 flex items-center justify-center'
            >
              <div className='rounded-full bg-zinc-200 h-[2vw] w-[2vw]' />
            </div>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className='text-black text-[15vw] font-bold font-[Founders-Grotesk-X-Condensed] text-center tracking-tighter z-0'>
        <h1 className="m-0 p-0 leading-[0.7]">Ready</h1>
        <h1 className="m-0 p-0 leading-[0.7]">to start</h1>
        <h1 className="m-0 p-0 leading-[0.7]">your project?</h1>
      </div>

      {/* Buttons */}
      <div className="mt-[7vw] flex gap-[2vw] z-10">
        <button className="px-[3vw] py-[1vw] bg-black text-[#CDEA68] rounded-full text-[1.5vw] font-semibold hover:bg-[#1f1f1f] transition duration-300">
          Start The Project
        </button>
        <span className="text-[1.5vw] font-semibold text-black flex items-center">OR</span>
        <button className="px-[3vw] py-[1vw] bg-white text-black rounded-full text-[1.5vw] font-semibold hover:bg-gray-200 transition duration-300">
          Hello@Ochi
        </button>
      </div>
    </div>
  );
}

export default InvitationPage;
