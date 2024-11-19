import { useGetTopProductsQuery } from "../redux/api/productApiSlice";
import Loader from "./Loader";
import SmallProduct from "../pages/Products/SmallProduct";
import ProductCarousel from "../pages/Products/ProductCarousel";
import { useEffect, useState } from "react";

const Header = () => {
	const { data, isLoading, error } = useGetTopProductsQuery();
  const [pageLoad, setPageLoad] = useState(false)

  useEffect(() => {
    setPageLoad(true)
    window.scrollTo(0, 0);

  }, [])

	if (isLoading) {
		// return <Loader />;
	}

	if (error) {
		return <h1>ERROR</h1>;
	}

	return (
		<>
			{/* <div
				style={{ zIndex: 0, marginLeft: "-10rem", marginRight: "-10rem", paddingTop: "-10rem" }}
				className="w-screen ">
				<img
					src="/images/sunset-desert.jpg"
					alt="desert"
					className="object-fill w-screen h-full backdrop-blur-xl "
					style={{ filter: "blur(0px)" }} // Base blur level
				/>

			</div> */}

			{/* <div
				style={{
					zIndex: 1,
					marginLeft: "-10rem",
					marginRight: "-10rem",
					paddingTop: "-8rem",
					opacity: 0.999,
					position: "relative", // Ensure relative positioning for pseudo-elements
				}}
				className="w-screen h-[100rem]">
				<img
					src="/images/desert.jpg"
					alt="desert"
					className="object-fill w-full h-full transform rotate-180"
					style={{ filter: "blur(50px)" }} // Base blur level
				/>
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						pointerEvents: "none", // Prevent interference with image interaction
						filter: "blur(200px)", // Stronger blur for gradient effect
					}}></div>
			</div>

			<div className="relative h-screen ">
				{" "}
				<div className="h-[150rem] w-full relative">
					{" "}
					<img
						src="/images/desert.jpg"
						alt="desert"
						className="object-cover w-full h-full transform rotate-180"
						style={{ filter: "blur(0px)" }}
					/>{" "}
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: ` linear-gradient( to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 25%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0.9) 75%, rgba(0, 0, 0, 1) 100% )`,
							backdropFilter: "blur(20px)",
							WebkitBackdropFilter: "blur(20px)",
						}}
					/>{" "}
				</div>{" "}
			</div> */}



{/* 
			<div className="flex flex-row rounded-2xl bg-neutral-800 h-[32rem]">
				<div className="flex flex-row w-1/3 ">
					<span className="flex ml-auto mr-auto text-3xl justify-center items-center align-middle font-bold">Latest Arrivals</span>
				</div>
				<div className="flex w-2/3 justify-center align-middle items-center bg-reds-900">
					<ProductCarousel />
				</div>
			</div> */}

    <div className="light-text-stone-400">
{/* 
    <h1 
    
    style={{
      //fontSize: `clamp(5rem, 20vh, 16rem)`
    }}
    className={` lg:text-[20vw] md:text-[18vw] text-[20vw] select-none font-bold text-white text-opacity-80 bg-opacity-0s bg-red-900s transition-all duration-1000 text-max-vhs ${pageLoad ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24 blur-sm'}`}>Picture</h1>
    <br></br>
    <h1 className={` lg:text-[20vw] md:text-[18vw] text-[20vw] bg-green-900s  select-none font-bold text-white text-opacity-80 flex  justify-self-end right text-right transition-all duration-1000 ${pageLoad ? 'delay-300 opacity-100 translate-x-0' : 'opacity-0 translate-x-24 blur-sm'}`}>Perfect</h1>
 */}

    <h1
  style={{
    fontSize: `min(20vw, 20vh)`  
  }}
  className={`select-none font-bold text-white text-opacity-90 bg-opacity-0 transition-all duration-1000 ${pageLoad ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24 blur-sm'}`}
>
  Picture
</h1>


<h1
  style={{
    fontSize: `min(20vw, 20vh)`,
	WebkitJustifyContent: `end`  
  }}
  className={`bg-greens-900 select-none font-bold text-white text-opacity-90 flex fade-masks justify-self-end right text-right transition-all duration-1000 ${pageLoad ? 'delay-300 opacity-100 translate-x-0' : 'opacity-0 translate-x-24 blur-sm'}`}
>
  Perfect
</h1>


    <h2
    style={{
      fontSize: `min(5vw, 5vh)`,
    }}
     className={` mt-[8vh] select-none text-3xls text-center text-[5vw]s transition-all  duration-1000 ${pageLoad ? 'delay-500 opacity-100 translate-y-0' : 'opacity-0 translate-y-16 blur-sm'} mbs-[1000px] mb-[2rem]`}>Capture once-in-a-lifetime shots wherever you are with our state of the art curated line of photography hardware</h2>

    </div>


		</>
	);
};

export default Header;
