// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { saveShippingAddress, savePaymentMethod } from "../../redux/features/cart/cartSlice";

// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import Message from "../../components/Message";
// import ProgressSteps from "../../components/ProgressSteps";
// import Loader from "../../components/Loader";
// import { useCreateOrderMutation } from "../../redux/api/orderApiSlice";
// import { clearCartItems } from "../../redux/features/cart/cartSlice";

// const Shipping = () => {
// 	const cart = useSelector((state) => state.cart);
// 	const { shippingAddress } = cart;

// 	const [paymentMethod, setPaymentMethod] = useState("PayPal");
// 	const [address, setAddress] = useState(shippingAddress.address || "");
// 	const [city, setCity] = useState(shippingAddress.city || "");
// 	const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || "");
// 	const [country, setCountry] = useState(shippingAddress.country || "");
// 	const [pageLoad, setPageLoad] = useState(false);

//   const [createOrder, { isLoading, error }] = useCreateOrderMutation();
  

//   useEffect(() => {
//     if (!cart.shippingAddress.address) {
//       navigate("/shipping");
//     }
//   }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);

//   const placeOrderHandler = async () => {
//     e.preventDefault();

// 		dispatch(saveShippingAddress({ address, city, postalCode, country }));
// 		dispatch(savePaymentMethod(paymentMethod));

//     try {
//       const res = await createOrder({
//         orderItems: cart.cartItems,
//         shippingAddress: cart.shippingAddress,
//         paymentMethod: cart.paymentMethod,
//         itemsPrice: cart.itemsPrice,
//         shippingPrice: cart.shippingPrice,
//         taxPrice: cart.taxPrice,
//         totalPrice: cart.totalPrice,
//       }).unwrap();
//       dispatch(clearCartItems());
//       navigate(`/order/${res._id}`);
//     } catch (error) {
//       toast.error(error);
//     }
//   };


// 	useEffect(() => {
// 		setPageLoad(true);
// 		window.scrollTo(0, 0);
// 	}, []);

// 	const dispatch = useDispatch();
// 	const navigate = useNavigate();

// 	const submitHandler = (e) => {
		
// 		navigate("/placeorder");
// 	};

// 	// Payment
// 	useEffect(() => {
// 		if (!shippingAddress.address) {
// 			navigate("/shipping");
// 		}
// 	}, [navigate, shippingAddress]);

// 	return (
// 		<div className="container mx-auto mt-10">
// 			{/* <ProgressSteps step1 step2 /> */}
// 			<div className="md:mt-[5rem] flex flex-col justify-center items-center bg-reds-900">
// 				<h1
// 					style={{
// 						fontSize: `min(12vw, 12vh)`, // Takes the smaller value between 20% of the viewport width and height
// 					}}
// 					className={`font-semibold mb-4 transition-all duration-1000 ${pageLoad ? "opacity-100 blur-none" : "opacity-0 blur-sm"}`}>
// 					Shipping
// 				</h1>
// 				<div className={`flex flex-col items-center transition-all duration-1000 `}>
// 					<form
// 						onSubmit={placeOrderHandler}
// 						className="flex flex-col">
// 						<div className="mt-[2rem] mb-[1rem]   flex justify-center items-center">
							
// 							<input
// 								type="text"
// 								required
// 								className={`flex justify-center items-center w-[80vw] max-w-3xl mt-1 p-2 rounded-xl  bg-stone-400 placeholder:text-stone-300 outline-none caret-slate-300 text-stone-300  bg-opacity-50  py-3 transition-all duration-1000 tree ${
// 									pageLoad ? " delay-500 opacity-100 backdrop-blur-lg  " : "opacity-0 "
// 								}`}
// 								placeholder="Address"
// 								value={address}
// 								onChange={(e) => setAddress(e.target.value)}
// 							/>
// 						</div>

// 						<div className="mb-[1rem] flex justify-center items-center">
							
// 							<input
// 								type="text"
// 								required
// 								className={`flex justify-center items-center w-[80vw] max-w-3xl mt-1 p-2 rounded-xl  bg-stone-400 placeholder:text-stone-300 outline-none caret-slate-300 text-stone-300  bg-opacity-50  py-3 transition-all duration-1000 tree ${
// 									pageLoad ? " delay-500 opacity-100 backdrop-blur-lg  " : "opacity-0 "
// 								}`}
// 								placeholder="City"
// 								value={city}
// 								onChange={(e) => setCity(e.target.value)}
// 							/>
// 						</div>

// 						<div className="mb-[1rem]  flex justify-center items-center">
						
// 							<input
// 								type="text"
// 								required
// 								className={`flex justify-center items-center w-[80vw] max-w-3xl mt-1 p-2 rounded-xl  bg-stone-400 placeholder:text-stone-300 outline-none caret-slate-300 text-stone-300  bg-opacity-50  py-3 transition-all duration-1000 tree ${
// 									pageLoad ? " delay-500 opacity-100 backdrop-blur-lg  " : "opacity-0 "
// 								}`}
// 								placeholder="Postal Code"
// 								value={postalCode}
// 								onChange={(e) => setPostalCode(e.target.value)}
// 							/>
// 						</div>

// 						<div className="mb-[1rem]  flex justify-center items-center">
							
