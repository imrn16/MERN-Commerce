import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { addToCart, removeFromCart } from "../redux/features/cart/cartSlice";
import { useEffect, useState, useRef } from "react";

const Cart = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	const [pageLoad, setPageLoad] = useState(false);

	const addToCartHandler = (product, qty) => {
		dispatch(addToCart({ ...product, qty }));
	};

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id));
	};

	const checkoutHandler = () => {
		navigate("/login?redirect=/shipping");
	};

	useEffect(() => {
		//calculateWidth();
		setPageLoad(true);
		window.scrollTo(0, 0);
	}, []);

	const containerRef = useRef(null);
	const [componentWidth, setComponentWidth] = useState(480);

	// const calculateWidth = () => {
	// 	if (containerRef.current) {
	// 		const containerWidth = containerRef.current.offsetWidth;
	// 		const newWidth = containerWidth * 1;
	// 		setComponentWidth(newWidth);
	// 	}
	// };

	return (
		<>
			<div className="container flex justify-around items-start flex-wrap mx-auto smt-8 max-w-[60rem] md:top-[32px] md:static relative top-[-56px] ">
				<div
					ref={containerRef}
					className={`flex flex-col w-[100%] rounded-3xl bg-stone-800 bg-opacity-40  md:p-10 p-4 transition-all duration-700 ${
									pageLoad ? " opacity-100 backdrop-blur-xl" : "opacity-0"
								}`}>
					<h1
						style={{
							fontSize: `${componentWidth * 0.08}px`,
						}}
						className="text-6xls md:text-[4vw]s text-[6vw]s font-semibold mb-4">
						Your Cart
					</h1>

					{/* Conditional rendering: if the cart is empty */}
					{cartItems.length === 0 ? (
						<div >
							<span 
							
							style={{
								fontSize: `${componentWidth * 0.05}px`,
							}}
							className="flex justify-center font-semibold mt-[2rem]">No Items</span>
							
							<Link to="/shop"
							className=" flex flex-col w-40 text-center font-semibold p-2 px-4 rounded-full mt-20 bg-stone-700 bg-opacity-40 mb-[-1.5rem]"
							>Visit Collection</Link>
						</div>
					) : (
						// Rendering cart items
						cartItems.map((item) => (
							<div
								key={item._id}
								className="flex flex-col bg-reds-900">
								<hr className="flex flex-col w-full mb-5 border-stone-600 opacity-20"></hr>
								<div
									style={{
										height: `${componentWidth * 0.15}px`,
									}}
									className="flex flex-row  mb-[1rem]  bg-greens-900 justify-between">
									<Link
										to={`/product/${item._id}`}
										className="flex flex-row bg-resd-900">
										<div
											style={{
												height: `${componentWidth * 0.15}px`,
												width: `${componentWidth * 0.25}px`,
											}}
											className="md:aspect-[3/2]s saspect-square  ">
											<img
												src={item.image}
												alt={item.name}
												className="w-full h-full object-cover rounded-xl"
											/>
										</div>

										<div className="flex-1 ml-2 bg-grays-900 flex flex-col bg-red-900s ">
											<div
												style={{
													fontSize: `${componentWidth * 0.04}px`,
												}}
												className="text-3xls flex flex-col bg-grays-800 font-semibold truncate w-full bg-red-900s max-w-[35vw]" >
												{item.name}
											</div>

											<div
												style={{
													fontSize: `${componentWidth * 0.02}px`,
												}}
												className=" text-white flex flex-col bg-grays-700 truncate">
												{item.brand}
											</div>

											<div
												style={{
													fontSize: `${componentWidth * 0.04}px`,
												}}
												className="font-bold flex flex-row items-center bg-grays-600">
												<div
													style={{
														fontSize: `${componentWidth * 0.03}px`,
													}}
													className="flex flex-row">
													$
												</div>
												<div className="flex flex-row">{item.price}</div>
											</div>
										</div>
									</Link>

									<div className=" flex flex-col-reverse bg-yellows-600 w-auto">
										<div className="w-auto flex flex-col bg-blues-500 h-1/2">
											<select
												className="w-full p-1 rounded-xl stext-black bg-opacity-20 bg-stone-600 h-full"
												value={item.qty}
												onChange={(e) => {
													e.preventDefault();
													addToCartHandler(item, Number(e.target.value));
												}}>
												{[...Array(item.countInStock).keys()].map((x) => (
													<option
														key={x + 1}
														value={x + 1}>
														{x + 1}
													</option>
												))}
											</select>
										</div>

										<div className="flex flex-col bg-yellows-800 h-1/2 items-center">
											<button
												className="text-stone-500 smr-[5rem] "
												onClick={(e) => {
													e.preventDefault();
													removeFromCartHandler(item._id);
												}}>
												<FaTrash className="ml-[1rem]s smt-[.5rem]" />
											</button>
										</div>
									</div>
								</div>
							</div>
						))
					)}
					<hr className="flex flex-col w-full mt-10 border-stone-400 opacity-50"></hr>

					{/* Checkout Summary */}
					<div className="mt-8">
						<div className="rounded-lg">
							<h2 className="text-xl font-semibold mb-2">Items ({cartItems.reduce((acc, item) => acc + item.qty, 0)})</h2>

							<div className="text-2xl font-bold">$ {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</div>

							<button
								className="flex items-center text-center justify-center bg-stone-500 bg-opacity-30 mt-4 py-2 px-4 rounded-2xl text-lg w-full"
								disabled={cartItems.length === 0}
								onClick={checkoutHandler}>
								Proceed To Checkout
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
