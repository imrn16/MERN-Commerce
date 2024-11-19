import React from "react";
import { useRef, useEffect, useState } from "react";
import Ratings from "./Ratings";

import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { toast } from "react-toastify";
import HeartIcon from "./HeartIcon";

const ProductCard = ({ p }) => {
	const dispatch = useDispatch();

	const addToCartHandler = (product, qty) => {
		dispatch(addToCart({ ...product, qty }));
		toast.success("Item added successfully", {
			position: toast.POSITION.BOTTOM_CENTER,
			autoClose: 2000,
		});
	};

	const containerRef = useRef(null);
	const [componentWidth, setComponentWidth] = useState(0);

	const calculateWidth = () => {
		if (containerRef.current) {
			const containerWidth = containerRef.current.offsetWidth;
			const newWidth = containerWidth * 1;
			setComponentWidth(newWidth);
		}
	};

	useEffect(() => {
		calculateWidth();
		window.addEventListener("resize", calculateWidth);
		return () => window.removeEventListener("resize", calculateWidth);
	}, []);

	return (
		<Link to={`/product/${p._id}`}>
			<div
				style={{
					padding: `${componentWidth * 0.05}px`,
				}}
				ref={containerRef}
				className="bg-stone-800 bg-opacity-50 hover:bg-opacity-80 shadow-black drop-shadow-2x border-[0.5px] border-stone-800 p-[min(1vw,1vh)] aspect-[3/4] rounded-2xl ">
				<div className="h-1/2 bg-blues-900 rounded-2xl bg-reds-900 ">
					<img
						src={p.image}
						alt={p.name}
						className="w-full h-full max-h-fits object-contain aspect-auto rounded-xl  "
					/>
					{/* <HeartIcon product={p} /> */}
				</div>

				<div className="h-1/2 bg-greens-900 overflow-hidden">
					<div
						style={{
							fontSize: `${componentWidth * 0.08}px`,
						}}
						className="h-1/4 bg-yellow-900s overflow-hidden rounded-xl flex items-center justify-center font-bold px-2 hover:h-auto hover:min-h-[25%]">
						<p className="truncate hover:whitespace-normal ">{p?.name}</p>
					</div>

					<div
						style={{
							fontSize: `${componentWidth * 0.08}px`,
						}}
						className="h-1/4 bg-yellow-800s text-center flex items-center justify-center">
						<Ratings value={p.rating} />
					</div>

					<div
						style={{
							fontSize: `${componentWidth * 0.1}px`,
						}}
						className="h-1/4 bg-yellow-700s rounded-xl text-center flex items-center justify-center font-bold">
						<span
							style={{
								fontSize: `${componentWidth * 0.075}px`,
							}}>
							$
						</span>

						<span>{p.price}</span>
					</div>

					<div
						style={{
							fontSize: `${componentWidth * 0.08}px`,
						}}
						className="h-1/4 bg-stone-700 bg-opacity-80 rounded-xl text-center flex items-center justify-center font-bold hover:bg-opacity-70 active:bg-opacity-100"
						onClick={(e) => {
							addToCartHandler(p, 1);
							e.preventDefault();
							e.stopPropagation();
						}}>
						Add to Cart
						<AiOutlineShoppingCart
							style={{
								fontSize: `${componentWidth * 0.08}px`,
							}}
							className="ml-2"
						/>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
