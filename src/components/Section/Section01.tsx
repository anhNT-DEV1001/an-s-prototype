import { useState } from 'react';
import imgBox1 from '../../assets/imgs/section01/box1_01.png';
import imgBox2 from '../../assets/imgs/section01/box1_02.png';
import imgBox3 from '../../assets/imgs/section01/box1_03.png';
import ImageSlider from './ImgSlider';
export default function Section01() {
  const arrImg = [imgBox1 , imgBox2 , imgBox3];
  const [currentImage, setCurrentImage] = useState(0);
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
          <img src="" alt="Test2"/>
          <img src="" alt="Test3" />
        </div>
        <p className="font-display pb-5">Greenwich Student Book Exhibition</p>
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