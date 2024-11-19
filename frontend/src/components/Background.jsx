import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Background() {

    let dark = ['flowers', 'sunset-desert', 'ocean', 'canyon']

    const [val, setVal] = useState(1)

    function randomBG(theme) {
        setVal(Math.floor(Math.random() * theme.length))
    }

    useEffect(() => {
        randomBG(dark)
    }, [])

	return (
		<div
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				zIndex: -1, // Move it behind other content
				width: "100%",
				height: "full",
			}}>
			<img
				src={`/images/bg/dark/${dark[val]}.jpg`}
				alt="desert"
				className="object-cover w-full h-full backdrop-blur-xl"
				style={{ filter: "blur(0px)" }} // Base blur level
			/>
            <div
						className="absolute inset-0"
						style={{
							backgroundImage: ` linear-gradient( to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.6) 80%, rgba(0, 0, 0, 0.8) 90%, rgba(0, 0, 0, 1) 100% )`,
							//backdropFilter: "blur(20px)",
							//WebkitBackdropFilter: "blur(20px)",
						}}
					/>{" "}
		</div>
	);
}

export default Background;
