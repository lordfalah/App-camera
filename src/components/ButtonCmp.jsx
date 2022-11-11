import React from "react";

const ButtonCmp = ({ className, children, ...props }) => {
	const addClass = className ? className : "";
	return (
		<button
			className={addClass}
			type="button"
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#006C84",
				borderRadius: "0.5rem",
				boxShadow: "4px 4px 8px rgba(0, 41, 132, 0.25)",
				height: "2.5rem",
				border: "none",
				textDecoration: "none",
				outline: "none",
				width: "100%",
			}}
			{...props}
		>
			{children}
		</button>
	);
};

export default ButtonCmp;
