import { useState } from 'react';
import profile from '../../assets/imgs/profile/kantran.svg';
import lego1 from '../../assets/imgs/section04/LEGO/L_1.png';
import lego2 from '../../assets/imgs/section04/LEGO/L_2.png';
import lego3 from '../../assets/imgs/section04/LEGO/L_3.png';
import lego5 from '../../assets/imgs/section04/LEGO/L_5.png';

import k1 from '../../assets/imgs/section04/KAT/K_1.png';
import k2 from '../../assets/imgs/section04/KAT/K_2.png';
import k3 from '../../assets/imgs/section04/KAT/K_3.png';
import k4 from '../../assets/imgs/section04/KAT/K_4.png';
import k5 from '../../assets/imgs/section04/KAT/K_5.png';
import k6 from '../../assets/imgs/section04/KAT/K_6.png';

import b1 from '../../assets/imgs/section04/BEYOND THE ASHES/B_1.png';
import b2 from '../../assets/imgs/section04/BEYOND THE ASHES/B_2.png';
import b3 from '../../assets/imgs/section04/BEYOND THE ASHES/B_3.png';
import b4 from '../../assets/imgs/section04/BEYOND THE ASHES/B_4.png';
import b5 from '../../assets/imgs/section04/BEYOND THE ASHES/B_5.png';
import b6 from '../../assets/imgs/section04/BEYOND THE ASHES/B_6.png';
import b7 from '../../assets/imgs/section04/BEYOND THE ASHES/B_8.png';
import b8 from '../../assets/imgs/section04/BEYOND THE ASHES/B_1.png';
import b9 from '../../assets/imgs/section04/BEYOND THE ASHES/B_9.png';
import b10 from '../../assets/imgs/section04/BEYOND THE ASHES/B_10.png';
import b11 from '../../assets/imgs/section04/BEYOND THE ASHES/B_11.png';
import b12 from '../../assets/imgs/section04/BEYOND THE ASHES/B_12.png';

import VideoImg from '../VideoImg';
export function Section04() {
  const arrImgLego = [
    {type: 'image' , src: lego1},
    {type: 'image' , src: lego2},
    {type: 'image' , src: lego3},
    {type: 'image' , src: lego5},
  ] as any;
  const arrImgKat = [
    {type: 'image' , src: k1},
    {type: 'image' , src: k2},
    {type: 'image' , src: k3},
    {type: 'image' , src: k4},
    {type: 'image' , src: k5},
    {type: 'image' , src: k6},
  ] as any;

  const arrImgB = [
    {type: 'image' , src: b1},
    {type: 'image' , src: b2},
    {type: 'image' , src: b3},
    {type: 'image' , src: b4},
    {type: 'image' , src: b5},
    {type: 'image' , src: b6},
    {type: 'image' , src: b7},
    {type: 'image' , src: b8},
    {type: 'image' , src: b9},
    {type: 'image' , src: b10},
    {type: 'image' , src: b11},
    {type: 'image' , src: b12},
  ] as any
  const [currentSlideImgLego, setCurrentSlideImgLego] = useState(0);
  const [currentSlideImgKat, setCurrentSlideImgKat] = useState(0);
  const [currentSlideImgB, setCurrentSlideImgB] = useState(0);
  return(
    <>
      <div className="grid grid-cols-3 grid-rows-1 gap-0 mt-10">
        <section className="mb-2 ml-2 mt-2">
        <div className="flex justify-center items-center bg-black">
          <VideoImg media={arrImgKat} clickToNext={true} onSlideChange={(index) => setCurrentSlideImgKat(index)}/>
        </div>
        <div className=" pb-5 flex justify-between">
            <div className='font-display'>KAT</div>
              <div className='text-right font-display text-caption-sm'>
              {currentSlideImgKat + 1}/{arrImgKat.length}
            </div>
          </div> 
          <div className="text-body-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam tempore eligendi, magni ad molestiae quaerat ipsam officia laudantium asperiores illum aperiam! Consequatur molestias ex incidunt labore fugit deleniti vel ea?
          </div>
        </section>
        <section className="m-2">
          <div className="flex justify-center items-center bg-black">
            <VideoImg media={arrImgB} clickToNext={true} onSlideChange={(index) => setCurrentSlideImgB(index)}/>
          </div>
          <div className=" pb-5 flex justify-between">
            <div className='font-display'>Beyond the Ashes</div>
              <div className='text-right font-display text-caption-sm'>
              {currentSlideImgB + 1}/{arrImgB.length}
            </div>
          </div> 
          <div className="text-body-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam tempore eligendi, magni ad molestiae quaerat ipsam officia laudantium asperiores illum aperiam! Consequatur molestias ex incidunt labore fugit deleniti vel ea?
          </div>
        </section>
        <section className="mb-2 mr-2 mt-2">
          <div className="flex justify-center items-center bg-primary">
            <VideoImg media={arrImgLego} clickToNext={true} onSlideChange={(index) => setCurrentSlideImgLego(index)}/>
          </div>
          <div className=" pb-5 flex justify-between">
            <div className='font-display'>Lego Type Experiment</div>
              <div className='text-right font-display text-caption-sm'>
              {currentSlideImgLego + 1}/{arrImgLego.length}
            </div>
          </div> 
          <div className="text-body-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam tempore eligendi, magni ad molestiae quaerat ipsam officia laudantium asperiores illum aperiam! Consequatur molestias ex incidunt labore fugit deleniti vel ea?
          </div>
        </section>
    </div>
    <div className="flex-none ml-2 mr-2 mt-10  bg-primary">
      <img src={profile} alt="Img" className="w-full h-auto block bg-primary" />
    </div>
    </>
  )
}