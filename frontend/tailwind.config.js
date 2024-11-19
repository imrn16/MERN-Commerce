/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				// blurEffect: {
				// 	"0%": { filter: "blur(3px)" },
				// 	"20%": { filter: "blur(0px)" },
				// 	"40%": { filter: "blur(3px)" }, // Quick blur
				// 	"100%": { filter: "blur(0px)" }, // Smooth unblur
				// },
				blurEffect: {
					"0%": { filter: "blur(0px)" },
					"10%": { filter: "blur(3px)" }, // Quick blur
					"100%": { filter: "blur(0px)" }, // Smooth unblur
				},
				// rotateMe: {
				// 	"0%": { transform: "rotate(0deg)" },
				// 	"20%": { transform: "rotate(30deg)" },
				// 	"40%": { transform: "rotate(0deg)" },
				// 	"100%": { transform: "rotate(-180deg)" },
				// },
				rotateMe: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(-180deg)" },
				},
			},
			animation: {
				blurEffect: "blurEffect 1.1s ease-in-out",
				rotateMe: 'rotateMe 1.1s'
			},
			fontSize: {
				"max-vh": "calc(20vh + 10px)", // Customize as needed
			},
			focus: {
				ring: 0,
			},
		},
	},
	plugins: [],
};
