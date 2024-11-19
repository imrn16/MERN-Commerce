import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import Loader from "../../components/Loader";
import { useProfileMutation } from "../../redux/api/usersApiSlice";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../../redux/api/usersApiSlice";

const Profile = () => {
	const [username, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [register, { isLoading }] = useRegisterMutation();

	const { userInfo } = useSelector((state) => state.auth);

	const [updateProfile, { isLoading: loadingUpdateProfile }] = useProfileMutation();

	useEffect(() => {
		setUserName(userInfo.username);
		setEmail(userInfo.email);
	}, [userInfo.email, userInfo.username]);

	const dispatch = useDispatch();
	const [pageLoad, setPageLoad] = useState(false);

	useEffect(() => {
		setPageLoad(true);
		window.scrollTo(0, 0);
	}, []);

	const submitHandler = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			toast.error("Passwords do not match");
		} else {
			try {
				const res = await updateProfile({
					_id: userInfo._id,
					username,
					email,
					password,
				}).unwrap();
				dispatch(setCredentials({ ...res }));
				toast.success("Profile updated successfully");
			} catch (err) {
				toast.error(err?.data?.message || err.error);
			}
		}
	};

	return (
		<div>
			<section className="flex flex-col bg-greens-900">
				<div className="md:mt-[5rem] flex flex-col justify-center items-center bg-reds-900">
					<h1
						style={{
							fontSize: `min(12vw, 12vh)`, // Takes the smaller value between 20% of the viewport width and height
						}}
						className={`font-semibold mb-4 transition-all duration-1000 ${pageLoad ? "opacity-100 blur-none" : "opacity-0 blur-sm"}`}>
						Profile 
					</h1>
					<div className={`flex flex-col items-center transition-all duration-1000 tree `}>
						<form
							onSubmit={submitHandler}
							className="flex flex-col">
							<div className="mt-[2rem] mb-[1rem]   flex justify-center items-center">
								<label
									htmlFor="name"
									className="block text-sm font-medium text-white"></label>
								<input
									type="text"
									id="name"
									className={`flex justify-center items-center w-[80vw] max-w-3xl mt-1 p-2 rounded-xl  bg-stone-400 placeholder:text-stone-300 outline-none caret-slate-300 text-stone-300  bg-opacity-50  py-3 transition-all duration-1000 tree ${
										pageLoad ? " delay-500 opacity-100 backdrop-blur-lg  " : "opacity-0 "
									}`}
									placeholder="Name"
									value={username}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>

							<div className="mb-[1rem] flex justify-center items-center">
								<label
									htmlFor="email"
									className="block text-sm font-medium text-white"></label>
								<input
									type="email"
									id="email"
									className={`flex justify-center items-center w-[80vw] max-w-3xl mt-1 p-2 rounded-xl  bg-stone-400 placeholder:text-stone-300 outline-none caret-slate-300 text-stone-300  bg-opacity-50  py-3 transition-all duration-1000 tree ${
										pageLoad ? " delay-500 opacity-100 backdrop-blur-lg  " : "opacity-0 "
									}`}
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>

							<div className="mb-[1rem]  flex justify-center items-center">
								<label
									htmlFor="password"
									className="block text-sm font-medium text-white"></label>
								<input
									type="password"
									id="password"
									className={`flex justify-center items-center w-[80vw] max-w-3xl mt-1 p-2 rounded-xl  bg-stone-400 placeholder:text-stone-300 outline-none caret-slate-300 text-stone-300  bg-opacity-50  py-3 transition-all duration-1000 tree ${
										pageLoad ? " delay-500 opacity-100 backdrop-blur-lg  " : "opacity-0 "
									}`}
									placeholder="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>

							<div className="mb-[1rem]  flex justify-center items-center">
								<label
									htmlFor="confirmPassword"
									className="block text-sm font-medium text-white"></label>
								<input
									type="password"
									id="confirmPassword"
									className={`flex justify-center items-center w-[80vw] max-w-3xl mt-1 p-2 rounded-xl  bg-stone-400 placeholder:text-stone-300 outline-none caret-slate-300 text-stone-300  bg-opacity-50  py-3 transition-all duration-1000 tree ${
										pageLoad ? " delay-500 opacity-100 backdrop-blur-lg  " : "opacity-0 "
									}`}
									placeholder="Confirm Password"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
								/>
							</div>

							<div className="flex flex-col items-center">
								<button
									disabled={isLoading}
									type="submit"
									className={`flex w-[60vw] max-w-xl justify-center backdrop-blur-lg bg-opacity-80 bg-stone-800 text-white px-10 py-2 rounded cursor-pointer my-[1rem] transition-all duration-1000 tree ${
										pageLoad ? " delay-500 opacity-100s   " : "opacity-0 blur-sm"
									}`}>
									{isLoading ? "Updating..." : "Update"}
								</button>
							</div>
							{isLoading && <Loader />}
						</form>

						{/* <Link
							to="/user-orders"
							className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700">
							My Orders
						</Link> */}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Profile;
