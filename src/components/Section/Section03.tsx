import lt1 from '../../assets/imgs/section03/LENTI/LT_1.png';
import lt2 from '../../assets/imgs/section03/LENTI/LT_2.png';
import lt3 from '../../assets/imgs/section03/LENTI/LT_3.png';
import lt4 from '../../assets/imgs/section03/LENTI/LT_4.png';
import lt5 from '../../assets/imgs/section03/LENTI/LT_5.png';

import c1 from '../../assets/imgs/section03/CREATIVE HIGH-WIRE/C_1.png';
import c2 from '../../assets/imgs/section03/CREATIVE HIGH-WIRE/C_2.png';
import c3 from '../../assets/imgs/section03/CREATIVE HIGH-WIRE/C_3.png';
import c4 from '../../assets/imgs/section03/CREATIVE HIGH-WIRE/C_4.png';
import c5 from '../../assets/imgs/section03/CREATIVE HIGH-WIRE/C_5.png';
import c6 from '../../assets/imgs/section03/CREATIVE HIGH-WIRE/C_6.png';
import c7 from '../../assets/imgs/section03/CREATIVE HIGH-WIRE/C_7.png';
import c8 from '../../assets/imgs/section03/CREATIVE HIGH-WIRE/C_8.png';
import c9 from '../../assets/imgs/section03/CREATIVE HIGH-WIRE/C_9.png';
import c10 from '../../assets/imgs/section03/CREATIVE HIGH-WIRE/C_10.png';
import c11 from '../../assets/imgs/section03/CREATIVE HIGH-WIRE/C_11.png';
import c12 from '../../assets/imgs/section03/CREATIVE HIGH-WIRE/C_12.png';
import c13 from '../../assets/imgs/section03/CREATIVE HIGH-WIRE/C_13.png';
import c14 from '../../assets/imgs/section03/CREATIVE HIGH-WIRE/C_14.png';
import c15 from '../../assets/imgs/section03/CREATIVE HIGH-WIRE/C_15.png';
import c16 from '../../assets/imgs/section03/CREATIVE HIGH-WIRE/C_16.png';
import c17 from '../../assets/imgs/section03/CREATIVE HIGH-WIRE/C_17.png';
import c18 from '../../assets/imgs/section03/CREATIVE HIGH-WIRE/C_18.png';
import c19 from '../../assets/imgs/section03/CREATIVE HIGH-WIRE/C_19.png';
import c20 from '../../assets/imgs/section03/CREATIVE HIGH-WIRE/C_20.png';
import c21 from '../../assets/imgs/section03/CREATIVE HIGH-WIRE/C_21.png';

import { useState } from 'react';
import VideoImg from '../VideoImg';


export default function Section03() {
  const arrLt = [
    {type: 'image' , src: lt1},
    {type: 'image' , src: lt2},
    {type: 'image' , src: lt3},
    {type: 'image' , src: lt4},
    {type: 'image' , src: lt5},
  ] as any;
  const arrC = [
    {type: 'image' , src: c1},
    {type: 'image' , src: c2},
    {type: 'image' , src: c3},
    {type: 'image' , src: c4},
    {type: 'image' , src: c5},
    {type: 'image' , src: c6},
    {type: 'image' , src: c7},
    {type: 'image' , src: c8},
    {type: 'image' , src: c9},
    {type: 'image' , src: c10},
    {type: 'image' , src: c11},
    {type: 'image' , src: c12},
    {type: 'image' , src: c13},
    {type: 'image' , src: c14},
    {type: 'image' , src: c15},
    {type: 'image' , src: c16},
    {type: 'image' , src: c17},
    {type: 'image' , src: c18},
    {type: 'image' , src: c19},
    {type: 'image' , src: c20},
    {type: 'image' , src: c21},
  ] as any;
  const [currentSlideLT, setCurrentSlideLT] = useState(0);
  const [currentSlideC, setCurrentSlideC] = useState(0);
  return(
  <>
  <div className="grid grid-cols-2 grid-rows-1 gap-0 mt-10">
    <section className="m-2">
      <div className="bg-black h-[942.73px] flex justify-center items-center" >
        {/* <img src="" alt="Test1" /> */}
        <VideoImg media={arrLt} clickToNext={true} onSlideChange={(index) => setCurrentSlideLT(index)} />
      </div>
      <div className=" pb-5 flex justify-between">
          <div className='font-display'>Lenti Type system </div>
            <div className='text-right font-display text-[9px]'>
            {currentSlideLT + 1}/{arrLt.length}
            </div>
        </div> 
      <div className="grid grid-cols-2 grid-rows-1">
        <div className="text-[14.4px] mr-2">A modular type system built from rectangular components, designed to emulate the shifting visual effect of lenticular printing. </div>
        <div className="text-[14.4px]">The system is available in an all-caps alphabet and numerals, with a variable axis for flexible adjustments.</div>
      </div>
      <div className="text-[10.8px] pt-2">
        <p>2024, Typeface</p>
      </div>
    </section>
    <section className="ml-0 mb-2 mt-2 mr-2">
      <div className="bg-black h-[747px] flex justify-center items-center" >
        <VideoImg media={arrC} clickToNext={true} onSlideChange={(index) => setCurrentSlideC(index)} />
      </div>
      <div className=" pb-5 flex justify-between">
          <div className='font-display'>The Creative High-wire </div>
            <div className='text-right font-display text-[9px]'>
            {currentSlideC + 1}/{arrC.length}
            </div>
        </div> 
      <div className="grid grid-cols-2 grid-rows-1">
        <div className="text-[14.4px] mr-2">Creating creative works feel like walking a high-wire between plagiarism and inspiration. This publication was built on my essay of exploring themes of plagiarism, inspiration, cliches, and originality within creative fields</div>
        <div className="text-[14.4px]">The publication examines a series of projects and products that share similarities, wether in concept, design, or execution. From that, I draw my perspective on the issue, and a reminder to engage with inspiration behind the work with intergrity</div>
      </div>
      <div className="text-[10.8px] pt-2">
        <p>2024</p>
        <p>Typeface: Lenti, AA Actual Mono</p>
      </div>
    </section>
  </div>
  </>
  )
}