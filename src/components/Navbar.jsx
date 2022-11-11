import React from "react";
import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import { BsArrowLeftShort } from "react-icons/bs";

const NavbarLink = ({ children, ...props }) => {
	return (
		<Navbar
			style={{
				backgroundColor: "#002984",
				fontFamily: ["Nunito", "sans-serif"],
			}}
		>
			<NavbarBrand className="my-2">
				<div
					className="rounded-circle"
					style={{
						backgroundColor: "white",
						width: "1.25rem",
						height: "1.25rem",
						display: "flex",
						justifyItems: "center",
						alignItems: "center",
					}}
				>
					<BsArrowLeftShort
						color="#002984"
						cursor="pointer"
						strokeWidth="0.3"
						{...props}
					/>
				</div>
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
