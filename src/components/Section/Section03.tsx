import profile from '../../assets/imgs/profile/kantran.svg';
import lt1 from '../../assets/imgs/section03/LENTI/LT_1.png';
import lt2 from '../../assets/imgs/section03/LENTI/LT_2.png';
import lt3 from '../../assets/imgs/section03/LENTI/LT_3.png';
import lt4 from '../../assets/imgs/section03/LENTI/LT_4.png';
import lt5 from '../../assets/imgs/section03/LENTI/LT_5.png';
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
  const [currentSlideLT, setCurrentSlideLT] = useState(0);
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
        <img src="" alt="Test 2" />
      </div>
      <div className=" pb-5 flex justify-between">
          <div className='font-display'>The Creative High-wire </div>
            <div className='text-right font-display text-[9px]'>
            1 / 3
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
  <div className="flex-none ml-2 mr-2 mt-10  bg-primary">
    <img src={profile} alt="Img" className="w-full h-auto block bg-primary" />
  </div>
  </>
  )
}