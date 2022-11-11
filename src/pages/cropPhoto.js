import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import CropPhotoCmp from "../components/CropPhotoCmp";
import NavbarLink from "../components/Navbar";

const RouteCropPhoto = () => {
	const navigate = useNavigate("");
	return (
		<Fragment>
			<header>
				<NavbarLink onClick={() => navigate("/takePhoto	")}>
					Potong Gambar
				</NavbarLink>
			</header>

			<CropPhotoCmp />
		</Fragment>
	);
};

export default RouteCropPhoto;
