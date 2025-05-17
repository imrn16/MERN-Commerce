import React, { useState } from "react";
import Slider from "react-slick";
import "./SliderCarousel.css";
import { useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useGetTopProductsQuery } from "../redux/api/productApiSlice";
import Loader from "./Loader";

function SliderCarousel() {
	const { data, isLoading, error } = useGetTopProductsQuery();

	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "10%", // 10% padding on each side
		slidesToShow: 1,
		autoplay: true,
		speed: 1000,
		dots: true,
		arrows: false,
		autoplaySpeed: 5000,
	};

	let sliderRef = useRef(null);
	const next = () => {
		sliderRef.slickNext();
	};
	const previous = () => {
		sliderRef.slickPrev();
	};

	const values = [
		{
			title: `Hasselblad`,
			img: `/images/brands/hasselblad.jpg`,
			logo: `/images/brands/hasselblad-logo.png`,
		},
		{
			title: `Leica`,
			img: `/images/brands/leica.jpg`,
			logo: `/images/brands/leica-logo.png`,
		},
		{
			title: `Sony`,
			img: `/images/brands/sony.jpg`,
			logo: `/images/brands/sony-logo.png`,
		},
		{
			title: `Canon`,
			img: `/images/brands/canon.jpg`,
			logo: `/images/brands/canon-logo.png`,
		},
		// { title: `Fujifilm`, img: `/images/brands/hasselblad.jpg` },
	];

	function SlideElement({ title, img }) {
		const [loaded, setLoaded] = useState(false);

		return (
			<>
				<div className="md:h-[32vh] h-[50vh] md:max-h-[30rem] max-h-[30rem] min-h-[20rem] rounded-xl bg-reds-900 mx-2 md:mx-4 ">
					{!loaded && (
						<div>
							<Loader />
						</div>
					)}
					<img
						src={img}
						alt={title}
						onLoad={() => {
							setLoaded(true);
							console.log("loaded: ", loaded);
						}}
						onError={() => setLoaded(true)}
						className={`rounded-3xl h-full w-full object-cover transition-opacity duration-500 `}
						//${loaded ? "opacity-100" : "opacity-0"}
					/>
				</div>
			</>
		);
	}

	return (
		<div className="max-w-[70rem] lg:bg-stone-800 py-10 md:px-10 rounded-3xl lg:backdrop-blur-lg lg:bg-opacity-20 mb-10 ml-auto mr-auto">
			<div className="slider-container md:mb-4 mb-8 bg-blues-900 max-w-[70rem] fade-mask ">
				<div className=""></div>
				<Slider
					ref={(slider) => {
						sliderRef = slider;
					}}
					{...settings}>
					{values.map((indiv, index) => (
						<div
							key={index}
							className="bg-red-900s">
							<SlideElement
								key={index}
								title={indiv.title}
								img={isLoading ? <Loader /> : indiv.img}
								className="rounded-xl mx-2"
							/>
							<div
								// style={{
								// 	zIndex: 999,
								// 	bottom: 0,
								// 	left: 0,
								// 	position: "absolute",
								// }}
								className="flex flex-row mt-[-5rem] 'ml-[1rem] mb-[3rem] bg-red-900s z-1000 ">
								{/* <div className="w-1/3 bg-green-900"></div> */}
								<div className="w-[10rem] bg-greens-600 h-[3rem] items-center align-middle flex ml-auto mr-auto">
									<img
										className=" font-semibold text-3xl  object-fit"
										src={`${indiv.logo}`}></img>
								</div>
								{/* <div className="w-1/3 bg-green-400"></div> */}
							</div>
						</div>
					))}
				</Slider>
			</div>
			<div
				style={{ textAlign: "center" }}
				className="bg-reds-900 flex justify-centers justify-end">
				<button
					className="flex justify-center items-center text-center align-middle button bg-stone-700 rounded-full h-[max(3vw,3vh)] w-[max(3vw,3vh)] min-w-[3rem] min-h-[3rem] backdrop-blur-lg bg-opacity-20"
					onClick={previous}>
					<IoIosArrowBack className="flex justify-center items-center text-center align-middle" />
				</button>
				<button
					className="flex justify-center items-center button ml-4 bg-stone-700 rounded-full h-[max(3vw,3vh)] w-[max(3vw,3vh)] min-w-[3rem] min-h-[3rem] backdrop-blur-lg bg-opacity-20"
					onClick={next}>
					<IoIosArrowForward />
				</button>
			</div>
		</div>
	);
}

export default SliderCarousel;
