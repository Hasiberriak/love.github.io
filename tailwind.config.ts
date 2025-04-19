// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // ให้ครอบคลุมทุกไฟล์ในหน้า
    './components/**/*.{js,ts,jsx,tsx}', // ถ้ามีการใช้งานใน components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
