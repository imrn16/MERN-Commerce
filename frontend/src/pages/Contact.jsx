import React from "react";
import { useEffect, useState } from "react";

function Contact() {
	const [pageLoad, setPageLoad] = useState(false);

	useEffect(() => {
		setPageLoad(true);
		window.scrollTo(0, 0);
	}, []);

	const description1 = `Main Office`;

	const street = `100 W Maple St.`;
	const area = `Austin, TX, 78652`;

	const phone = `1-414-218-4879`;
	const email = `imrnm12@gmail.com`;

	const description2 = `Careers at Focus`;

	const description3 = `Learn more about our teams and job openings.`;

	return (
		<>
			<div className="flex items-center flex-col">
				<div
					className={`flex flex-col items-center justify-center align-middle  w-full bg-reds-900 transition-all duration-1000 ${
						pageLoad ? "opacity-100 blur-none" : "opacity-0 blur-sm"
					}`}>
					<h1 className="flex text-[4rem] font-semibold py-8">Contact Us</h1>
				</div>

				<div
					className={`flex flex-col w-full max-w-[100rem] bg-stone-900s bg-stone-900 justify-center items-center align-middle md:aspect-[5/2]  rounded-3xl backdrop-blur-xl bg-opacity-40 transition-all duration-1000 ${
						pageLoad ? " delay-500 opacity-100 blur-none " : "opacity-0 blur-sm"
					}`}>
					<div className="flex flex-col ">
						<div className="flex md:flex-row-reverse flex-col bg-greens-900 h-full">
							<div className="flex md:flex-row-reverse flex-col md:w-1/2 md:p-[4vw] p-[8vw] aspect-square bg-blues-900 ">
								<img
									src={`/images/austin.avif`}
									className="object-cover rounded-2xl aspect-square "
								/>
							</div>
							<div className="flex flex-row-reverse  md:w-1/2 p-[6vw] md:p-0 md:mb-0 mb-20 lg:py-20 md:pt-10 md:pb-20 sm:py-2 pr-6 font-medium xl:text-2xl lg:text-xl md:text-lg text-lg text-center md:text-left items-center  align-middle justify-center bg-reds-900 h-auto text-stone-400 md:ml-8 bg-red-900s ">
								<div className="flex flex-col bg-reds-400 h-full ">
									<span className="mb-4">{description1}</span>

									<span className="mb-">{street}</span>
									<span className="mb-8">{area}</span>
									<hr className="mt-[-1rem] mb-[1rem] border-stone-400 opacity-50"></hr>
									<span className="mb-">{phone}</span>
									<span className="mb-8">{email}</span>
									<hr className="mt-[-1rem] mb-[1rem] border-stone-400 opacity-50"></hr>
									<span className="mb-">{description2}</span>
									<span className="mb-4">{description3}</span>
									<button className="mt-auto w-full rounded-3xl bg-stone-800 px-4 py-1 bg-opacity-40">Learn More</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;
