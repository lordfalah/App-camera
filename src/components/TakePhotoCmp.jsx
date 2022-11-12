import React from "react";
import { Container } from "reactstrap";
import WebcamCapture from "./camera/WebcamCapture";

const TakePhotoCmp = () => {
	return (
		<section className="appCamera">
			<Container className="camera mt-3 mb-2" style={{ position: "relative" }}>
				<WebcamCapture />
				<img
					src="img/layer.svg"
					alt="layer"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
						margin: "auto",
					}}
				/>
			</Container>
		</section>
	);
};

export default TakePhotoCmp;
