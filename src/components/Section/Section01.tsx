import { useState } from 'react';
import imgBox1 from '../../assets/imgs/section01/box1_01.png';
import imgBox2 from '../../assets/imgs/section01/box1_02.png';
import imgBox3 from '../../assets/imgs/section01/box1_03.png';
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
import ImageSlider from './ImgSlider';
import VideoImg from '../VideoImg';
export default function Section01() {
  const arrImg = [imgBox1 , imgBox2 , imgBox3];
  const [currentImage, setCurrentImage] = useState(0);
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
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-0">
      {/* box1 */}
      <section className="bg-primary m-2">
        <div className="bg-black flex justify-center items-center" style={{height : 721.01 }}>
          {/* <img src={imgBox3} alt="Test1" /> */}
          <ImageSlider images={arrImg} alt='Box1' clickToNext={true} onSlideChange={(index) => setCurrentImage(index)} />
        </div>
        <div className=" pb-5 flex justify-between">
          <div className='font-display'>Space, Boundary and Connection</div>
            <div className='text-right font-display text-[9px]'>
            {currentImage + 1} / {arrImg.length}
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
        <div className="bg-black flex justify-center items-center" style={{height : 638.2}}>
          <VideoImg media={arrMedia} alt='Box2' clickToNext={true} onSlideChange={(index) => setCurrentSlide(index)}/>
        </div>
        <div className=" pb-5 flex justify-between">
          <div className='font-display'>Greenwich Student Book Exhibition</div>
            <div className='text-right font-display text-[9px]'>
            {currentSlide + 1} / {arrMedia.length}
            </div>
        </div> 
        <div className="grid grid-cols-2 grid-rows-1 gap-0">
          <p className="mr-2 text-[14.4px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatem commodi alias ad in, debitis labore voluptatibus pariatur. Ab quod alias nulla aspernatur maiores qui eaque, ipsam perspiciatis consequatur minima!
          </p>
          <p className="text-[14.4px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque dolorem ratione ipsum perferendis. Fugit accusamus sint, corrupti porro quo possimus aliquam distinctio assumenda natus totam minus, sapiente ut veniam quia.
          </p>
        </div>
      </section>
    </div>
  )
}