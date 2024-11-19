import { useState, useEffect, useRef } from "react";
import { AiOutlineHome, AiOutlineShopping, AiOutlineLogin, AiOutlineUserAdd, AiOutlineShoppingCart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { RxLaptop } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/usersApiSlice";
import { logout } from "../../redux/features/auth/authSlice";
import FavoritesCount from "../Products/FavoritesCount";
import { FaRegUser } from "react-icons/fa";
import { PiUserLight } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { HiUser } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCamera } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { naviState, setState } from "../../redux/api/naviSlice";

const Navigation = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { userInfo } = useSelector((state) => state.auth);
	const { cartItems } = useSelector((state) => state.cart);
	const isMenuOpen = useSelector((state) => state.navi.value);

	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [menuIconOpen, setMenuIconOpen] = useState(false);
	const [menuHamOpen, setMenuHamOpen] = useState(true);
	const [menuExOpen, setMenuExOpen] = useState(false);
	const [shouldRender, setShouldRender] = useState(false);
	const [shouldRenderMenu, setShouldRenderMenu] = useState(false);
	const [showSidebar, setShowSidebar] = useState(false);
	const [userDropdownOpen, setUserDropdownOpen] = useState(false);
	const [pageLoad, setPageLoad] = useState(false);

	const toggleDropdown = () => {
		//setDropdownOpen(!dropdownOpen);

		if (dropdownOpen) {
			setDropdownOpen(false);
			console.log(`1`);
			setTimeout(() => setShouldRender(false), 500);
			console.log(`2`);
		} else {
			setShouldRender(true);
			console.log(`3`);
			setTimeout(() => setDropdownOpen(true), 20);
			console.log(`4`);
		}
	};

	const toggleMenu = () => {
		//setMenuOpen(!menuOpen);

		if (shouldRenderMenu) {
			//close menu
			//click x

			//setTimeout(() => setMenuOpen(false), 0);
			setTimeout(() => dispatch(setState(false)), 0);
			setTimeout(() => setMenuIconOpen(false), 500);

			console.log(`x start`);
			console.log(`1`);
			setTimeout(() => setShouldRenderMenu(false), 1000);
			console.log(`2`);
		} else {
			//open menu
			//click ham
			setTimeout(() => setShouldRenderMenu(true), 0);
			console.log(`3`);
			//setTimeout(() => setMenuOpen(true), 500); //edit this to delay fade in
			setTimeout(() => dispatch(setState(true)), 20);
			setTimeout(() => setMenuIconOpen(true), 500);
			console.log(`ham start`);
			console.log(`4`);
		}

		if (menuHamOpen) {
			setMenuHamOpen(false);
			setTimeout(() => setMenuExOpen(true), 510);
		} else {
			setMenuExOpen(false);
			setTimeout(() => setMenuHamOpen(true), 510);
		}

		// if (menuIconOpen) {

		// } else {

		// }
	};

	const [logoutApiCall] = useLogoutMutation();

	const logoutHandler = async () => {
		try {
			await logoutApiCall().unwrap();
			dispatch(logout());
			navigate("/login");
		} catch (error) {
			console.error(error);
		}
	};

	//const dropDownAnimate = ``

	useEffect(() => {
		setPageLoad(true);
	}, []);

	useEffect(() => {}, [dropdownOpen, shouldRenderMenu]);

	const dropdownRef = useRef(null);

	// Close dropdown if clicked outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				// setDropdownOpen(false);
				// console.log(`1`);
				// setTimeout(() => setShouldRender(false), 500);
				// console.log(`2`);
				
				
				//toggleDropdown();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div
			style={{
				zIndex: 9998,
			}}
			className={`flex flex-row justify-between py-4 text-white bg-opacity-90 w-full lg:max-w-[calc(100%-12rem)] md:max-w-[calc(100%-2rem)] xl:max-w-[calc(100%-20rem)] max-w-[calc(100%-2rem)] fixed bg-yellows-600 transition-all duration-1000 ${
				pageLoad ? "delay-1000 opacity-100" : "opacity-0 "
			}`}
			id="navigation-container">
			<div className="flex flex-row bg-grays-500">
				<Link
					href="/"
					onClick={() => window.scrollTo(0, 0)}
					className={`flex items-center justify-center  bg-red-900s rounded-md transition-all duration-[1000ms] ${
						pageLoad ? "delay-1000" : "blur-sm "
					}`}>
					<div className="group flex flex-row text-lg font-light w-[120px] bg-reds-900 hover:font-bolds">
						<MdOutlineCamera
							className={`mr-2 transition-transform duration-[1100ms] group-hover:animate-rotateMe 
						${pageLoad ? "delay-1000 sanimate-rotateMe" : "blur-sm "}`}
							size={`30`}
						/>
						<div
							className={`flex justify-center items-center transition-all duration-1000 group-hover:animate-blurEffect ${
								pageLoad ? "delay-1000 sanimate-blurEffect" : "blur-sm "
							}`}>
							F O C U S
						</div>
					</div>
				</Link>
			</div>

			<div className={`flex justify-center space-x-8 bg-blues-900 font-light hidden md:flex `}>
				<Link
					to="/"
					className="flex items-center transition-transform transform md:hover:translate-y-[-2px] select-none">
					<span className=" nav-item-name">HOME</span>
				</Link>

				<Link
					to="/shop"
					className="flex items-center transition-transform transform md:hover:translate-y-[-2px] select-none">
					<span className=" nav-item-name">COLLECTION</span>
				</Link>

				<Link
					to="/about"
					className="flex items-center transition-transform transform md:hover:translate-y-[-2px] select-none">
					<span className="nav-item-name">ABOUT</span>
					{/* <FavoritesCount />  */}
				</Link>

				<Link
					to="/contact"
					className="flex items-center transition-transform transform md:hover:translate-y-[-2px] select-none">
					<span className="nav-item-name">CONTACT</span>
				</Link>
			</div>

			<div className="flex flex-row bg-purples-900">
				<div className=" flex flex-row items-center align-center bg-oranges-900 ">
					{shouldRenderMenu && (
						<div
							style={{
								zIndex: 9998,
								//opacity: 1,
								background: `2f2f2f`,
								//backdropFilter: `blur(100px)`,
								//webkitBackdropFilter: `blur(100px)`,
								marginTop: `64px`,
								top: 0,
								left: `-1rem`,
							}}
							className={`absolute inset w-[100vw] h-20`}>
							<div
								className={`flex justify-around sspace-x-8 bg-blues-900 font-light  md:flex transition-all duration-1000 
										${isMenuOpen ? "delay-500 opacity-100" : "opacity-0 blur-md"}
										
										`}>
								<Link
									to="/"
									className="flex items-center align-middle transition-transform transform md:hover:translate-y-[-2px] select-none"
									onClick={() => toggleMenu()}>
									<span className=" nav-item-name">HOME</span>
								</Link>

								<Link
									to="/shop"
									className="flex items-center transition-transform transform md:hover:translate-y-[-2px] select-none"
									onClick={() => toggleMenu()}>
									<span className=" nav-item-name">COLLECTION</span>
								</Link>

								<Link
									to="/about"
									className="flex items-center transition-transform transform md:hover:translate-y-[-2px] select-none"
									onClick={() => toggleMenu()}>
									<span className="nav-item-name">ABOUT</span>
									<FavoritesCount />
								</Link>

								<Link
									to="/contact"
									className="flex items-center transition-transform transform md:hover:translate-y-[-2px] select-none"
									onClick={() => toggleMenu()}>
									<span className="nav-item-name">CONTACT</span>
								</Link>
							</div>
						</div>
					)}

					{userInfo ? (
						<>
							<div className="flex space-x-3">
								<Link
									to="/shop"
									className="flex flex-row items-center transition-transform transform md:hover:translate-y-[-2px] mr-2 md:mr-0">
									<HiMagnifyingGlass
										className="mr- mt-[px]"
										size={26}
									/>
									<span className="hidden nav-item-name">LOGIN</span>
								</Link>

								<button
									onClick={toggleDropdown}
									className="flex flex-row  items-center text-grays-800 focus:outline-none transition-transform transform md:hover:translate-y-[-2px]">
									{/* <span className="text-white">{userInfo.username.toUpperCase()}</span> */}
									<HiUser
										size={24}
										className="text-stones-300"
									/>
									{/* <svg
									xmlns="http://www.w3.org/2000/svg"
									className={`h-4 w-4 ml-1 ${dropdownOpen ? "transform rotate-179.99" : ""}`}
									fill="none"
									viewBox="0 0 24 24"
									stroke="white">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1"
										d={dropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
									/>
								</svg> */}
								</button>
							</div>

							{shouldRender && (
								<>
									{/* <div
								onClick={() => toggleDropdown()}
								className=" bg-red-900 opacity-0 absolute -inset-x-1/2 inset-y-0  w-[200vw] h-[100vh] "></div> */}
									<ul
										ref={dropdownRef}
										style={{
											zIndex: 9998,
											//opacity: 1,
											background: `2f2f2f`,
											backdropFilter: `blur(100px)`,
											webkitBackdropFilter: `blur(100px)`,
											//marginTop: `540px`,
											//borderBottom: `1px solid rgba(20, 20, 20, 0.18)`,
											// boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.37`
										}}
										className={` opacity-0 absolute right-0 mt-9s6 space-y-1l rounded-xl bg-stones-800 text-stone-300 transition-all duration-500 flex flex-col  justify-center items-center
										${dropdownOpen ? "opacity-100" : "opacity-0 blur-sm"}
										${userInfo.isAdmin ? `mt-[530px]` : `mt-[240px]`}
										`}>
										{console.log(userInfo)}

										<li className="w-full flex flex-col justify-center sitems-center rounded-t-xl bg-stone-700 bg-opacity-30  pb-2 px-4">
											<div className="flex flex-col justify-center pt-2 font-semibold"> {userInfo.username}</div>

											<div className="text-stone-400 text-sm">{userInfo.email}</div>
										</li>

										<li className="flex flex-col w-full items-center justify-center text-center">
											<Link
												to="/profile"
												onClick={() => toggleDropdown()}
												className="block flex flex-col w-full ppx-4 py-3 hover:bg-opacity-30 bg-stone-600 bg-opacity-0 rounded-md">
												PROFILE
											</Link>
										</li>
										<hr className="border-stone-700 border-opacity-50 w-[50%] "></hr>
										{/* <li>
										<Link
											to="/favorite"
											className="block px-4 py-2 hover:bg-gray-600 rounded-xl">
											<span className="nav-item-name">SAVED</span>
										</Link>
									</li> */}
										<li className="flex flex-col w-full items-center justify-center text-center">
											<Link
												onClick={logoutHandler}
												className={`block flex flex-col w-full ppx-4 py-3 hover:bg-opacity-30 bg-stone-600 bg-opacity-0 
												
											${!userInfo.isAdmin ? "rounded-t-md rounded-b-xl" : "rounded-md"}

												`}>
												LOG OUT
											</Link>
										</li>
										{userInfo.isAdmin && (
											<>
												<li className="flex flex-col w-full items-center justify-center text-center">
													<Link className="block flex flex-col w-full ppx-4 py-3 bg-opacity-10 bg-stone-600 bg-opacity-0 rounded-mds">
														ADMIN
													</Link>
												</li>
												<li className="flex flex-col w-full items-center justify-center text-center">
													<Link
														to="/admin/dashboard"
														onClick={() => toggleDropdown()}
														className="block flex flex-col w-full ppx-4 py-3 hover:bg-opacity-30 bg-stone-600 bg-opacity-0 rounded-md">
														DASHBOARD
													</Link>
												</li>
												<hr className="border-stone-700 border-opacity-50 w-[50%] "></hr>
												<li className="flex flex-col w-full items-center justify-center text-center">
													<Link
														to="/admin/userlist"
														onClick={() => toggleDropdown()}
														className="block flex flex-col w-full ppx-4 py-3 hover:bg-opacity-30 bg-stone-600 bg-opacity-0 rounded-md">
														USERS
													</Link>
												</li>
												<hr className="border-stone-700 border-opacity-50 w-[50%] "></hr>
												<li className="flex flex-col w-full items-center justify-center text-center">
													<Link
														to="/admin/productlist"
														onClick={() => toggleDropdown()}
														className="block flex flex-col w-full ppx-4 py-3 hover:bg-opacity-30 bg-stone-600 bg-opacity-0 rounded-md">
														PRODUCTS
													</Link>
												</li>
												<hr className="border-stone-700 border-opacity-50 w-[50%] "></hr>
												<li className="flex flex-col w-full items-center justify-center text-center">
													<Link
														to="/admin/categorylist"
														onClick={() => toggleDropdown()}
														className="block flex flex-col w-full ppx-4 py-3 hover:bg-opacity-30 bg-stone-600 bg-opacity-0 rounded-md">
														CATEGORY
													</Link>
												</li>
												<hr className="border-stone-700 border-opacity-50 w-[50%] "></hr>
												<li className="flex flex-col w-full items-center justify-center text-center">
													<Link
														to="/admin/orderlist"
														onClick={() => toggleDropdown()}
														className="block flex flex-col w-full ppx-4 py-3 hover:bg-opacity-30 bg-stone-600 bg-opacity-0 rounded-b-xl rounded-t-md">
														ORDERS
													</Link>
												</li>
											</>
										)}
									</ul>
								</>
							)}
						</>
					) : (
						<div className="flex space-x-3 bg-reds-900">
							<Link
								to="/shop"
								className="flex flex-row items-center transition-transform transform md:hover:translate-y-[-2px] ml- mr-2 md:mr-0 bg-reds-900">
								<HiMagnifyingGlass
									className="mr mt-[px]"
									size={26}
								/>
								<span className="hidden nav-item-name">LOGIN</span>
							</Link>

							<Link
								to="/login"
								className="flex flex-row items-center transition-transform transform md:hover:translate-y-[-2px] ml- bg-reds-900">
								<HiOutlineUser size={26} />
								<span className="hidden nav-item-name">REGISTER</span>
							</Link>
						</div>
					)}
				</div>
				<div className="flex flex-row bg-greens-800 w-auto ml-autos ml-2 md:ml-0 ">
					<Link
						to="/cart"
						className="flex flex-row items-center transition-transform transform md:hover:translate-y-[-2px] ml-3">
						<HiOutlineShoppingBag
							className=""
							size={25}
						/>
						<span className="hidden nav-item-name">Cart</span>
						<div>
							{cartItems.length > 0 && (
								<span
									style={{ zIndex: 9999, fontSize: "8px", left: "15px", top: `20px` }}
									className="fixed h-3 w-3 text-white bg-stone-800 rounded-full">
									<span className="flex justify-center align-middle items-center">
										{cartItems.reduce((a, c) => a + c.qty, 0)}
									</span>
								</span>
							)}
						</div>
					</Link>
					<div className="flex flex-row w-auto items-center ml-6 mr-2  md:hidden">
						{/* {menuOpen ? (
							<IoCloseOutline
								className={`bg-red-900s w-[24px] h-[24px] transition-opacity duration-1000
									${menuOpen ? "opacity-100" : "opacity-0"}`}
								size={40}
								onClick={() => toggleMenu()}
							/>
						) : (
							<RxHamburgerMenu
								className="transition-opacity duration-1000 opacity-100"
								size={24}
								onClick={() => toggleMenu()}
							/>
						)} */}
						{menuIconOpen ? (
							<IoCloseOutline
								className={`bg-red-900s w-[24px] h-[24px] transition-all duration-[500ms] opacity-0s
									${menuExOpen ? "bg-red-900s " : " bg-red-900s blur-sm opacity-10 "}`}
								size={40}
								onClick={() => toggleMenu()}
							/>
						) : (
							<RxHamburgerMenu
								className={`bg-red-900s w-[24px] h-[24px] transition-all duration-[500ms]
									${!menuHamOpen ? "blur-sm opacity-10 lbg-green-900 " : " "}`}
								size={24}
								onClick={() => toggleMenu()}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
