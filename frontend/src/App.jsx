import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Background from "./components/Background";
import NaviDecoration from "./components/NaviDecoration";
import { useEffect } from "react";

const App = () => {
	// useEffect(() => {
	// 	fetch(`${import.meta.env.VITE_API_URL}/api/products`)
	// 		.then((response) => response.json())
	// 		.then((data) => setProducts(data))
	// 		.catch((error) => console.error("Error fetching products:", error));
	// }, []);

	return (
		<>
			<div className="overflow-x-hidden flex flex-col min-h-screen">
				<Background />

				<NaviDecoration />

				<div className="lg:mx-[6rem] xl:mx-[10rem] md:mx-[1rem] mx-[1rem] flex flex-col text-stone-300 ">
					<ToastContainer
						position="bottom-center"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeButton={false}
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						toastStyle={{
							backgroundColor: "#292524",
							color: "",
							fontSize: "16px",
							borderRadius: "12px",
							padding: "12px 24px",
							margin: "12px 24px",
							backdropFilter: "blur(20px)",
							WebkitBackdropFilter: "blur(20px)",
							opacity: "1",
						}}
					/>
					<Navigation className="" />
					<main className="pt-32">
						<Outlet />
					</main>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default App;
