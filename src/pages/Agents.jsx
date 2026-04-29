import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Agents = () => {




  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef= useRef(null)
  const imageRef= useRef(null)

  const imageArr=[
    'https://shorthand.com/the-craft/raster-images/assets/5kVrMqC0wp/sh-unsplash_5qt09yibrok-4096x2731.jpeg',
    'https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg',
    'https://images.pexels.com/photos/36847299/pexels-photo-36847299.png?cs=srgb&dl=pexels-tunahan-kalayci-469309432-36847299.jpg&fm=jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixk6U5ZXgvZS08R5DabLikybpmI-0XWLHUw&s',
    'https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151034019.jpg?semt=ais_hybrid&w=740&q=80',
    'https://images.stockcake.com/public/0/e/a/0ea3acb7-f41b-49b3-a2f2-215487607291_large/joyful-animated-boy-stockcake.jpg',
    'https://cdn.pixabay.com/photo/2025/05/24/08/07/ai-generated-9619271_640.png',
    'https://variety.com/wp-content/uploads/2013/10/af-032_mk02_9001_v003_final.jpg?w=1000&h=667&crop=1'
  ]

  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        // markers:true,
        start:"top 25.5%",
        end:"top -100%",
        pin:true,
        scrub:true,
        onUpdate:function(elem){

          let imageIndex
          if(elem.progress <1){
            imageIndex = Math.floor(elem.progress * imageArr.length)
          }else{
            imageIndex = imageArr.length -1
          }
          imageRef.current.src=imageArr[imageIndex] 
        }
      }
      
    })
  })


    useEffect(() => {
    let loadedCount = 0;
    
    const fireSignal = () => {
      window.dispatchEvent(new Event("PAGE_READY"));
    };

    const fallback = setTimeout(() => fireSignal(), 4000); // Safety net

    if (imageArr.length === 0) {
      fireSignal();
      return () => clearTimeout(fallback);
    }

    imageArr.forEach((src) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === imageArr.length) {
          clearTimeout(fallback);
          fireSignal();
        }
      };
      img.src = src;
    });

    return () => clearTimeout(fallback);
  }, []);

  return (
    <div>
      <div className="section1 p-1 text-black">
        <div ref={imageDivRef} className="absolute h-[20vw] w-[15vw] overflow-hidden rounded-3xl  bg-red-700 top-60 left-[30vw]">
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="https://shorthand.com/the-craft/raster-images/assets/5kVrMqC0wp/sh-unsplash_5qt09yibrok-4096x2731.jpeg"
            alt="https://shorthand.com/the-craft/raster-images/assets/5kVrMqC0wp/sh-unsplash_5qt09yibrok-4096x2731.jpeg"
          />
        </div>
        <div className="relative font-[font1]">
          <div className=" mt-[55vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
              SEVEN7Y <br /> TWO
            </h1>
          </div>

          <div className="pl-[40%] mt-5">
            <p className="text-6xl ">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re
              inquisitive and open-minded, and we make sure creativity crowds
              out ego from every corner. A brand is a living thing, with values,
              a personality and a story. If we ignore that, we can achieve
              short-term success, but not influence that goes the distance. We
              bring that perspective to every brand story we help tell.
            </p>
          </div>
        </div>
      </div>


      <div className="section2 h-screen">

      </div>
    </div>
    
  );
};

export default Agents;
