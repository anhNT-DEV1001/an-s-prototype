import profile from '../assets/imgs/profile/kantran.svg';
export default function Profile() {
  return (
    // THAY ĐỔI NẰM Ở ĐÂY
    <div className="flex flex-col w-full h-[calc(99vh-4rem)] overflow-hidden mt-10" id="profile">
      {/* Phần 1: Info */}
      <div className="grid grid-cols-2 gap-0 flex-none">
        <div></div>
        <div>
          <p><em>About:</em></p>
          <p className="-mt-1">An Tran (he/him) is a graphic designer currently based in Hanoi, Vietnam, he shows</p>
          <p className="-mt-1">a strong interest in typography and editorial design.</p>

          <p><em>Contact:</em></p>
          <p className="-mt-1">kantranworks@gmail.com</p>
          <p className="-mt-1">+84.977643432</p>
          <p className="-mt-1">@k.antran</p>
        </div>
      </div>

      {/* Spacer 1 – cân khoảng trắng */}
      <div className="flex-grow"></div>

      {/* Phần 2: Footer text */}
      <div className="grid grid-cols-2 gap-0 flex-none">
        <div></div>
        <div>
          <p>© 2024 All Rights served Tran Khanh An</p>
          <p>Last Update: 25.07.2025</p>
        </div>
      </div>

      {/* Spacer 2 – cân khoảng trắng */}
      <div className="flex-grow"></div>

      {/* Phần 3: Image */}
      <div className="flex-none ml-2 mr-2 mb-2">
        <img src={profile} alt="Img" className="w-full h-auto block" />
      </div>
    </div>
  );
}