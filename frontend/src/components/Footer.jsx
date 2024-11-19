import React from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa6";
import { RxLaptop } from "react-icons/rx";
import { Link } from "react-router-dom";
import { MdOutlineCamera } from "react-icons/md";
import "./Footer.css";

function Footer() {
	return (
		<div 
    
    // style={{
		// 					backgroundImage: ` linear-gradient( to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.6) 80%, rgba(0, 0, 0, 0.8) 90%, rgba(0, 0, 0, 1) 100% )`,
		// 					//backdropFilter: "blur(20px)",
		// 					//WebkitBackdropFilter: "blur(20px)",
		// 				}}
    className="flex flex-col mt-24 bg-reds-900 pt-20 footer-gradients">
			<div className="flex md:flex-row flex-col h-54 bg-reds-900 mb-10">




				<div className="flex flex-col md:flex-row md:w-1/3 bg-reds-900 justify-center align-middle items-center">
					<div className="flex flex-col bg-purples-400 w-full h-40 justify-center align-middle items-center">
						<div className="flex flex-col justify-center mb-4 ">
							<FaExchangeAlt
								className="text-stone-400"
								size={`40px`}
							/>
						</div>
						<div className="flex flex-col items-center ">
							<span className="text-xl">Easy Exchange</span>
							<span className="text-sm md:text-xs lg:text-sm text-stone-500 text-center">Industry-leading free exchange policy</span>
						</div>
					</div>
				</div>



				<div className="flex flex-col md:flex-row md:w-1/3 bg-blues-900 justify-center align-middle items-center">
					<div className="flex flex-col bg-purples-400 w-full h-40 justify-center align-middle items-center">
						<div className="flex flex-col justify-center mb-4 ">
							<FaRegCircleCheck
								className="text-stone-400"
								size={`40px`}
							/>
						</div>
						<div className="flex flex-col items-center ">
							<span className="text-xl">30 Day Return Policy</span>
							<span className="text-sm md:text-xs lg:text-sm text-stone-500 text-center">Not happy? Return for free within 30 days</span>
						</div>
					</div>
				</div>



				<div className="flex flex-col md:flex-row md:w-1/3 bg-greens-900 justify-center align-middle items-center">
					<div className="flex flex-col bg-purples-400 w-full h-40 justify-center align-middle items-center">
						<div className="flex flex-col justify-center mb-4 ">
							<FaHeadset
								className="text-stone-400"
								size={`40px`}
							/>
						</div>
						<div className="flex flex-col items-center bg-stones-900 ">
							<span className="text-xl">24/7 Customer Support</span>
							<span className="text-sm md:text-xs lg:text-sm text-stone-500">Call us any time, any day</span>
						</div>
					</div>
				</div>
			</div>




			<div className="flex flex-col justify-center items-center bg-yellows-500 flex h-48s w-full mb-10">
				<div className="flex flex-col justify-center items-center">
					<span className="flex flex-col md:text-3xl text-2xl font-semibold mb-2 ">Subscribe Now & Save 15% </span>
					<span className="flex flex-col text-stone-400 mb-2 w-[90vw] justify-center items-center text-center">Save 15% on your first order if you subscribe with us below</span>
					<div className=" flex flex-row m-2 bg-stone-500 rounded-2xl max-w-[35rem] w-[95vw] h-12">
						<input
            type="email"
							placeholder="Enter Your Email"
							className=" flex flex-row w-full bg-reds-900 bg-transparent outline-none caret-stone-300 text-stone-300  pl-4 border-stone-300 placeholder:text-stone-300 placeholder:text-base md:placeholder:text-base"></input>
						<button className=" flex flex-row bg-stone-600 h-full rounded-r-2xl p-2 px-4 active:bg-stone-800 text-base justify-end  items-center">SUBSCRIBE</button>
					</div>
				</div>
			</div>



			<div className="flex flex-col md:flex-row h-48 ">
				<div className="flex flex-col md:w-1/2 bg-reds-900">
					<div className="flex flex-col h-1/3  bg-grays-500">
						<Link
							to="/"
							className="flex items-center bg-reds-900 ">
							<div className="flex flex-row text-xl font-extralight">
								<MdOutlineCamera
									className="mr-2"
									size={`30`}
								/>{" "}
								F O C U S 
							</div>
						</Link>
					</div>

					<div className="flex flex-col md:w-3/4 mt-4">
						<span className="flex flex-col text-xs">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy
							text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						</span>
					</div>
				</div>


				
				<div className="flex flex-row md:flex-row md:mt-0 mt-4 md:w-1/2 bg-blues-900">
					<div className="flex flex-col w-1/2 bg-greens-900">
						<div className="flex flex-col h-1/3">
							<span className="text-2xl font-semibold">COMPANY</span>
						</div>

						<div className="flex flex-col">
							<span>Home</span>
							<span>About Us</span>
							<span>Delivery</span>
							<span>Privacy Policy</span>
						</div>
					</div>
          <div className="flex flex-col w-1/2 bg-purples-900">
						<div className="flex flex-col h-1/3">
							<span className="text-2xl font-semibold">GET IN TOUCH</span>
						</div>

						<div className="flex flex-col">
							<span>+1-000-000-0000</span>
							<span>www.imranmohiuddin.com</span>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col md:mt-0 mt-32">
			<hr className="border-stone-500 mb-10"></hr>
			<div className="bg-yellows-500 flex h- w-full mb-6 justify-center text-xs">
				<span>Copyright 2024 @ imranmohiuddin.com - All Right Reserved.</span>
			</div>
			</div>
		</div>
	);
}

export default Footer;
