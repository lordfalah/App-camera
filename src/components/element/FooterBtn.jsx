import React from "react";

const FooterBtn = ({ className, children, styling, ...props }) => {
	const addClass = className ? className : "";
	const addStyle = styling ? styling : null;
	return (
		<button
			className={addClass}
			{...props}
			type="button"
			style={{
				...addStyle,
				backgroundColor: "#002984",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				boxShadow: "4px 4px 8px rgba(0, 41, 132, 0.25)",
				width: "100%",
				height: "2.75rem",
				border: "none",
				textDecoration: "none",
				outline: "none",
			}}
		>
			{children}
		</button>
	);
};

export default FooterBtn;
