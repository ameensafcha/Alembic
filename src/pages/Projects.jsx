import React, { useEffect } from 'react'

const Projects = () => {
  useEffect(() => {
    // Hum sirf samajhne ke liye jaan-bujhkar 2 second ka wait kara rahe hain.
    // Real project me yahan API fetch ya image loading hoti hai.
    
    setTimeout(() => {
      
      // 2 Second baad signal bhej do ki "Main ready hu, parda hata do!"
      window.dispatchEvent(new Event("PAGE_READY"));
      
    }, 1000);
  }, []);
  return (
    <div className='bg-red-700'>Projects ready</div>
  )
}

export default Projects