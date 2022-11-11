import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Webcam from "react-webcam";
import { Container } from "reactstrap";

const videoConstraints = {
	width: 1980,
	height: 1080,
	facingMode: "user",
};

const WebcamCapture = () => {
	const { setEncodeImg } = useOutletContext();
	const navigate = useNavigate("");

	const handleClick = (getScreenshot) => {
		const imageSrc = getScreenshot();
		setEncodeImg(imageSrc);
		navigate("/cropPhoto");
	};

	return (
		<Webcam
			audio={false}
			height={1080}
			screenshotFormat="image/jpeg"
			width={1280}
			videoConstraints={videoConstraints}
			autoPlay={true}
		>
			{({ getScreenshot }) => {
				return (
					<button
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							bottom: 50,
							marginLeft: "auto",
							marginRight: "auto",
							width: "3.5rem",
							height: "3.5rem",
							borderRadius: "100%",
							border: "none",
							textDecoration: "none",
							outline: "none",
						}}
						type="button"
						onClick={() => handleClick(getScreenshot)}
					></button>
				);
			}}
		</Webcam>
	);
};

const TakePhotoCmp = () => {
	return (
		<section className="appCamera">
			<Container className="camera my-4" style={{ position: "relative" }}>
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
