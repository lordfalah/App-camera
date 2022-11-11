import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
	const [encodeImg, setEncodeImg] = useState("");
	const [takeImg, setTakeImg] = useState("");
	return (
		<Outlet
			context={{
				encodeImg,
				setEncodeImg,
				takeImg,
				setTakeImg,
			}}
		/>
	);
};

export default Layout;
