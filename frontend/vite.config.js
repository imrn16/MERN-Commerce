import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: '0.0.0.0', // Expose the server to all network interfaces
		port: 5173, // You can keep this or change it if needed
		proxy: {
			"/api/": "https://mern-commerce-7rnp.onrender.com",
			"/uploads/": "https://mern-commerce-7rnp.onrender.com",
		},
		// proxy: {
		// 	"/api/": "http://localhost:5001",
		// 	"/uploads/": "http://localhost:5001",
		// },
	},
});