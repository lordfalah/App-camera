import React from "react";

const Text = ({ color, children }) => {
	const addColor = color ? color : "#FFFFFF";
	return (
		<span
			className="text"
			style={{
				color: addColor,
				fontFamily: ["Nunito", "sans-serif"],
				fontSize: "0.75rem",
				fontWeight: 700,
				lineHeight: "1rem",
			}}
		>
			{children}
		</span>
	);
};

export default Text;
