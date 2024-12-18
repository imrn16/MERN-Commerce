import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { naviState, setState } from "../redux/api/naviSlice";

function NaviDecoration() {
	const [pageLoad, setPageLoad] = useState(false);
	const isMenuOpen = useSelector((state) => state.navi.value);
	const dispatch = useDispatch();

	useEffect(() => {
		setPageLoad(true);
	}, []);

	return (
		<div
			style={{
				zIndex: 9998,
				opacity: 0.999,
				//background: `#1f1f1f`,
				backdropFilter: `blur(100px)`,
				webkitBackdropFilter: `blur(100px)`,
				borderBottom: `1px solid rgba(20, 20, 20, 0.18)`,
				boxShadow: `0 1px 2px 0 rgba(20, 20, 20, 0.37`,
			}}
			className={`h-32 w-full fixed transition-all duration-1000 
				${pageLoad ? `${isMenuOpen ? `-translate-y-6` : `-translate-y-16`} ` : `-translate-y-32 `}
				
				

				
				`}
		/>
	);
}

export default NaviDecoration;
