/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
	  extend: {
		  colors: {
			  "soft-orange": "#FF7F00",
			  "soft-red": "#FF1A1A",
			  "off-white": "#FFFFFF",
			  "grayish-blue": "#E8CCD7",
			  "dark-grayish-blue": "#3D3D3D",
			  "very-dark-blue": "#0A0A0A",
		  }
	  },
  },
  plugins: [],
};
