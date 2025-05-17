import React from "react";
import Slider from "react-slick";
import "./SliderCarousel.css";
import { useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function FadeCarousel({ label, category }) {
	const settings = {
		className: "center",
		//centerMode: true,
		infinite: true,
		fade: true,
		centerPadding: "5%", // 10% padding on each side
		slidesToShow: 1,
		autoplay: true,
		speed: 1000,
		//dots: true,
		arrows: false,
		autoplaySpeed: Math.floor(Math.random() * (6000 - 5000 + 1)) + 5000,
	};

	const { categories, products, checked, radio } = useSelector((state) => state.shop);

	let sliderRef = useRef(null);
	const next = () => {
		sliderRef.slickNext();
	};
	const previous = () => {
		sliderRef.slickPrev();
	};

	const values = [
		{ title: `Hasselblad`, img: `/images/brands/hasselblad.jpg` },
		{ title: `Leica`, img: `/images/brands/leica.jpg` },
		{ title: `Sony`, img: `/images/brands/sony.jpg` },
		{ title: `Canon`, img: `/images/brands/canon.jpg` },
		// { title: `Fujifilm`, img: `/images/brands/hasselblad.jpg` },
	];

	const categoryPhoto = ({ label }) => {
		const section = label.toLowerCase();

		if (section == "cameras") {
			return [
				{ title: `1`, img: `/images/${section}/1.jpg` },
				{ title: `2`, img: `/images/${section}/2.jpg` },
				{ title: `3`, img: `/images/${section}/3.jpg` },
				{ title: `4`, img: `/images/${section}/4.jpg` },
				{ title: `5`, img: `/images/${section}/5.jpg` },
			];
		} else if (section == "lenses") {
			return [
				{ title: `1`, img: `/images/${section}/1.jpg` },
				{ title: `2`, img: `/images/${section}/2.jpg` },
				{ title: `3`, img: `/images/${section}/3.jpg` },
				{ title: `4`, img: `/images/${section}/4.jpg` },
			];
		} else {
			return [
				{ title: `1`, img: `/images/${section}/1.jpg` },
				{ title: `2`, img: `/images/${section}/2.jpg` },
			];
		}
	};

	const cameraList = categoryPhoto({ label });

	function SlideElement({ title, img }) {
		const [loaded, setLoaded] = useState(false);

		return (
			<div className="md:h-[32vh] h-[50vh] md:max-h-[30rem] max-h-[30rem] min-h-[20rem] rounded-xl bg-reds-900 mx-2 md:mx-4 ">
				{!loaded && (
					<div className="absolute inset-0 flex justify-center items-center bg-black/20 z-10 rounded-3xl">
						<Loader />
					</div>
				)}
				<img
					src={img}
					alt={title}
					onLoad={() => setLoaded(true)}
					onError={() => setLoaded(true)}
					className={`rounded-3xl h-full w-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
				/>
			</div>
		);
	}

	return (
		<Link to={"/shop"}>
			<div className="max-w-[70rem] bg-stone-800 py-6 md:px-2 rounded-3xl backdrop-blur-lg bg-opacity-30 mb-10 ml-auto mr-auto">
				{console.log(`Categories: `, categories)}
				{console.log(`Products: `, products)}
				<div className="slider-container md:mb-4 mb-8 bg-blues-900 max-w-[70rem] fade-masks">
					<Slider
						ref={(slider) => {
							sliderRef = slider;
						}}
						{...settings}>
						{cameraList.map((indiv, index) => (
							<div key={index}>
								<SlideElement
									key={index}
									title={indiv.title}
									img={indiv.img}
									className="rounded-xl mx-2"
								/>
							</div>
						))}
						{/* {products
						.filter((c) => c.category === category) // Filter products by category
						.map((indiv, index) => (
							<div key={index} className=' flex bg-redl-900'>
								<SlideElement
									key={index}
									title={indiv.title}
									img={indiv.image}
									className="rounded-xl"
								/>
							</div>
						))} */}
					</Slider>
					<div className="flex justify-center mt-8">
						<span className="ml-4 font-semibold text-3xl text-stone-400">{label}</span>
					</div>
				</div>
				{/* <div
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
			</div> */}
			</div>
		</Link>
	);
}

export default FadeCarousel;
