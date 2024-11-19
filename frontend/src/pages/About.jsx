import React from "react";
import { useEffect, useState } from "react";

function About() {
	const [pageLoad, setPageLoad] = useState(false);

	useEffect(() => {
		setPageLoad(true);
		window.scrollTo(0, 0);
	}, []);

	const description1 = `At Focus, we’re dedicated to helping photography enthusiasts and professionals find the best camera equipment for exceptional image quality. Our carefully selected range features top-tier brands for the performance and durability you need to capture every moment.`;

	const description2 = `We make it easy to find the right gear with a user-friendly website and expert advice tailored to your needs, whether you're a pro or just starting out.`;

	const description3 = `Our friendly support team is always here to guide you and ensure a smooth, satisfying experience from start to finish. Your satisfaction is our top priority.`;

	return (
		<>
			<div className="flex items-center flex-col">
				<div
					className={`flex flex-col items-center justify-center align-middle  w-full bg-reds-900 transition-all duration-1000 ${
						pageLoad ? "opacity-100 blur-none" : "opacity-0 blur-sm"
					}`}>
					<h1 className="flex text-[4rem] font-semibold py-8">About Us</h1>
				</div>

				<div
					className={`flex flex-col w-full max-w-[100rem] bg-stone-900s bg-stone-900 justify-center items-center align-middle md:aspect-[5/2]  rounded-3xl backdrop-blur-xl bg-opacity-40 transition-all duration-1000 ${
						pageLoad ? " delay-500 opacity-100 blur-none " : "opacity-0 blur-sm"
					}`}>
					<div className="flex flex-col ">
						<div className="flex md:flex-row flex-col bg-greens-900 h-full">
							<div className="flex md:flex-row flex-col md:w-1/2 md:p-[4vw] p-[8vw] aspect-square bg-blues-900 ">
								<img
									src={`/images/cameras.jpg`}
									className="object-cover rounded-2xl aspect-square "
								/>
							</div>
							<div className="flex flex-row  md:w-1/2 p-[6vw] md:p-0 md:mb-0 mb-20 lg:py-20 md:pt-10 md:pb-20 sm:py-2 pr-6 font-medium xl:text-2xl lg:text-xl md:text-lg text-lg text-center md:text-left items-center  align-middle justify-center bg-reds-900 h-auto text-stone-400 md:mr-8 bg-red-900s ">
								<div className="flex flex-col bg-reds-400 h-full ">
									<span className="mb-8">{description1}</span>
									<span className="mb-8">{description2}</span>
									<span className="mb-">{description3}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
