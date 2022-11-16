import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
	const [encodeImg, setEncodeImg] = useState("");
	const [takeImg, setTakeImg] = useState("");
	return (
		<div className="layout_parent">
			<div className="layout">
				<Outlet
					context={{
						encodeImg,
						setEncodeImg,
						takeImg,
						setTakeImg,
					}}
				/>
			</div>
		</div>
	);
};

export default Layout;