// 							<input
// 								type="text"
// 								required
// 								className={`flex justify-center items-center w-[80vw] max-w-3xl mt-1 p-2 rounded-xl  bg-stone-400 placeholder:text-stone-300 outline-none caret-slate-300 text-stone-300  bg-opacity-50  py-3 transition-all duration-1000 tree ${
// 									pageLoad ? " delay-500 opacity-100 backdrop-blur-lg  " : "opacity-0 "
// 								}`}
// 								placeholder="Country"
// 								value={country}
// 								onChange={(e) => setCountry(e.target.value)}
// 							/>
// 						</div>

					

//             <div className="flex flex-col items-center ">
// 							<button
// 								type="submit"
// 								className={`flex w-[60vw] max-w-xl justify-center backdrop-blur-lg bg-opacity-80 bg-stone-800 text-white px-10 py-2 rounded cursor-pointer my-[1rem] transition-all duration-1000 tree ${
// 									pageLoad ? " delay-500 opacity-100s   " : "opacity-0 blur-sm"
// 								}`}>
// 								Continue
// 							</button>
// 						</div>
// 					</form>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Shipping;



import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress, savePaymentMethod } from "../../redux/features/cart/cartSlice";
import ProgressSteps from "../../components/ProgressSteps";

const Shipping = () => {
	const cart = useSelector((state) => state.cart);
	const { shippingAddress } = cart;

	const [paymentMethod, setPaymentMethod] = useState("PayPal");
	const [address, setAddress] = useState(shippingAddress.address || "");
	const [city, setCity] = useState(shippingAddress.city || "");
	const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || "");
	const [country, setCountry] = useState(shippingAddress.country || "");
	const [pageLoad, setPageLoad] = useState(false);

  

	useEffect(() => {
		setPageLoad(true);
		window.scrollTo(0, 0);
	}, []);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();

		dispatch(saveShippingAddress({ address, city, postalCode, country }));
		dispatch(savePaymentMethod(paymentMethod));
		navigate("/placeorder");
	};

	// Payment
	useEffect(() => {
		if (!shippingAddress.address) {
			navigate("/shipping");
		}
	}, [navigate, shippingAddress]);

	return (
		<div className="container mx-auto mt-10">
			{/* <ProgressSteps step1 step2 /> */}
			<div className="md:mt-[5rem] flex flex-col justify-center items-center bg-reds-900">
				<h1
					style={{
						fontSize: `min(12vw, 12vh)`, // Takes the smaller value between 20% of the viewport width and height
					}}
					className={`font-semibold mb-4 transition-all duration-1000 ${pageLoad ? "opacity-100 blur-none" : "opacity-0 blur-sm"}`}>
					Shipping
				</h1>
				<div className={`flex flex-col items-center transition-all duration-1000 `}>
					<form
						onSubmit={submitHandler}
						className="flex flex-col">
						<div className="mt-[2rem] mb-[1rem]   flex justify-center items-center">
							
							<input
								type="text"
								required
								className={`flex justify-center items-center w-[80vw] max-w-3xl mt-1 p-2 rounded-xl  bg-stone-400 placeholder:text-stone-300 outline-none caret-slate-300 text-stone-300  bg-opacity-50  py-3 transition-all duration-1000 tree ${
									pageLoad ? " delay-500 opacity-100 backdrop-blur-lg  " : "opacity-0 "
								}`}
								placeholder="Address"
								value={address}
								onChange={(e) => setAddress(e.target.value)}
							/>
						</div>

						<div className="mb-[1rem] flex justify-center items-center">
							
							<input
								type="text"
								required
								className={`flex justify-center items-center w-[80vw] max-w-3xl mt-1 p-2 rounded-xl  bg-stone-400 placeholder:text-stone-300 outline-none caret-slate-300 text-stone-300  bg-opacity-50  py-3 transition-all duration-1000 tree ${
									pageLoad ? " delay-500 opacity-100 backdrop-blur-lg  " : "opacity-0 "
								}`}
								placeholder="City"
								value={city}
								onChange={(e) => setCity(e.target.value)}
							/>
						</div>

						<div className="mb-[1rem]  flex justify-center items-center">
						
							<input
								type="text"
								required
								className={`flex justify-center items-center w-[80vw] max-w-3xl mt-1 p-2 rounded-xl  bg-stone-400 placeholder:text-stone-300 outline-none caret-slate-300 text-stone-300  bg-opacity-50  py-3 transition-all duration-1000 tree ${
									pageLoad ? " delay-500 opacity-100 backdrop-blur-lg  " : "opacity-0 "
								}`}
								placeholder="Postal Code"
								value={postalCode}
								onChange={(e) => setPostalCode(e.target.value)}
							/>
						</div>

						<div className="mb-[1rem]  flex justify-center items-center">
							
							<input
								type="text"
								required
								className={`flex justify-center items-center w-[80vw] max-w-3xl mt-1 p-2 rounded-xl  bg-stone-400 placeholder:text-stone-300 outline-none caret-slate-300 text-stone-300  bg-opacity-50  py-3 transition-all duration-1000 tree ${
									pageLoad ? " delay-500 opacity-100 backdrop-blur-lg  " : "opacity-0 "
								}`}
								placeholder="Country"
								value={country}
								onChange={(e) => setCountry(e.target.value)}
							/>
						</div>

					

            <div className="flex flex-col items-center ">
							<button
								type="submit"
								className={`flex w-[60vw] max-w-xl justify-center backdrop-blur-lg bg-opacity-80 bg-stone-800 text-white px-10 py-2 rounded cursor-pointer my-[1rem] transition-all duration-1000 tree ${
									pageLoad ? " delay-500 opacity-100s   " : "opacity-0 blur-sm"
								}`}>
								Continue
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Shipping;
