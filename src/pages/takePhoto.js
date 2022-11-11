import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import NavbarLink from "../components/Navbar";
import TakePhotoCmp from "../components/TakePhotoCmp";

const RouteTakePhoto = () => {
	const navigate = useNavigate("");
	return (
		<Fragment>
			<header>
				<NavbarLink onClick={() => navigate("/changeProfile")}>
					Ambil Photo
				</NavbarLink>
			</header>

			<TakePhotoCmp />
		</Fragment>
	);
};

export default RouteTakePhoto;
