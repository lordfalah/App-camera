import React from "react";

const Text = ({ color, children, ...props }) => {
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
			{...props}
		>
			{children}
		</span>
	);
};

export default Text;
