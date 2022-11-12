import React from "react";
import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";

const NavbarLink = ({ children, ...props }) => {
	return (
		<Navbar
			style={{
				backgroundColor: "#002984",
				fontFamily: ["Nunito", "sans-serif"],
			}}
		>
			<NavbarBrand className="my-2" {...props} style={{ cursor: "pointer" }}>
				<img src="/img/arrow.svg" alt="arrow icon" />
			</NavbarBrand>

			<Nav className="me-auto" navbar>
				<NavItem
					style={{
						color: "#FFFFFF",
						fontSize: "1.5rem",
						fontWeight: 700,
						cursor: "pointer",
					}}
					{...props}
				>
					{children}
				</NavItem>
			</Nav>
		</Navbar>
	);
};

export default NavbarLink;
