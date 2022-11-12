import React, { useCallback, useState } from "react";
import Cropper from "react-easy-crop";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";
import { Container } from "reactstrap";
import getCroppedImg from "../../utils/cropImage";
import FooterBtn from "../element/FooterBtn";
import Text from "../element/Text";

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
			await setTakeImg(croppedImage);
			navigate("/changeProfile");
		} catch (e) {
			setTakeImg("");
			navigate("/");
			return e;
		}
	}, [croppedAreaPixels, rotation, encodeImg, setTakeImg, navigate]);

	if (!encodeImg) {
		setEncodeImg("");

		return <Navigate to="/changeProfile" replace={true} />;
	}

	return (
		<section style={{ position: "relative" }}>
			<Container className="my-3">
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

				{/* {children} */}
			</Container>
			<div
				className="container"
				style={{
					position: "absolute",
					bottom: "0",
					left: 0,
					right: 0,
					margin: "0 auto",
				}}
			>
				<FooterBtn
					styling={{
						borderRadius: "0px 0px 8px 8px",
					}}
					onClick={showCroppedImage}
				>
					<Text>Potong Gambar</Text>
				</FooterBtn>
			</div>
		</section>
	);
};

export default CropPhotoCmp;
