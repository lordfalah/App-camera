import React, { Fragment } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import { Container } from "reactstrap";
import ButtonCmp from "./element/ButtonCmp";
import FooterBtn from "./element/FooterBtn";
import TakeFromGalery from "./TakeFromGalery";
import Text from "./element/Text";

const ChangeProfileCmp = () => {
	const navigate = useNavigate("");
	const { takeImg } = useOutletContext();

	const handlePhoto = () => {
		navigate("/takePhoto");
	};

	return (
		<Fragment>
			<section className="my-4 content-photo">
				<Container>
					<div
						className="img-thumbnail mb-5"
						style={{
							backgroundColor: takeImg ? null : "#E0E0E0",
							backgroundImage: `url(${takeImg})`,
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundSize: "cover",
							boxShadow: "4px 4px 8px rgba(0, 41, 132, 0.25)",
							borderRadius: "0.5rem",
							height: "21.438rem",
							borderStyle: "none",
						}}
					/>

					<ButtonCmp className="my-4" onClick={handlePhoto}>
						<Text color="#FFFFFF">Ambil Dari kamera</Text>
					</ButtonCmp>

					<TakeFromGalery />
				</Container>
			</section>
			<FooterBtn onClick={() => navigate("/")}>
				<Text>Simpan</Text>
			</FooterBtn>
		</Fragment>
	);
};

export default ChangeProfileCmp;
