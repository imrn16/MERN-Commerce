import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";
import { FaStar } from "react-icons/fa";
import Ratings from "./Ratings";
import { PiPlusCircle } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";

const Product = ({ product }) => {
	return (
		<Link to={`/product/${product._id}`}>

			{/* <div className="flex flex-wrap gap-4 justify-center">
				<div className="flex-1 min-w-[14rem] max-w-[20rem] h-48 bg-blue-300">Component 1</div>
				<div className="flex-1 min-w-[14rem] max-w-[20rem] h-48 bg-green-300">Component 2</div>
				<div className="flex-1 min-w-[14rem] max-w-[20rem] h-48 bg-red-300">Component 3</div>
				<div className="flex-1 min-w-[14rem] max-w-[20rem] h-48 bg-yellow-300">Component 4</div>
			</div> */}

			<div
				style={{
					// width: `clamp(14rem, 22vw, 20rem)`,
				}}
				className="p-4 bg-stone-600 hover:bg-stones-500 active:bg-opacity-40 rounded-2xl aspect-[10/12] backdrop-blur-lg bg-opacity-20">
				<div className="relative w-full h-full object-cover bg-reds-900">
					<img
						src={product.image}
						alt={product.name}
						className="w-[26rem] h-1/2 object-cover rounded-xl  "
					/>
					<HeartIcon product={product} />

					<div className="py-2 h-1/2 bg-greens-900">
						<div className="bg-reds-900 bg-oranges-900 h-5/6 overflow-hidden">
							<h2 className="flex justify-between items-center">
								<div style={{
					fontSize: `clamp(1.25rem, 1vw, 1.5rem)`,
				}}className=" font-semibold">{product.name}</div>
								<div className="flex flex-row justify-center items-center text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full bg-stone-500 dark:text-stone-300 py-1 bg-opacity-40">
									{/* <Ratings
                  value={product.rating}
                  text={`(${product.numReviews})`}
                /> */}

									<FaStar className="flex flex-row mr-1" />
									{product.rating}
								</div>
							</h2>
							<span className="text-stone-400 text-[1vw] ">{product.description}</span>
						</div>
						<div className="bg-reds-900 flex h-1/6 font-bold text-xl justify-between">
							<div>$ {product.price}</div>
							<div className="h-8 w-8 bg-stone-500 rounded-full flex justify-center items-center align-middle hover:bg-opacity-60 bg-opacity-30">
								<FaPlus size={14} />
								{/* <div className="flex justify-center items-center align-middle font-light">+</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Product;







// import React from "react";
// import { useRef, useEffect, useState } from "react";
// import Ratings from "./Ratings";

// import { Link } from "react-router-dom";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/features/cart/cartSlice";
// import { toast } from "react-toastify";
// import HeartIcon from "./HeartIcon";


// const Product = ({p}) => {
// 	const dispatch = useDispatch();

// 	const addToCartHandler = (product, qty) => {
// 		dispatch(addToCart({ ...product, qty }));
// 		toast.success("Item added successfully", {
// 			position: toast.POSITION.TOP_RIGHT,
// 			autoClose: 2000,
// 		});
// 	};



// 	const containerRef = useRef(null);
// 	const [componentWidth, setComponentWidth] = useState(0);

// 	const calculateWidth = () => {
// 		if (containerRef.current) {
// 			const containerWidth = containerRef.current.offsetWidth;
// 			const newWidth = containerWidth * 1;
// 			setComponentWidth(newWidth);
// 		}
// 	};

// 	useEffect(() => {
// 		calculateWidth();
// 		window.addEventListener("resize", calculateWidth);
// 		return () => window.removeEventListener("resize", calculateWidth);
// 	}, []);

// 	return (
// 		<Link to={`/product/${p._id}`}>
// 			<div
// 			style={{
// 				padding: `${componentWidth * 0.05}px`,
// 			}}
// 			ref={containerRef}
// 			className="bg-stone-900 p-[min(1vw,1vh)] aspect-[3/4] rounded-2xl">
// 			<div className="h-1/2 bg-blue-900 rounded-2xl">
// 			<img
// 						src={p.image}
// 						alt={p.name}
// 						className="w-full h-1/2 object-cover rounded-xl  "
// 					/>
// 					</div>

// 			<div className="h-1/2 bg-greens-900">

// 				<div 
				
// 				style={{
// 					fontSize: `${componentWidth*.08}px`
// 				}}
// 				className="h-1/4 bg-yellow-900s overflow-hidden rounded-xl flex items-center justify-center font-bold px-2">
// 				<p className="truncate">this is title text and its really long and whatever </p>
// 				</div>

// 				<div 
				
// 				style={{
// 					fontSize: `${componentWidth*.08}px`
// 				}}

// 				className="h-1/4 bg-yellow-800s text-center flex items-center justify-center">
// 				<Ratings value={4}/>
// 				</div>

// 				<div 
				
// 				style={{
// 					fontSize: `${componentWidth*.08}px`
// 				}}

// 				className="h-1/4 bg-yellow-700s rounded-xl text-center flex items-center justify-center font-bold">
// 				<span>$59.99</span>
// 				</div>


// 				<div 
				
// 				style={{
// 					fontSize: `${componentWidth*.08}px`
// 				}}

// 				className="h-1/4 bg-yellow-600s rounded-xl text-center flex items-center justify-center font-bold">Add to Cart
// 				<AiOutlineShoppingCart style={{
// 					fontSize: `${componentWidth*.08}px`
// 				}} className="ml-2"/></div>
// 			</div>
// 			</div>
// 		</Link>
// 	);
// }

// export default Product;
