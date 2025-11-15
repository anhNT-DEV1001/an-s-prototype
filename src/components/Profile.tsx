import profile from '../assets/imgs/profile/kantran.svg';

export default function Profile() {
  return (
    // Đổi grid-rows-3 thành flex flex-col
    <div className="flex flex-col gap-0 w-full min-h-screen">
      
      {/* Phần 1: Info */}
      <div className="grid grid-cols-2 gap-0 flex-grow pb-[240px]"> {/* flex-grow để chiếm khoảng trống nếu cần */}
        <div className='h-0'></div>
          <div> {/* Thêm padding cho thoáng */}
            <p><em>About:</em></p>
            <p style={{marginTop:-6}}>An Tran (he/him) is a graphic designer currently based in Hanoi, Vietnam, he shows </p>
            <p style={{marginTop:-6}}>a strong interest in typography and editorial design.</p>
            <p ><em>Contact:</em></p>
            <p style={{marginTop:-6}}>kantranworks@gmail.com</p>
            <p style={{marginTop:-6}}>+84.977643432</p>
            <p style={{marginTop:-6}}>@k.antran</p>
          </div>
      </div>

      {/* Phần 2: Footer text */}
      <div className="grid grid-cols-2 gap-0 py-4">
        <div className='pb-[290px]'></div>
        <div>
          <p>© 2024 All Rights served Tran Khanh An</p>
          <p>Last Update: 25.07.2025</p>
        </div>
      </div>

      {/* Phần 3: Image */}
      <div className="ml-2 mr-2 mb-2">
        <img src={profile} alt="Img" className="w-full h-auto block" />
      </div>
    </div>
  );
}