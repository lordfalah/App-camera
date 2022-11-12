import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Content from "../components/Content";
import NavbarLink from "../components/element/Navbar";

const Index = () => {
	const navigate = useNavigate("");
	return (
		<Fragment>
			<NavbarLink onClick={() => navigate("/changeProfile")}>Profil</NavbarLink>
			<Content />
		</Fragment>
	);
};

export default Index;
