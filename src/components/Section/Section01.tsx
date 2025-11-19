import { useState } from 'react';
import img2 from '../../assets/imgs/section01/GREENWICH BOOK EXHIBITION/GSBE_2.png';
import img3 from '../../assets/imgs/section01/GREENWICH BOOK EXHIBITION/GSBE_3.png';
import img4 from '../../assets/imgs/section01/GREENWICH BOOK EXHIBITION/GSBE_4.png';
import img5 from '../../assets/imgs/section01/GREENWICH BOOK EXHIBITION/GSBE_5.png';
import img6 from '../../assets/imgs/section01/GREENWICH BOOK EXHIBITION/GSBE_6.png';
import img7 from '../../assets/imgs/section01/GREENWICH BOOK EXHIBITION/GSBE_7.png';
import img8 from '../../assets/imgs/section01/GREENWICH BOOK EXHIBITION/GSBE_8.png';
import img9 from '../../assets/imgs/section01/GREENWICH BOOK EXHIBITION/GSBE_9.png';
import img10 from '../../assets/imgs/section01/GREENWICH BOOK EXHIBITION/GSBE_10.png';
import img11 from '../../assets/imgs/section01/GREENWICH BOOK EXHIBITION/GSBE_11.png';
import img12 from '../../assets/imgs/section01/GREENWICH BOOK EXHIBITION/GSBE_12.png';
import img13 from '../../assets/imgs/section01/GREENWICH BOOK EXHIBITION/GSBE_13.png';
import img14 from '../../assets/imgs/section01/GREENWICH BOOK EXHIBITION/GSBE_14.png';
import img15 from '../../assets/imgs/section01/GREENWICH BOOK EXHIBITION/GSBE_15.png';
import img16 from '../../assets/imgs/section01/GREENWICH BOOK EXHIBITION/GSBE_16.png';
import vid from '../../assets/imgs/section01/GREENWICH BOOK EXHIBITION/GSBE_1.mp4';

import c1 from '../../assets/imgs/section01/SPACE BOUNDARY/1.png';
import c2 from '../../assets/imgs/section01/SPACE BOUNDARY/2.png';
import c3 from '../../assets/imgs/section01/SPACE BOUNDARY/3.png';
import c4 from '../../assets/imgs/section01/SPACE BOUNDARY/4.png';
import c5 from '../../assets/imgs/section01/SPACE BOUNDARY/5.gif';
import c6 from '../../assets/imgs/section01/SPACE BOUNDARY/6.png';
import c7 from '../../assets/imgs/section01/SPACE BOUNDARY/7.png';
import c8 from '../../assets/imgs/section01/SPACE BOUNDARY/8.png';
import c9 from '../../assets/imgs/section01/SPACE BOUNDARY/9.png';
import c10 from '../../assets/imgs/section01/SPACE BOUNDARY/10.png';
import c11 from '../../assets/imgs/section01/SPACE BOUNDARY/11.png';
import c12 from '../../assets/imgs/section01/SPACE BOUNDARY/12.png';
import c13 from '../../assets/imgs/section01/SPACE BOUNDARY/13.png';
import c14 from '../../assets/imgs/section01/SPACE BOUNDARY/14.png';
import c15 from '../../assets/imgs/section01/SPACE BOUNDARY/15.png';
import c16 from '../../assets/imgs/section01/SPACE BOUNDARY/16.png';
import c17 from '../../assets/imgs/section01/SPACE BOUNDARY/17.png';
import c18 from '../../assets/imgs/section01/SPACE BOUNDARY/18.png';
import c19 from '../../assets/imgs/section01/SPACE BOUNDARY/19.png';
import c20 from '../../assets/imgs/section01/SPACE BOUNDARY/20.png';
import c21 from '../../assets/imgs/section01/SPACE BOUNDARY/21.png';
import c22 from '../../assets/imgs/section01/SPACE BOUNDARY/22.png';
import c23 from '../../assets/imgs/section01/SPACE BOUNDARY/23.png';
import c24 from '../../assets/imgs/section01/SPACE BOUNDARY/24.png';




