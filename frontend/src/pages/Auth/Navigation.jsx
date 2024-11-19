import { useState, useEffect } from "react";
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

const Navigation = () => {
	const { userInfo } = useSelector((state) => state.auth);
	const { cartItems } = useSelector((state) => state.cart);

	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
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
			setTimeout(() => setShouldRender(false), 1000);
			console.log(`2`);
		} else {
			setShouldRender(true);
			console.log(`3`);
			setTimeout(() => setDropdownOpen(true), 10);
			console.log(`4`);
		}
	};

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
		if (menuOpen) {
			setMenuOpen(false);
			console.log(`1`);
			setTimeout(() => setShouldRenderMenu(false), 1000);
			console.log(`2`);
		} else {
			setShouldRenderMenu(true);
			console.log(`3`);
			setTimeout(() => setMenuOpen(true), 10);
			console.log(`4`);
		}
	};

	const dispatch = useDispatch();
	const navigate = useNavigate();

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

	useEffect(() => {}, [dropdownOpen]);

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
					{menuOpen && (
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
										${shouldRenderMenu ? "delay-500 opacity-0 blur-md" : "opacity-100 "}
										
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
								<ul
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
									className={` opacity-0 absolute right-0 mt-9s6 space-y-2 rounded-xl bg-stones-800 text-stoness-400 transition-all duration-1000 
										${dropdownOpen ? "opacity-100" : "opacity-0 blur-sm"}
										${userInfo.isAdmin ? `mt-[500px]` : `mt-[220px]`}
										`}>
									{console.log(userInfo)}
									<li>
										<span>{userInfo.username}</span>
										<br></br>
										<span>{userInfo.email}</span>
									</li>

									<li>
										<Link
											to="/profile"
											className="block px-4 py-2 hover:bg-gray-600 rounded-xl">
											PROFILE
										</Link>
									</li>
									{/* <li>
										<Link
											to="/favorite"
											className="block px-4 py-2 hover:bg-gray-600 rounded-xl">
											<span className="nav-item-name">SAVED</span>
										</Link>
									</li> */}
									<li>
										<button
											onClick={logoutHandler}
											className="block w-full px-4 py-2 text-left hover:bg-gray-600 rounded-xl">
											LOG OUT
										</button>
									</li>
									{userInfo.isAdmin && (
										<>
											<li>ADMIN</li>
											<li>
												<Link
													to="/admin/dashboard"
													className="block px-4 py-2 hover:bg-gray-600 rounded-xl">
													DASHBOARD
												</Link>
											</li>
											<li>
												<Link
													to="/admin/userlist"
													className="block px-4 py-2 hover:bg-gray-600 rounded-xl">
													USERS
												</Link>
											</li>
											<li>
												<Link
													to="/admin/productlist"
													className="block px-4 py-2 hover:bg-gray-600 rounded-xl">
													PRODUCTS
												</Link>
											</li>
											<li>
												<Link
													to="/admin/categorylist"
													className="block px-4 py-2 hover:bg-gray-600 rounded-xl">
													CATEGORY
												</Link>
											</li>
											<li>
												<Link
													to="/admin/orderlist"
													className="block px-4 py-2 hover:bg-gray-600 rounded-xl">
													ORDERS
												</Link>
											</li>
										</>
									)}
								</ul>
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
						{shouldRenderMenu ? (
							<IoCloseOutline
								className={`bg-red-900s w-[24px] h-[24px] transition-all duration-1000 
									${menuOpen ? " " : " blur-lg "}`}
								size={40}
								onClick={() => toggleMenu()}
							/>
						) : (
							<RxHamburgerMenu
								className={`transition-all duration-1000 opacity-100
								${menuOpen ? "blur-lg " : "blur-lgl"}`}
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
