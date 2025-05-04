import React, { useState, useEffect } from 'react';

function Eyes() {
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
    <div className='w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed='-.7' className='w-full h-screen bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] relative flex items-center justify-center gap-10'>
        
        {/* Left Eye */}
        <div className='rounded-full bg-zinc-200 h-[13vw] w-[13vw] flex items-center justify-center relative'>
          <div className='absolute rounded-full bg-zinc-900 h-[8.5vw] w-[8.5vw] flex items-center justify-center'>
            <div
              style={{ transform: `rotate(${eyePosition}deg) translate(-35%, -35%)` }}
              className='line w-full h-10 flex items-center justify-center'
            >
              <div className='rounded-full bg-zinc-200 h-[5vh] w-[5vh]' />
            </div>
          </div>
        </div>

        {/* Right Eye */}
        <div className='rounded-full bg-zinc-200 h-[13vw] w-[13vw] flex items-center justify-center relative'>
          <div className='absolute rounded-full bg-zinc-900 h-[8.5vw] w-[8.5vw] flex items-center justify-center'>
            <div
              style={{ transform: `rotate(${eyePosition}deg) translate(-35%, -35%)` }}
              className='line w-full h-10 flex items-center justify-center'
            >
              <div className='rounded-full bg-zinc-200 h-[5vh] w-[5vh]' />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Eyes;
