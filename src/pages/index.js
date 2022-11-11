import React, { Fragment } from "react";
import Content from "../components/Content";
import NavbarLink from "../components/Navbar";

const Index = () => {
	return (
		<Fragment>
			<NavbarLink>Profile</NavbarLink>
			<Content />
		</Fragment>
	);
};

export default Index;
