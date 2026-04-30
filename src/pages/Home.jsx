import React, { useEffect } from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import Info from '../components/home/Info'

const Home = () => {

  // FIX: Home mount hote hi reveal trigger kar
  useEffect(() => {
    window.dispatchEvent(new Event("PAGE_READY"));
  }, []);

   return (
    <div className='text-white'>
      <div className='h-screen w-screen relative'>
        <div className='absolute inset-0'>
          <Video />
        </div>
        <div className='h-full w-full relative pb-5 overflow-hidden flex flex-col justify-between'>
          <HomeHeroText />
          <HomeBottomText />
        </div>
      </div>

      <Info/>
    </div>
  )
}

export default Home;