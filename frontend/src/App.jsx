import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Background from "./components/Background";
import NaviDecoration from "./components/NaviDecoration";

const App = () => {
	return (
		<>
		<div className="overflow-x-hidden flex flex-col min-h-screen">
			<Background />

			<NaviDecoration />

			<div className="lg:mx-[6rem] xl:mx-[10rem] md:mx-[1rem] mx-[1rem] flex flex-col text-stone-300 ">
				<ToastContainer />
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