import VideoImg from '../VideoImg';

export default function Section01() {
  const arrMedia = [
    {type: "video" , src: vid },
    {type: "image" , src: img2 },
    {type: "image" , src: img3 },
    {type: "image" , src: img4 },
    {type: "image" , src: img5 },
    {type: "image" , src: img6 },
    {type: "image" , src: img7 },
    {type: "image" , src: img8 },
    {type: "image" , src: img9 },
    {type: "image" , src: img10 },
    {type: "image" , src: img11 },
    {type: "image" , src: img12 },
    {type: "image" , src: img13 },
    {type: "image" , src: img14 },
    {type: "image" , src: img15 },
    {type: "image" , src: img16 },
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
    {type: 'image' , src: c22},
    {type: 'image' , src: c23},
    {type: 'image' , src: c24},
  ] as any;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideC, setCurrentSlideC] = useState(0);
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-0">
      {/* box1 */}
      <section className="bg-primary m-2">
        <div className="bg-black flex justify-center items-center">
          <VideoImg media={arrC} clickToNext={true} onSlideChange={(index) => setCurrentSlideC(index)}/>
        </div>
        <div className=" pb-5 flex justify-between">
          <div className='font-display'>Space, Boundary and Connection</div>
            <div className='text-right font-display text-[9px]'>
            {currentSlideC + 1}/{arrC.length}
            </div>
        </div> 
        
        <div className="grid grid-cols-2 grid-rows-1 gap-0">
          <div className="mr-2 text-[14.4px]">
            Space, Boundary & Connection invites readers on a journey from the vast to the intimate. Each page guides reader from a sense of open expanse toward an enclosed interior. As pages turn, the scale tightens, prompting reflection on how distance and closeness shape perception.          
            <div className="pt-2 text-[10.8px]">
              <p>2025</p>
              <p>Typeface: SM Hauser, GT Alpina</p>
            </div>
          </div>
          <p className="text-[14.4px]">
            The book is a spatial experiment: a grid zooms inward, titles contract, silver ink and margin‑blocking bars make boundaries tangible, while text and images flow across spreads to keep pages linked. Design together with <em>Dao Quang Minh, Le Thuc Nguyen, Vu Ngoc Minh.</em>          
          <div className="pt-2 text-[10.8px]">
            <p>Dimension:</p>
            <p>Number of pages: 358 pages</p>
          </div>
          </p>
        </div>
      </section>
      {/* box2 */}
      <section className="bg-primary ml-0 mb-2 mt-2 mr-2">
        <div className="bg-black flex justify-center items-center">
          <VideoImg media={arrMedia} alt='Box2' clickToNext={true} onSlideChange={(index) => setCurrentSlide(index)}/>
        </div>
        <div className=" pb-5 flex justify-between">
          <div className='font-display'>Greenwich Student Book Exhibition</div>
            <div className='text-right font-display text-[9px]'>
            {currentSlide + 1}/{arrMedia.length}
            </div>
        </div> 
        <div className="grid grid-cols-2 grid-rows-1 gap-0">
          <p className="mr-2 text-[14.4px]">
            Visual identity for the Greenwich Student Book Exhibition under the theme “O.” Each letter O is sourced directly from a featured book, reflecting its unique scale, typeface, and typographic character.
            <div className="pt-2 text-[10.8px]">
              <p>2025</p>
              <p>Visual Identity, various media</p>
              <p>Typeface: Maxi & Diatype by Dinamo</p>
            </div>
          </p>
          <p className="text-[14.4px]">
            Within this framework, we created a cohesive set of print and digital materials. These included large-format posters for public display, banners, catalogue, and animations. Animation by Dao Quang Minh, Vu Duy Anh
            <div className="pt-2 text-[10.8px]">
              <p>Poster: 1000x1982mm</p>
              <p>Banner: 1650x700mm, 2200x700mm, </p>
              <p>Catalogue: 215x306x10mm, 94 pages</p>
            </div>
          </p>
        </div>
      </section>
    </div>
  )
}