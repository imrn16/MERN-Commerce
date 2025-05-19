// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useGetFilteredProductsQuery } from "../redux/api/productApiSlice";
// import { useFetchCategoriesQuery } from "../redux/api/categoryApiSlice";

// import { setCategories, setProducts, setChecked } from "../redux/features/shop/shopSlice";
// import Loader from "../components/Loader";
// import ProductCard from "./Products/ProductCard";
// import { IoFilter } from "react-icons/io5";
// import Product from "./Products/Product";

// const Shop = () => {
// 	const dispatch = useDispatch();
// 	const { categories, products, checked, radio } = useSelector((state) => state.shop);

// 	const categoriesQuery = useFetchCategoriesQuery();
// 	const [priceFilter, setPriceFilter] = useState("");
// 	const [pageLoad, setPageLoad] = useState(false);
// 	const [showFilters, setShowFilters] = useState(false);

// 	const filteredProductsQuery = useGetFilteredProductsQuery({
// 		checked,
// 		radio,
// 	});

// 	useEffect(() => {
// 		if (!categoriesQuery.isLoading) {
// 			dispatch(setCategories(categoriesQuery.data));
// 		}
// 	}, [categoriesQuery.data, dispatch]);

// 	useEffect(() => {
// 		setPageLoad(true);
// 		window.scrollTo(0, 0);
// 	}, []);

// 	useEffect(() => {
// 		if (!checked.length || !radio.length) {
// 			if (!filteredProductsQuery.isLoading) {
// 				// Filter products based on both checked categories and price filter
// 				const filteredProducts = filteredProductsQuery.data.filter((product) => {
// 					// Check if the product price includes the entered price filter value
// 					return product.price.toString().includes(priceFilter) || product.price === parseInt(priceFilter, 10);
// 				});

// 				dispatch(setProducts(filteredProducts));
// 			}
// 		}
// 	}, [checked, radio, filteredProductsQuery.data, dispatch, priceFilter]);

// 	const handleBrandClick = (value, brand) => {
// 		const updatedBrands = value
// 		const productsByBrand = filteredProductsQuery.data?.filter((product) => product.brand === brand);

// 		// const productsByBrand = value
// 		// ? [...checked, brand]
// 		// : checked.filter((c) => c !== brand);
// 		dispatch(setProducts(productsByBrand));
// 	};

// 	const handleCheck = (value, id) => {
// 		const updatedChecked = value
// 			? [...checked, id] // Add the ID if checked
// 			: checked.filter((c) => c !== id); // Remove the ID if unchecked
// 		dispatch(setChecked(updatedChecked)); // Update the state using dispatch
// 	};

// 	const handleFilters = () => {
// 		setShowFilters(!showFilters);
// 	};

// 	// Add "All Brands" option to uniqueBrands
// 	const uniqueBrands = [...Array.from(new Set(filteredProductsQuery.data?.map((product) => product.brand).filter((brand) => brand !== undefined)))];

// 	const handlePriceChange = (e) => {
// 		// Update the price filter state when the user types in the input filed
// 		setPriceFilter(e.target.value);
// 	};

// 	function Filters() {
// 		return (
// 			<div
// 				className={`flex flex-col hide-scrollbar h-auto bg-stone-900 lbackdrop-blur-md bg-opacity-40 rounded-2xl md:max-w-sm w-full md:w-auto stransition-all duration-1000 ${
// 					pageLoad ? " opacity-100 " : "opacity-0"
// 				}`}>
// 				<div className="flex flex-col bg-stone-900 bg-opacity-10 pb-2 rounded-t-2xl ">
// 					<span className="text-xl font-semibold ml-4 mt-3 ">FILTERS</span>
// 				</div>

// 				<div className="rounded-xl bg-stones-600 md:w-[14rem]">
// 					<div className="bg-stone-500s mx-3 py-2 mt-4 mb-2 rounded-xl flex flex-col bg-stone-900 backdrop-blur-mds bg-opacity-20">
// 						<h2 className="h4 text-left mx-4 font-bold pt-2 bg- rounded-full text-lg mb-2">Categories</h2>
// 						<hr className="mx-3 border-stone-500 opacity-20 "></hr>

// 						<div className="p-3 w-[15rem]s flex-wrap flex flex-row mr-2">
// 							{categories?.map((c) => (
// 								<div
// 									key={c._id}
// 									className="mb-2">
// 									<div className="flex flex-row flex-wrap items-center mr-2">
// 										{/* Hidden Checkbox */}
// 										<input
// 											type="checkbox"
// 											id={`checkbox-${c._id}`}
// 											checked={checked.includes(c._id)}
// 											onChange={(e) => handleCheck(e.target.checked, c._id)}
// 											className="hidden"
// 										/>

