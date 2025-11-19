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
      },
      fontSize: {
        // 🎯 Zoom-safe text sizes (dùng rem thay px)
        'display-lg': ['2.5rem', { lineHeight: '1.2' }],      // ~40px
        'display-md': ['1.8rem', { lineHeight: '1.3' }],      // ~28.8px
        'display-sm': ['1.4rem', { lineHeight: '1.4' }],      // ~22.4px
        'body-lg': ['1rem', { lineHeight: '1.5' }],           // ~16px / 14.4px equivalent
        'body-md': ['0.9rem', { lineHeight: '1.5' }],         // ~14.4px (chính xác)
        'body-sm': ['0.75rem', { lineHeight: '1.5' }],        // ~12px
        'caption-md': ['0.675rem', { lineHeight: '1.4' }],    // ~10.8px (chính xác)
        'caption-sm': ['0.563rem', { lineHeight: '1.4' }],    // ~9px (chính xác)
      },
      spacing: {
        // 🎯 Zoom-safe spacing (dùng rem)
        'spacing-xs': '0.25rem',   // ~4px
        'spacing-sm': '0.5rem',    // ~8px (= m-2)
        'spacing-md': '1rem',      // ~16px (= m-4)
        'spacing-lg': '1.5rem',    // ~24px (= m-6)
        'spacing-xl': '2rem',      // ~32px (= m-8)
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