import React, { Fragment } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import CropPhotoCmp from "../components/camera/CropPhotoCmp";
import NavbarLink from "../components/element/Navbar";

const RouteCropPhoto = () => {
	const navigate = useNavigate("");
	const { encodeImg } = useOutletContext();
	return (
		<Fragment>
			<header>
				<NavbarLink onClick={() => navigate("/takePhoto	")}>
					Potong Gambar
				</NavbarLink>
			</header>

			<CropPhotoCmp>
				<img
					src={encodeImg}
					alt="resultPhoto"
					style={{
						width: "100%",
						height: "90vh",
						objectFit: "cover",
						borderRadius: "8px",
					}}
				/>
			</CropPhotoCmp>
		</Fragment>
	);
};

export default RouteCropPhoto;