// 										{/* Clickable Label */}
// 										<label
// 											htmlFor={`checkbox-${c._id}`}
// 											className={`ml- text-sm font-medium cursor-pointer text-white dark:text-gray-300 p-1 rounded-full px-4 stransition-all duration-200 bg-stone-600
// 												${
// 												checked.includes(c._id) ? "bg-opacity-90" : "bg-opacity-20"
// 											} select-none`}>
// 											{c.name}
// 										</label>
// 									</div>
// 								</div>
// 							))}
// 						</div>
// 					</div>

// 					<hr className="border-stone-400 mx-4 my-4 opacity-20"></hr>
// 					{/* <div className="bg-stone-500s mx-3 py-2 mt-4 mb-2 rounded-xl flex flex-col bg-stone-900 backdrop-blur-md bg-opacity-10">
// 									<h2 className="h4 text-left mx-4 font-bold py-2 bg- rounded-full mb-2">Brands</h2>

// 									<div className="p-5">
// 										{uniqueBrands?.map((brand) => (
// 											<>
// 												<div className="flex items-center mr-4 mb-5">
// 													<input
// 														type="checkbox"
// 														id={brand}
// 														name="brand"
// 														onChange={() => handleBrandClick(brand)}
// 														className="w-4 h-4 text-pink-400 bg-gray-100 border-gray-300 focus:ring-pink-500 dark:focus:ring-pink-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
// 													/>

// 													<label
// 														htmlFor="pink-radio"
// 														className="ml-2 text-sm font-medium text-white dark:text-gray-300">
// 														{brand}
// 													</label>
// 												</div>
// 											</>
// 										))}
// 									</div>
// 								</div> */}

// 					<div className="bg-stone-900 mx-3 py-2 mt-4 mb-2  rounded-xl flex flex-col backdrop-blur-mds bg-opacity-20">
// 					<h2 className="h4 text-left mx-4 font-bold pt-2 bg- rounded-full text-lg mb-2">Brands</h2>
// 					<hr className="mx-3 border-stone-500 opacity-20 "></hr>

// 						<div className="p-3 stransition-all duration-1000 flex flex-row flex-wrap">
// 							{uniqueBrands?.map((brand) => (
// 								<div
// 									key={brand}
// 									className="flex flex-row flex-wrap items-center mr-2 mb-2">
// 									{/* Hidden Checkbox */}
// 									<input
// 										type="checkbox"
// 										id={`brand-${brand}`}
// 										checked={products.includes(brand)}
// 										onChange={(e) => handleBrandClick(e.target.checked, brand)}
// 										//onChange={() => handleBrandClick(brand)}
// 										className="hidden"
// 									/>

// 									{/* Clickable Label */}
// 									<label
// 										htmlFor={`brand-${brand}`}
// 										className={`ml- text-sm font-medium cursor-pointer text-white dark:text-gray-300 p-1 rounded-full px-4 stransition-all duration-200 bg-stone-600  select-none ${
// 											products.includes(brand) ? "bg-opacity-90" : "bg-opacity-20"
// 										}`}>
// 										{brand}
// 									</label>
// 								</div>
// 							))}
// 						</div>
// 					</div>

// 					<hr className="border-stone-400 mx-4 my-4 opacity-20"></hr>
// 					{/* <div className="bg-stone-500s mx-3 py-2 mt-4 mb-2 rounded-xl flex flex-row bg-stone-900 backdrop-blur-mds bg-opacity-20">
// 						<h2 className="h4 text-left mx-4 font-bold py-2 bg- rounded-full mb-">Price</h2>

// 						<div className="mx-2 w-[rem] bg-stone-900 rounded-xl bg-opacity-20">
// 							<input
// 								type="text"
// 								placeholder="Enter Price"
// 								value={priceFilter}
// 								onChange={handlePriceChange}
// 								className="w-full px-3 py-2 placeholder-stone-400 border-1 rounded-2xl border-stone-400 focus:outline-none focus:ring focus:border-transparent bg-transparent outline-none"
// 							/>
// 						</div>
// 					</div>
// 					<hr className="border-stone-400 mx-4 m-4 opacity-20"></hr> */}
// 					<div className="px-3 pt-0">
// 						<button
// 							className="w-full bg-stone-900 rounded-xl bg-opacity-20 backdrop-blur-md py-2 mb-4"
// 							onClick={() => window.location.reload()}>
// 							Reset
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}

