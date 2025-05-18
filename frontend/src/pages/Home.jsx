import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";
import SliderCarousel from "../components/SliderCarousel";
import FadeCarousel from "../components/FadeCarousel";
import Background from "../components/Background";

const Home = () => {
	const { keyword } = useParams();
	const { data, isLoading, isError } = useGetProductsQuery({ keyword });

	return (
		<>
			{!keyword ? <Header /> : null}
			{/* {
			
			isLoading ? (
				<Loader />
			) : isError ? (
				<Message variant="danger">{isError?.data?.message || isError.error}</Message>
			) : ( */}
				<>
					{/* <div className="relative flex bg-red-900 h-[40rem] w-[40rem]">
						<div className="flex bg-green-900 h-[20rem] w-[20rem]"></div>
						<div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-900 h-[20rem] w-[20rem] flex justify-center items-center">
							<div>test</div>
						</div>
					</div> */}

					<div className="overflow-x-hidden flex flex-col items-center justify-center w-full bg-rede-900 mt-[10rem]">
						<h1
							style={{
								fontSize: `min(7vw, 7vh)`,
							}}
							className="flex text-[2rem]d font-semibold">
							Best In The Business
						</h1>

						<h3
							style={{
								fontSize: `min(3vw, 3vh)`,
							}}
							className="text-stone-500 mb-10">
							The biggest brands in the world, all in one place
						</h3>
					</div>

					<div>
						<SliderCarousel />
					</div>
					<div className="bg-green-900s relative">
						<div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-stone-600 h-[50%] w-[50%] flex justify-center items-center blur-[200px] md:blur-[400px] rounded-full opacity-70">
							<div>test</div>
						</div>
						<div className="flex flex-col items-center justify-center w-full bg-reds-900 mt-[10rem]">
							<h1
								style={{
									fontSize: `min(7vw, 7vh)`,
								}}
								className="flex text-[2rem]d font-semibold">
								One Stop Shop
							</h1>

							<h3
								style={{
									fontSize: `min(3vw, 3vh)`,
								}}
								className="text-stone-500 mb-10">
								Everything you need to capture the moment
							</h3>
						</div>

						<div className="md:flex w-full bg-reds-900 max-w-full">
							<div className="flex w-full md:w-1/2 bg-greens-900 md:pr-10">
								<div className="w-full">
									<FadeCarousel
										label={`Cameras`}
										category={`673a6e2b811e7585f48c2e86`}
									/>
									<FadeCarousel label={`Accessories`} />
								</div>
							</div>

							<div className="flex md:w-1/2 bg-blues-900 md:pl-10 md:items-center md:justify-center">
								<div className="w-full">
									<FadeCarousel label={`Lenses`} />
								</div>
							</div>
						</div>
					</div>

					{/* <div>
						<div
							className="grid 
            
          					  xl:grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))] 
        				    lg:grid-cols-[repeat(auto-fill,_minmax(12rem,_1fr))] 
       					     md:grid-cols-[repeat(auto-fill,_minmax(12rem,_1fr))] 
        				    sm:grid-cols-[repeat(auto-fill,_minmax(12rem,_1fr))] 
       					     grid-cols-[repeat(auto-fill,_minmax(12rem,_1fr))] 


       					     gap-4 justify-centers bg-grays-900">
							{data.products.map((product) => (
								<div
									key={product._id}
									className="flex ">
									<Product product={product} />
								</div>
							))}
						</div>
					</div> */}

					{/* <div className="flex flex-wrap gap-4 justify-center">
						<div className="flex-1 min-w-[14rem] max-w-[20rem] h-48 bg-blue-300">Component 1</div>
						<div className="flex-1 min-w-[14rem] max-w-[20rem] h-48 bg-green-300">Component 2</div>
						<div className="flex-1 min-w-[14rem] max-w-[20rem] h-48 bg-red-300">Component 3</div>
						<div className="flex-1 min-w-[14rem] max-w-[20rem] h-48 bg-yellow-300">Component 4</div>
						<div className="flex-1 min-w-[14rem] max-w-[20rem] h-48 bg-blue-300">Component 5</div>
						<div className="flex-1 min-w-[14rem] max-w-[20rem] h-48 bg-green-300">Component 6</div>
						<div className="flex-1 min-w-[14rem] max-w-[20rem] h-48 bg-red-300">Component 7</div>
						<div className="flex-1 min-w-[14rem] max-w-[20rem] h-48 bg-yellow-300">Component 8</div>
						<div className="flex-1 min-w-[14rem] max-w-[20rem] h-48 bg-blue-300">Component 9</div>
						<div className="flex-1 min-w-[14rem] max-w-[20rem] h-48 bg-green-300">Component 10</div>
						<div className="flex-1 min-w-[14rem] max-w-[20rem] h-48 bg-red-300">Component 11</div>
						<div className="flex-1 min-w-[14rem] max-w-[20rem] h-48 bg-yellow-300">Component 12</div>
						<div className="flex-1 min-w-[14rem] max-w-[20rem] h-48 bg-blue-300">Component 13</div>
						<div className="flex-1 min-w-[14rem] max-w-[20rem] h-48 bg-green-300">Component 14</div>
						<div className="flex-1 min-w-[14rem] max-w-[20rem] h-48 bg-red-300">Component 15</div>
						<div className="flex-1 min-w-[14rem] max-w-[20rem] h-48 bg-yellow-300">Component 16</div>
					</div> */}

					{/* <div className="grid grid-cols-[repeat(auto-fill,_minmax(12rem,_1fr))] gap-2 justify-center">
  <div className="aspect-[10/12] bg-blue-300">Component 1</div>
  <div className="aspect-[10/12] bg-green-300">Component 2</div>
  <div className="aspect-[10/12] bg-red-300">Component 3</div>
  <div className="aspect-[10/12] bg-yellow-300">Component 4</div>
  <div className="aspect-[10/12] bg-blue-300">Component 5</div>
  <div className="aspect-[10/12] bg-green-300">Component 6</div>
  <div className="aspect-[10/12] bg-red-300">Component 7</div>
  <div className="aspect-[10/12] bg-yellow-300">Component 8</div>
  <div className="aspect-[10/12] bg-blue-300">Component 9</div>
  <div className="aspect-[10/12] bg-green-300">Component 10</div>
  <div className="aspect-[10/12] bg-red-300">Component 11</div>
  <div className="aspect-[10/12] bg-yellow-300">Component 12</div>
  <div className="aspect-[10/12] bg-blue-300">Component 13</div>
  <div className="aspect-[10/12] bg-green-300">Component 14</div>
  <div className="aspect-[10/12] bg-red-300">Component 15</div>
  <div className="aspect-[10/12] bg-yellow-300">Component 16</div>
</div> */}
				</>
			{/* )} */}
		</>
	);
};

export default Home;
