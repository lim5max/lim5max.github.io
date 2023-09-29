/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["*.{html,js}"],
	theme: {
		extend: {},
		colors: {
			white: "#F5F5F5",
			black: "#252525",
			yellow: "#F8BE18",
			light_gray: "#F8F8F5",
			dark_gray: "#A8A8A8",
			background: "#FFFFFF",
			lines: "#D3D3D3",
			form_text: "#636363",
			form_lines: "#4F4F4F",
		},
		screens: {
			sm: "640px",
			"2xl": "1520px",
		},
	},
	plugins: [],
};
