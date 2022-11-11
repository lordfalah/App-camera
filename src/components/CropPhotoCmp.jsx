import React, { useCallback, useState } from "react";
import Cropper from "react-easy-crop";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";
import { Container } from "reactstrap";
import getCroppedImg from "./cropImage";
import Text from "./Text";

const CropPhotoCmp = ({ children }) => {
	const { encodeImg, setEncodeImg } = useOutletContext();
	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [rotation, setRotation] = useState(0);
	const [zoom, setZoom] = useState(1);
	const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
	const { setTakeImg } = useOutletContext();
	const navigate = useNavigate("");

	const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
		setCroppedAreaPixels(croppedAreaPixels);
	}, []);

	const showCroppedImage = useCallback(async () => {
		try {
			const croppedImage = await getCroppedImg(
				encodeImg,
				croppedAreaPixels,
				rotation
			);
			setTakeImg(croppedImage);
			navigate("/");
		} catch (e) {
			setTakeImg(encodeImg);
			navigate("/");
			return e;
		}
	}, [croppedAreaPixels, rotation, encodeImg, setTakeImg, navigate]);

	if (!encodeImg) {
		setEncodeImg("");
		return <Navigate to="/takePhoto" replace={true} />;
	}

	return (
		<section style={{ position: "relative", borderRadius: "0px 0px 8px 8px" }}>
			<Container>
				<Cropper
					image={encodeImg}
					crop={crop}
					rotation={rotation}
					zoom={zoom}
					aspect={4 / 3}
					onCropChange={setCrop}
					onRotationChange={setRotation}
					onCropComplete={onCropComplete}
					onZoomChange={setZoom}
				/>

				{children}
			</Container>

			<button
				style={{
					position: "absolute",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#002984",
					width: "100%",
					height: "2.5rem",
					bottom: "0",
					border: "none",
					textDecoration: "none",
					outline: "none",
					borderRadius: "0px 0px 8px 8px",
				}}
				onClick={showCroppedImage}
			>
				<Text>Show Result</Text>
			</button>
			<img
				src={encodeImg}
				alt="resultPhoto"
				style={{
					width: "100%",
					height: "90vh",
					objectFit: "cover",
				}}
			/>
		</section>
	);
};

export default CropPhotoCmp;
