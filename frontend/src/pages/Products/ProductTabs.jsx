import { useState } from "react";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";
import { useGetTopProductsQuery } from "../../redux/api/productApiSlice";
import SmallProduct from "./SmallProduct";
import Loader from "../../components/Loader";
import ProductCard from "./ProductCard";
import { FaStar } from "react-icons/fa";

const ProductTabs = ({ loadingProductReview, userInfo, submitHandler, rating, setRating, comment, setComment, product }) => {
	const { data, isLoading } = useGetTopProductsQuery();

	const [activeTab, setActiveTab] = useState(1);
  const [selectedValue, setSelectedValue] = useState(0);

	if (isLoading) {
		return <Loader />;
	}

	const handleTabClick = (tabNumber) => {
		setActiveTab(tabNumber);
	};

  

  // Function to handle the change event
  const handleChange = (value) => {
    setSelectedValue(value);
  };

	return (
		<div className="flex flex-col justify-center items-center">
			{/* <section className="mr-[5rem]">
        <div
          className={`flex-1 p-4 cursor-pointer text-lg ${
            activeTab === 1 ? "font-bold" : ""
          }`}
          onClick={() => handleTabClick(1)}
        >
          Write Your Review
        </div>
        <div
          className={`flex-1 p-4 cursor-pointer text-lg ${
            activeTab === 2 ? "font-bold" : ""
          }`}
          onClick={() => handleTabClick(2)}
        >
          All Reviews
        </div>
        <div
          className={`flex-1 p-4 cursor-pointer text-lg ${
            activeTab === 3 ? "font-bold" : ""
          }`}
          onClick={() => handleTabClick(3)}
        >
          Related Products
        </div>
      </section> */}

			<section className="flex flex-col justify-center items-center w-[90vw] max-w-[75rem] bg-green-900s md:px-0s px-[1rem]">
				{/* {activeTab === 1 && ( */}
				<div className=" flex flex-col mt-4 w-full bg-blue-900s justify-center">
          <div className="flex flex-col text-3xl font-semibold">Create A Comment</div>
					{userInfo ? (
						<form
							onSubmit={submitHandler}
							className="bg-yellow-900s w-full flex flex-col max-w-[40rem]s">
							<div className="my-2 flex-row flex bg-red-900s ">
								<label
									htmlFor="rating"
									className="block text-xl lmb-2">
									Rating
								</label>

								{/* <select
									id="rating"
									required
									value={rating}
									onChange={(e) => setRating(e.target.value)}
									className="p-2 ml-4 borders rounded-lg bg-opacity-30 bg-stone-700 focus:outline-none">
									<option value="">Select</option>
									<option value="1">Inferior</option>
									<option value="2">Decent</option>
									<option value="3">Great</option>
									<option value="4">Excellent</option>
									<option value="5">Exceptional</option>
								</select> */}

								<div className="flex space-x-2 ml-4 align-middle justify-center bg-red-900s items-center">
									{[1, 2, 3, 4, 5].map((value) => (
										<label
											key={value}
											className="cursor-pointer">
											<input
												type="radio"
												name="rating"
												value={value}
												checked={selectedValue === value}
												onChange={() => {
                          setRating(value)
                          handleChange(value)
                        }}
												className="hidden"
											/>
                      
											<FaStar
												size={20}
                        className={`opacity-80
                          
                          ${value <= selectedValue ? "text-stone-400" : "text-stone-700"}

                          `}

											/>
										</label>
									))}
								</div>
							</div>

							<div className="my-2 flex w-full flex-col">
								{/* <label
									htmlFor="comment"
									className="block text-xl mb-2 ">
									Comment
								</label> */}

								<textarea
									id="comment"
									rows="3"
									required
									value={comment}
									onChange={(e) => setComment(e.target.value)}
									placeholder="Enter Comment Here"
									className="p-2 borders rounded-lg sxl:w-[40rem]  bg-stone-900 bg-opacity-60 focus-none text-stone-300 placeholder:text-stone-500 focus:outline-none resize-none"></textarea>
							</div>
							<button
								type="submit"
								disabled={loadingProductReview}
								className="bg-stone-800 text-white py-2 px-4 rounded-lg">
								Submit
							</button>
						</form>
					) : (
						<p>
							Please <Link to="/login">sign in</Link> to write a review
						</p>
					)}
				</div>
				{/* )} */}
			</section>

			<section className="flex flex-col my-20 bg-red-900s justify-center items-center px-[1rem] bg-red-90 w-[90vw]  max-w-[75rem]">
				{/* {activeTab === 2 && ( */}
				<>
					<div>{product.reviews.length === 0 && <p>No Reviews</p>}</div>

					<div className="flex flex-col w-full spx-[3rem]">
          <div className="flex flex-col text-3xl font-semibold mb-2 ml-4s w-full">Comments</div>
						{product.reviews.map((review) => (
							<div
								key={review._id}
								className="bg-stone-900 bg-opacity-60  p-4 rounded-lg  mb-5 px-4 w-full">
								<div className="flex justify-between">
									<strong className="text-[#B0B0B0]">{review.name}</strong>
									<p className="text-[#B0B0B0]">{review.createdAt.substring(0, 10)}</p>
								</div>

								<p className="my-4">{review.comment}</p>
								<Ratings value={review.rating} />
							</div>
						))}
					</div>
				</>
				{/* )} */}
			</section>

			<section className="flex flex-col justify-center items-center w-[90vw] max-w-[75rem] bg-green-900s md:px-0s px-[1rem]">
				{/* {activeTab === 3 && ( */}
        <div className="flex flex-col text-3xl font-semibold mb-2 ml-4s w-full">Related Products</div>
				<section className=" flex flex-wrap justify-center items-center bg-yellow-900s">
					<div
						className="grid md:px-3
		              xl:grid-cols-[repeat(auto-fill,_minmax(10vw,_1fr))] 
		            	lg:grid-cols-[repeat(auto-fill,_minmax(15vw,_1fr))] 
		            	md:grid-cols-[repeat(auto-fill,_minmax(20vw,_1fr))]  
                     grid-cols-[repeat(auto-fill,_minmax(28vw,_1fr))] 
             justify-centers bg-grays-900 gap-3 mt-2 spx-[1rem] overflow-y-scrolls hide-scrollbar  overflow-x-hiddens max-h-[calc(100vh-17rem)]s">
						{!data ? (
							<Loader />
						) : (
							data.map((product) => (
								<div key={product._id}>
									<ProductCard p={product} />
								</div>
							))
						)}
					</div>
				</section>
				{/* )} */}
			</section>
		</div>
	);
};

export default ProductTabs;
