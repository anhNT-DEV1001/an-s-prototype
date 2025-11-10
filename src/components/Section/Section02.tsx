import imgBox2 from '../../assets/imgs/section02/box2_01.png';
import imgBox3 from '../../assets/imgs/section02/box3_01.png';
export default function Section02() {
  return (
    <div className="mt-10 grid grid-cols-3 grid-rows-1 gap-0">
      <section className="m-2">
        <div className="flex justify-center items-center bg-black h-[438.69px]">video</div>
        {/* text */}
        <div className=" pb-5 flex justify-between">
          <div className='font-display'>GACNHQ MV Credit</div>
            <div className='text-right font-display text-[9px]'>
            1 / 3
          </div>
        </div> 
        <div className="text-[14.4px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam tempore eligendi, magni ad molestiae quaerat ipsam officia laudantium asperiores illum aperiam! Consequatur molestias ex incidunt labore fugit deleniti vel ea?
        </div>
      </section>
      <section className="m-2">
        <div className="flex justify-center items-center bg-primary h-[943.35px]">
          <img src={imgBox2} alt="" />
        </div>
        <div className=" pb-5 flex justify-between">
          <div className='font-display'>International Typography Poster Exhibition</div>
            <div className='text-right font-display text-[9px]'>
            1 / 3
          </div>
        </div> 
        <div className="text-[14.4px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam tempore eligendi, magni ad molestiae quaerat ipsam officia laudantium asperiores illum aperiam! Consequatur molestias ex incidunt labore fugit deleniti vel ea?
        </div>
      </section>
      <section className="m-2">
        <div className="flex justify-center items-center bg-primary h-[494.18px]">
          <img src={imgBox3} alt="" />
        </div>
        <div className=" pb-5 flex justify-between">
          <div className='font-display'>ReCaptcha</div>
            <div className='text-right font-display text-[9px]'>
            1 / 3
          </div>
        </div> 
        <div className="text-[14.4px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam tempore eligendi, magni ad molestiae quaerat ipsam officia laudantium asperiores illum aperiam! Consequatur molestias ex incidunt labore fugit deleniti vel ea?
        </div>
      </section> 
    </div>
  )
}