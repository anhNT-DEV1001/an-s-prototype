/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#141414',
        'noActive' : '#CDCDCD'
      }
    },
    fontFamily: {
        // 'sans' sẽ là font mặc định cho toàn bộ trang
        'sans': [
          'Redaction', // Tên font bạn đã khai báo trong CSS
          ...defaultTheme.fontFamily.sans // Thêm các font dự phòng
        ],

        // Tạo một lớp tiện ích mới cho font tiêu đề, ví dụ: 'font-display'
        'display': [
          'DrukWide', // Tên font tiêu đề đã khai báo trong CSS
          'sans-serif' // Font dự phòng
        ]
      },
  },
  plugins: [],
}