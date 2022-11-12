import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import ChangeProfileCmp from "../components/ChangeProfile";
import NavbarLink from "../components/element/Navbar";

const RouteChangeProfile = () => {
	const navigate = useNavigate("");
	return (
		<Fragment>
			<header>
				<NavbarLink onClick={() => navigate("/")}>Ganti Foto Profil</NavbarLink>
			</header>
			<ChangeProfileCmp />
		</Fragment>
	);
};

export default RouteChangeProfile;