// 	return (
// 		<>
// 			<div
// 				className={`mx-autos bg-blues-600 md:top-[32px] md:static relative top-[-56px] bg-stone-400 bg-opacity-5 backdrop-blur-xl rounded-3xl hide-scrollbar  transition-all duration-500 ${
// 					pageLoad ? " blur-none opacity-100" : "blur-xl opacity-0"
// 				}`}>
// 				<div className="flex sm:flex-row flex-col bg-greens-900 mx-4 py-5">
// 					<div className="flex flex-col items-centers md:mb-6">
// 						<div className="hidden md:block">
// 							<Filters />
// 						</div>
// 					</div>
// 					<div className=" w-full bg-blues-900">
// 						<div className="flex flex-col  bg-red-900p">
// 							<div
// 								style={
// 									{
// 										//WebkitBackdropFilter: 'blur(16px)'
// 									}
// 								}
// 								className={`flex flex-row justify-between bg-stone-900 bg-opacity-50 backdrop-blur-lgs pb-2 rounded-2xl md:ml-2 md:px-2 pr-4 stransition-all duration-1000 ${
// 									pageLoad ? " delay-100 opacity-100 " : "opacity-0"
// 								}`}>
// 								<div className={`flex flex-row`}>
// 									<div className="flex flex-col ">
// 										<span className="text-xl font-semibold ml-4 mt-3 select-none">ALL COLLECTIONS</span>
// 									</div>
// 								</div>
// 								<div className="flex flex-row justify-between select-none ">
// 									<h2 className="text-md font-semibold ml-4 mt-3">{products?.length} Products</h2>
// 									<button
// 										className="flex flex-row justify-center items-center align-middle ml-4 mt-2 block md:hidden"
// 										onClick={() => handleFilters()}>
// 										<IoFilter size={20} />
// 									</button>
// 								</div>
// 							</div>
// 							{showFilters && (
// 								<div className="mt-4 m justify-center flex w-full md:hidden block  overflow-y-scroll h-[calc(100vh-17rem)] mb-48 hide-scrollbar">
// 									<Filters className="" />
// 								</div>
// 							)}

// 							<div
// 								className="grid md:px-3

// 			xl:grid-cols-[repeat(auto-fill,_minmax(10vw,_1fr))]
// 			lg:grid-cols-[repeat(auto-fill,_minmax(15vw,_1fr))]
// 			md:grid-cols-[repeat(auto-fill,_minmax(20vw,_1fr))]
//             grid-cols-[repeat(auto-fill,_minmax(28vw,_1fr))]

//              justify-centers bg-grays-900 gap-3 mt-2 px- overflow-y-scrolls hide-scrollbar  overflow-x-hidden max-h-[calc(100vh-17rem)]">
// 								{/* <Product/>
// 				<Product/>
// 				<Product/>
// 				<Product/>
// 				<Product/>
// 				<Product/>
// 				<Product/>
// 				<Product/>
// 				<Product/> */}

// 								{products.length === 0 ? (
// 									<Loader />
// 								) : (
// 									products?.map((p) => (
// 											<ProductCard
// 												key={p._id}
// 												p={p}
// 												className={`p-3 stransition-all duration-1000 ${
// 													pageLoad ? " delay-100 opacity-100 " : "opacity-0"
// 												}`}
// 											/>
// 									))
// 								)}

// 								{/* {products.length === 0 ? (
// 									<Loader />
// 								) : (
// 									products?.map((p) => (
// 										<div
// 											className={` transition-all duration-1000 ${
// 												pageLoad ? " delay-300 opacity-100 " : "opacity-0"
// 											}`}
// 											key={p._id}>
// 											<ProductCard
// 												p={p}
// 												className={`p-3 transition-all duration-1000 ${
// 													pageLoad ? " delay-100 opacity-100 " : "opacity-0"
// 												}`}
// 											/>
// 										</div>
// 									))
// 								)} */}
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default Shop;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetFilteredProductsQuery } from "../redux/api/productApiSlice";
import { useFetchCategoriesQuery } from "../redux/api/categoryApiSlice";

import { setCategories, setProducts, setChecked } from "../redux/features/shop/shopSlice";
import Loader from "../components/Loader";
import ProductCard from "./Products/ProductCard";
import { IoFilter } from "react-icons/io5";

