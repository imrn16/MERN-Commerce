import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useGetProductDetailsQuery, useCreateReviewMutation } from "../../redux/api/productApiSlice";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { FaBox, FaClock, FaShoppingCart, FaStar, FaStore } from "react-icons/fa";
import moment from "moment";
import HeartIcon from "./HeartIcon";
import Ratings from "./Ratings";
import ProductTabs from "./ProductTabs";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { IoIosArrowBack } from "react-icons/io";

const ProductDetails = () => {
	const { id: productId } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [qty, setQty] = useState(1);
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState("");
	const [pageLoad, setPageLoad] = useState(false);

	const { data: product, isLoading, refetch, error } = useGetProductDetailsQuery(productId);

	const { userInfo } = useSelector((state) => state.auth);

	const [createReview, { isLoading: loadingProductReview }] = useCreateReviewMutation();

	const submitHandler = async (e) => {
		e.preventDefault();

		try {
			await createReview({
				productId,
				rating,
				comment,
			}).unwrap();
			refetch();
			toast.success("Review created successfully");
		} catch (error) {
			toast.error(error?.data || error.message);
		}
	};

	const addToCartHandler = () => {
		dispatch(addToCart({ ...product, qty }));
		navigate("/cart");
	};

	useEffect(() => {
		setPageLoad(true);
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="flex flex-col justify-center items-center">
			<div>
				<Link
					to="/shop"
					className="text-white font-semibold hover:bg-opacity-100 bg-reds-900 ">
					<div className="flex flex-row bg-red-900 bg-stone-900 w-max py-1 px-3 pr-5 rounded-full justify-center items-center align-middle backdrop-blur-md bg-opacity-60 ">
						<IoIosArrowBack
							className="mr-1 "
							size={14}
						/>
						COLLECTIONS
					</div>
				</Link>
			</div>

			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error?.data?.message || error.message}</Message>
			) : (
				<>
					<div className="flex flex-col max-w-[80rem]">
						<div className="flex flex-col bg-reds-900 relative items-between mt-[2rem]">
							<div className="flex flex-col md:flex-row p-8 bg-stone-600 rounded-3xl backdrop-blur-md bg-opacity-20">
								<div className="flex flex-row w-2/5 rounded-xl bg-stone-900 backdrop-blur-md bg-opacity-20 w-full aspect-w-16 aspect-h-12 h-auto">
									<img
										src={product.image}
										alt={product.name}
										className="w-full aspect-w-16 aspect-h-12 object-contain rounded-xl h-auto p-2"
									/>

									{/* <HeartIcon product={product} /> */}
								</div>

								<div className="flex flex-row md:w-1/2 bg-greens-900 md:ml-20 mt-4 md:mt-0">
									<div className="flex flex-col justify-between">
										<h2 className="text-4xl font-semibold">{product.name}</h2>
										<Ratings
											value={product.rating}
											text={`(${product.numReviews})`}
										/>
										<h4 className="text-sm">{product.brand}</h4>
										<div className="my-4  text-[#B0B0B0]">{product.description}</div>

										<p className="text-5xl my-4 font-extrabold">$ {product.price}</p>

										<div className="flex items-center justify-between w-[20rem]">
											<div className="one">
												{/* <h1 className="flex items-center mb-6 w-[20rem]">
                    <FaClock className="mr-2 text-white" /> Added:{" "}
                    {moment(product.createAt).fromNow()}
                  </h1> */}
											</div>

											{/* <div className="two">
                  <h1 className="flex items-center mb-6">
                    <FaStar className="mr-2 text-white" /> Ratings: {rating}
                  </h1>
                  <h1 className="flex items-center mb-6">
                    <FaShoppingCart className="mr-2 text-white" /> Quantity:{" "}
                    {product.quantity}
                  </h1>
                  <h1 className="flex items-center mb-6 w-[10rem]">
                    <FaBox className="mr-2 text-white" /> In Stock:{" "}
                    {product.countInStock}
                  </h1>
                </div> */}
										</div>

										<div className="flex justify-betweens flex-row">
											{/* <Ratings
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                /> */}

											<div className="btn-container mr-auto">
												<button
													onClick={addToCartHandler}
													disabled={product.countInStock === 0}
													className="bg-stone-600 bg-opacity-60 text-white py-2 px-4 rounded-lg mt-4 md:mt-0 ">
													Add To Cart
												</button>
											</div>

											{product.countInStock > 0 && (
												<div>
													<select
														value={qty}
														onChange={(e) => setQty(e.target.value)}
														className="p-2  bg-stone-600 bg-opacity-60 rounded-lg ml-auto text-center outline-none">
														{[...Array(product.countInStock).keys()].map((x) => (
															<option
																key={x + 1}
																value={x + 1}>
																{x + 1}
															</option>
														))}
													</select>
												</div>
											)}
										</div>
									</div>
								</div>
							</div>

							<div className="mt-[5rem]  flex flex-col items-starts justify-betweend bg-stone-600s sw-full bg-stone-700 py-4 bg-opacity-20 rounded-3xl justify-center items-center backdrop-blur-md max-w-[80rem]">
								<ProductTabs
									loadingProductReview={loadingProductReview}
									userInfo={userInfo}
									submitHandler={submitHandler}
									rating={rating}
									setRating={setRating}
									comment={comment}
									setComment={setComment}
									product={product}
								/>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ProductDetails;
