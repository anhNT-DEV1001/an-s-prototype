import VideoImg from '../VideoImg';
import video from '../../assets/imgs/section02/HD/HD_1.mp4';
import img2 from '../../assets/imgs/section02/HD/HD_2.png';
import img3 from '../../assets/imgs/section02/HD/HD_3.png';
import img4 from '../../assets/imgs/section02/HD/HD_4.png';
import img5 from '../../assets/imgs/section02/HD/HD_5.png';
import image1 from '../../assets/imgs/section02/INTERNATIONAL POSTER/INTLP_1.png';
import image2 from '../../assets/imgs/section02/INTERNATIONAL POSTER/INTLP_2.png';
import image3 from '../../assets/imgs/section02/INTERNATIONAL POSTER/INTLP_3.png';
import image4 from '../../assets/imgs/section02/INTERNATIONAL POSTER/INTLP_4.png';
import image5 from '../../assets/imgs/section02/INTERNATIONAL POSTER/INTLP_5.png';
import image6 from '../../assets/imgs/section02/INTERNATIONAL POSTER/INTLP_6.png';
import image7 from '../../assets/imgs/section02/INTERNATIONAL POSTER/INTLP_7.png';
import image8 from '../../assets/imgs/section02/INTERNATIONAL POSTER/INTLP_8.png';
import rc1 from '../../assets/imgs/section02/RECAPTCHA/RC_1.png';
import rc2 from '../../assets/imgs/section02/RECAPTCHA/RC_2.png';
import rc3 from '../../assets/imgs/section02/RECAPTCHA/RC_3.png';
import rc4 from '../../assets/imgs/section02/RECAPTCHA/RC_4.png';
import rc5 from '../../assets/imgs/section02/RECAPTCHA/RC_5.png';
import rc6 from '../../assets/imgs/section02/RECAPTCHA/RC_6.png';
import rc7 from '../../assets/imgs/section02/RECAPTCHA/RC_7.png';
import rc8 from '../../assets/imgs/section02/RECAPTCHA/RC_8.png';
import rc9 from '../../assets/imgs/section02/RECAPTCHA/RC_9.png';
import rc10 from '../../assets/imgs/section02/RECAPTCHA/RC_10.png';
import rc11 from '../../assets/imgs/section02/RECAPTCHA/RC_11.png';
import rc12 from '../../assets/imgs/section02/RECAPTCHA/RC_12.png';
import rc13 from '../../assets/imgs/section02/RECAPTCHA/RC_13.png';
import rc14 from '../../assets/imgs/section02/RECAPTCHA/RC_14.png';
import rc15 from '../../assets/imgs/section02/RECAPTCHA/RC_15.png';
import rc16 from '../../assets/imgs/section02/RECAPTCHA/RC_16.png';



import { useState } from 'react';

export default function Section02() {
  const arrMedia = [
    {type: 'video' , src: video},
    {type: 'image' , src: img2},
    {type: 'image' , src: img3},
    {type: 'image' , src: img4},
    {type: 'image' , src: img5},
  ] as any;
  const [currentSlide, setCurrentSlide] = useState(0);
  const arrImg = [
    {type: 'image' , src: image1},
    {type: 'image' , src: image2},
    {type: 'image' , src: image3},
    {type: 'image' , src: image4},
    {type: 'image' , src: image5},
    {type: 'image' , src: image6},
    {type: 'image' , src: image7},
    {type: 'image' , src: image8},
  ] as any
  const [currentSlideImg, setCurrentSlideImg] = useState(0);
  const arrImgRC = [
    {type: 'image' , src: rc1},
    {type: 'image' , src: rc2},
    {type: 'image' , src: rc3},
    {type: 'image' , src: rc4},
    {type: 'image' , src: rc5},
    {type: 'image' , src: rc6},
    {type: 'image' , src: rc7},
    {type: 'image' , src: rc8},
    {type: 'image' , src: rc9},
    {type: 'image' , src: rc10},
    {type: 'image' , src: rc11},
    {type: 'image' , src: rc12},
    {type: 'image' , src: rc13},
    {type: 'image' , src: rc14},
    {type: 'image' , src: rc15},
    {type: 'image' , src: rc16},
  ] as any;
  const [currentSlideImgRC, setCurrentSlideImgRC] = useState(0);
  return (
    <div className="mt-10 grid grid-cols-3 grid-rows-1 gap-0">
      <section className="mb-2 ml-2 mt-2">
        <div className="flex justify-center items-center bg-black">
          <VideoImg media={arrMedia} alt='Box2' clickToNext={true} onSlideChange={(index) => setCurrentSlide(index)}/>
        </div>
        {/* text */}
        <div className=" pb-5 flex justify-between">
          <div className='font-display'>GACNHQ MV Credit</div>
            <div className='text-right font-display text-[9px]'>
            {currentSlide + 1}/{arrMedia.length}
          </div>
        </div> 
        <div className="text-[14.4px]">
          Ending credit sequence for Giu Anh Cho Ngay Hom Qua, a music video from Xoay Tron, the second studio album by Hoang Dung.
        </div>
        <div className="pt-2 text-[10.8px]">
              <p>2025</p>
              <p>Creative & Art Direction: Duy Dao & Studio DUY</p>
              <p>Project Managers: Quan Le, Anh Nguyen</p>
              <p>Design Lead: Duy Dao, June Vu</p>
              <p>Designers & Assistant: Dong Truc, Ha Hoang, An Tran, Minh Dang, Quang Khai</p>
              <p>Typeface: YTF Grand BD by Yellow Type Foundry</p>
        </div>
      </section>
      <section className="m-2">
        <div className="flex justify-center items-center bg-primary">
          <VideoImg media={arrImg} clickToNext={true} onSlideChange={(index) => setCurrentSlideImg(index)} />
        </div>
        <div className=" pb-5 flex justify-between">
          <div className='font-display'>International Typography Poster Exhibition</div>
            <div className='text-right font-display text-[9px]'>
            {currentSlideImg + 1}/{arrImg.length}
          </div>
        </div> 
        <div className="text-[14.4px]">
          Visual concept and poster for International Typography Poster Exhibition 2021, the event held annually celebrating innovative typographic expression from designers around the world.
        </div>
        <div className="pt-2 text-[10.8px]">
              <p>Poster: 841x1189mm, 210x297mm</p>
        </div>
      </section>
      <section className="mb-2 mr-2 mt-2">
        <div className="flex justify-center items-center bg-primary">
          {/* <img src={imgBox3} alt="" /> */}
          <VideoImg media={arrImgRC} clickToNext={true} onSlideChange={(index) => setCurrentSlideImgRC(index)} />
        </div>
        <div className=" pb-5 flex justify-between">
          <div className='font-display'>ReCaptcha</div>
            <div className='text-right font-display text-[9px]'>
            {currentSlideImgRC + 1}/{arrImgRC.length}
          </div>
        </div> 
        <div className="text-[14.4px]">
          A publication that examines the chaotic patterns within AI-generated data, using a visual language inspired by CAPTCHA, the online verification system created to differentiate humans from machines.
        </div>
        <div className="pt-2 text-[10.8px]">
              <p>2024</p>
              <p>Typeface: Redaction, Space Mono, Inter</p>
              <p>Dimension:</p>
              <p>Number of Pages:</p>
        </div>
      </section> 
    </div>
  )
}