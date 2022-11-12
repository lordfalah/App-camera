import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import CropPhotoCmp from "../components/camera/CropPhotoCmp";
import NavbarLink from "../components/element/Navbar";

const RouteCropPhoto = () => {
	const navigate = useNavigate("");

	return (
		<Fragment>
			<header>
				<NavbarLink onClick={() => navigate("/changeProfile	")}>
					Potong Gambar
				</NavbarLink>
			</header>

			<CropPhotoCmp />
		</Fragment>
	);
};

export default RouteCropPhoto;
