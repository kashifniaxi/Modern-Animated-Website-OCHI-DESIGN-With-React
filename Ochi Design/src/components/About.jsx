import React from 'react'
import ApproachImage from '../assets/approach-img.jpg'

function About() {
  return (
    <div className="w-full bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl relative overflow-x-hidden">
      {/* Original About content */}
      <div className="p-20">
        <h1 className='text-black text-[4vw] font-["Neue-Montreal"] tracking-tight leading-[4.5vw]'>
          Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        {/* Existing border line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[100vw] h-[1px] bg-black my-20"></div>

        {/* “Our approach” section */}
        <div className="mt-10 flex flex-col md:flex-row items-center pt-10">
          {/* Left: heading + button */}
          <div className="md:w-1/2 md:pr-8 mb-[25vw]">
            <h2 className='text-black text-[4vw] font-["Neue-Montreal"] tracking-tight leading-[4.5vw]'>
              Our approach:
            </h2>
            <button className="mt-6 bg-black text-white py-2 px-6 rounded-full inline-flex items-center">
              <span>READ MORE</span>
              <span className="ml-2 h-2 w-2 bg-white rounded-full"></span>
            </button>
          </div>

          {/* Right: local image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={ApproachImage}
              alt="Our approach"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
