import React from 'react'
import Navebar from './components/Navebar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import RatingCards from './components/RatingCards'
import InvitationPage from './components/InvitationPage'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=' w-full h-min-screen text-white bg-zinc-900'>
      <Navebar/>
      <Landingpage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <RatingCards/>
      <InvitationPage/>
      <Footer/>
    </div>
  )
}

export default App