const Shop = () => {
	const dispatch = useDispatch();
	const { categories, products, checked, radio } = useSelector((state) => state.shop);

	const categoriesQuery = useFetchCategoriesQuery();
	const [priceFilter, setPriceFilter] = useState("");
	const [pageLoad, setPageLoad] = useState(false);
	const [showFilters, setShowFilters] = useState(false);

	const filteredProductsQuery = useGetFilteredProductsQuery({
		checked,
		radio,
	});

	// Track loading state of the filtered products query
	const isLoading = filteredProductsQuery.isLoading;

	useEffect(() => {
		if (!categoriesQuery.isLoading) {
			dispatch(setCategories(categoriesQuery.data));
		}
	}, [categoriesQuery.data, dispatch]);

	useEffect(() => {
		setPageLoad(true);
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (!checked.length || !radio.length) {
			if (!filteredProductsQuery.isLoading) {
				// Filter products based on both checked categories and price filter
				const filteredProducts = filteredProductsQuery.data.filter((product) => {
					// Check if the product price includes the entered price filter value
					return product.price.toString().includes(priceFilter) || product.price === parseInt(priceFilter, 10);
				});

				dispatch(setProducts(filteredProducts));
			}
		}
	}, [checked, radio, filteredProductsQuery.data, dispatch, priceFilter]);

	// Show initial data as soon as it starts loading
	useEffect(() => {
		if (filteredProductsQuery.data && !isLoading) {
			dispatch(setProducts(filteredProductsQuery.data));
		}
	}, [filteredProductsQuery.data, isLoading, dispatch]);

	const handleBrandClick = (value, brand) => {
		const productsByBrand = filteredProductsQuery.data?.filter((product) => product.brand === brand);
		dispatch(setProducts(productsByBrand));
	};

	const handleCheck = (value, id) => {
		const updatedChecked = value
			? [...checked, id] // Add the ID if checked
			: checked.filter((c) => c !== id); // Remove the ID if unchecked
		dispatch(setChecked(updatedChecked)); // Update the state using dispatch
	};

	const handleFilters = () => {
		setShowFilters(!showFilters);
	};

	// Add "All Brands" option to uniqueBrands
	const uniqueBrands = [...Array.from(new Set(filteredProductsQuery.data?.map((product) => product.brand).filter((brand) => brand !== undefined)))];

	const handlePriceChange = (e) => {
		// Update the price filter state when the user types in the input filed
		setPriceFilter(e.target.value);
	};

	function Filters() {
		return (
			<div
				className={`flex flex-col hide-scrollbar h-auto bg-stone-900 lbackdrop-blur-md bg-opacity-40 rounded-2xl md:max-w-sm w-full md:w-auto stransition-all duration-1000 ${
					pageLoad ? " opacity-100 " : "opacity-0"
				}`}>
				<div className="flex flex-col bg-stone-900 bg-opacity-10 pb-2 rounded-t-2xl ">
					<span className="text-xl font-semibold ml-4 mt-3 ">FILTERS</span>
				</div>

				<div className="rounded-xl bg-stones-600 md:w-[14rem]">
					<div className="bg-stone-500s mx-3 py-2 mt-4 mb-2 rounded-xl flex flex-col bg-stone-900 backdrop-blur-mds bg-opacity-20">
						<h2 className="h4 text-left mx-4 font-bold pt-2 bg- rounded-full text-lg mb-2">Categories</h2>
						<hr className="mx-3 border-stone-500 opacity-20 "></hr>

						<div className="p-3 w-[15rem]s flex-wrap flex flex-row mr-2">
							{categories?.map((c) => (
								<div
									key={c._id}
									className="mb-2">
									<div className="flex flex-row flex-wrap items-center mr-2">
										{/* Hidden Checkbox */}
										<input
											type="checkbox"
											id={`checkbox-${c._id}`}
											checked={checked.includes(c._id)}
											onChange={(e) => handleCheck(e.target.checked, c._id)}
											className="hidden"
										/>

										{/* Clickable Label */}
										<label
											htmlFor={`checkbox-${c._id}`}
											className={`ml- text-sm font-medium cursor-pointer text-white dark:text-gray-300 p-1 rounded-full px-4 stransition-all duration-200 bg-stone-600 
												${checked.includes(c._id) ? "bg-opacity-90" : "bg-opacity-20"} select-none`}>
											{c.name}
										</label>
									</div>
								</div>
							))}
						</div>
					</div>

					<hr className="border-stone-400 mx-4 my-4 opacity-20"></hr>

					<div className="bg-stone-900 mx-3 py-2 mt-4 mb-2  rounded-xl flex flex-col backdrop-blur-mds bg-opacity-20">
						<h2 className="h4 text-left mx-4 font-bold pt-2 bg- rounded-full text-lg mb-2">Brands</h2>
						<hr className="mx-3 border-stone-500 opacity-20 "></hr>

						<div className="p-3 stransition-all duration-1000 flex flex-row flex-wrap">
							{uniqueBrands?.map((brand) => (
								<div
									key={brand}
									className="flex flex-row flex-wrap items-center mr-2 mb-2">
									{/* Hidden Checkbox */}
									<input
										type="checkbox"
										id={`brand-${brand}`}
										checked={products.includes(brand)}
										onChange={(e) => handleBrandClick(e.target.checked, brand)}
										className="hidden"
									/>

									{/* Clickable Label */}
									<label
										htmlFor={`brand-${brand}`}
										className={`ml- text-sm font-medium cursor-pointer text-white dark:text-gray-300 p-1 rounded-full px-4 stransition-all duration-200 bg-stone-600  select-none ${
											products.includes(brand) ? "bg-opacity-90" : "bg-opacity-20"
										}`}>
										{brand}
									</label>
								</div>
							))}
						</div>
					</div>

					<hr className="border-stone-400 mx-4 my-4 opacity-20"></hr>
					<div className="px-3 pt-0">
						<button
							className="w-full bg-stone-900 rounded-xl bg-opacity-20 backdrop-blur-md py-2 mb-4"
							onClick={() => window.location.reload()}>
							Reset
						</button>
					</div>
				</div>
			</div>
		);
	}

	const renderProducts = () => {
		// Show loading placeholder if products are being fetched
		if (isLoading) {
			// Create an array of placeholder items
			return Array(4)
				.fill(0)
				.map((_, index) => (
					<div
						key={`placeholder-${index}`}
						className="bg-stone-800 bg-opacity-50 border-[0.5px] border-stone-800 aspect-[3/4] rounded-2xl flex items-center justify-center">
						<Loader />
					</div>
				));
		}

		// If we have products, render them
		if (products && products.length > 0) {
			return products.map((p) => (
				<ProductCard
					key={p._id}
					p={p}
					className={`p-3 stransition-all duration-1000 ${pageLoad ? " delay-100 opacity-100 " : "opacity-0"}`}
				/>
			));
		}

		// If no products found after loading
		if (!isLoading && (!products || products.length === 0)) {
			return <div className="col-span-full text-center py-8">No products found matching your criteria</div>;
		}

		return null;
	};

	return (
		<>
			<div
				className={`mx-autos bg-blues-600 md:top-[32px] md:static relative top-[-56px] bg-stone-400 bg-opacity-5 backdrop-blur-xl rounded-3xl hide-scrollbar transition-all duration-500 ${
					pageLoad ? " blur-none opacity-100" : "blur-xl opacity-0"
				}`}>
				<div className="flex sm:flex-row flex-col bg-greens-900 mx-4 py-5">
					<div className="flex flex-col items-centers md:mb-6">
						<div className="hidden md:block">
							<Filters />
						</div>
					</div>
					<div className=" w-full bg-blues-900">
						<div className="flex flex-col  bg-red-900p">
							<div
								className={`flex flex-row justify-between bg-stone-900 bg-opacity-50 backdrop-blur-lgs pb-2 rounded-2xl md:ml-2 md:px-2 pr-4 stransition-all duration-1000 ${
									pageLoad ? " delay-100 opacity-100 " : "opacity-0"
								}`}>
								<div className={`flex flex-row`}>
									<div className="flex flex-col ">
										<span className="text-xl font-semibold ml-4 mt-3 select-none">ALL COLLECTIONS</span>
									</div>
								</div>
								<div className="flex flex-row justify-between select-none ">
									<h2 className="text-md font-semibold ml-4 mt-3">{products?.length || 0} Products</h2>
									<button
										className="flex flex-row justify-center items-center align-middle ml-4 mt-2 block md:hidden"
										onClick={() => handleFilters()}>
										<IoFilter size={20} />
									</button>
								</div>
							</div>
							{showFilters && (
								<div className="mt-4 m justify-center flex w-full md:hidden block  overflow-y-scroll h-[calc(100vh-17rem)] mb-48 hide-scrollbar">
									<Filters className="" />
								</div>
							)}

							<div
								className="grid md:px-3
								xl:grid-cols-[repeat(auto-fill,_minmax(10vw,_1fr))] 
								lg:grid-cols-[repeat(auto-fill,_minmax(15vw,_1fr))] 
								md:grid-cols-[repeat(auto-fill,_minmax(20vw,_1fr))]  
								grid-cols-[repeat(auto-fill,_minmax(28vw,_1fr))] 
								justify-centers bg-grays-900 gap-3 mt-2 px- overflow-y-scrolls hide-scrollbar overflow-x-hidden max-h-[calc(100vh-17rem)]">
								{renderProducts()}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Shop;
