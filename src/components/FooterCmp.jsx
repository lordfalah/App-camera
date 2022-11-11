import React from "react";

const FooterCmp = ({ children }) => {
	return (
		<footer
			style={{
				backgroundColor: "#002984",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				boxShadow: "4px 4px 8px rgba(0, 41, 132, 0.25)",
				width: "100%",
				height: "2.75rem",
			}}
		>
			{children}
		</footer>
	);
};

export default FooterCmp;
