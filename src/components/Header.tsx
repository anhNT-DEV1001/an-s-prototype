import  { useState } from 'react';

export default function Header() {
  // 1. Dùng state để lưu link đang active, mặc định là 'home'
  const [activeLink, setActiveLink] = useState('home');

  // 2. Tạo hàm helper để quyết định class
  const getLinkClass = (linkName : any) => {
    const baseClass = "font-display";
    
    // Nếu link này đang active, chỉ trả về class cơ bản
    if (activeLink === linkName) {
      return baseClass;
    }
    
    // Nếu không, trả về class cơ bản + class 'text-noActive'
    return `${baseClass} text-noActive`;
  };

  return (
    <header className="pt-2 pl-2 sticky top-0 z-50 bg-primary">
      <ul className="flex gap-4">
        {/* 3. Dùng hàm helper và thêm onClick cho mỗi <li> */}
        <li
          className={getLinkClass('home')}
          onClick={() => setActiveLink('home')}
        >
          <a href="#home">Home</a>
        </li>
        <li
          className={`${getLinkClass('archive')} cursor-pointer`} // Thêm cursor-pointer
          onClick={() => setActiveLink('archive')}
        >
          Archive
        </li>
        <li
          className={getLinkClass('profile')}
          onClick={() => setActiveLink('profile')}
        >
          <a href="#profile">Profile</a>
        </li>
      </ul>
      <hr className="pl-0 color-white" />
    </header>
  );
}