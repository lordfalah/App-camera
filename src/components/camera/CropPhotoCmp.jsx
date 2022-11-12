import React, { useCallback, useEffect, useRef, useState } from "react";
import Cropper from "react-easy-crop";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";
import { Container } from "reactstrap";
import getCroppedImg from "../../utils/cropImage";
import FooterBtn from "../element/FooterBtn";
import Text from "../element/Text";

const CropPhotoCmp = () => {
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

	const myRef = useRef(null);

	// run this function from an event handler or an effect to execute scroll
	useEffect(() => {
		try {
			myRef.current.scrollIntoView();
		} catch (error) {
			<Navigate to="/changeProfile" replace={true} />;
		}
	}, [myRef]);

	if (!encodeImg) {
		setEncodeImg("");

		return <Navigate to="/changeProfile" replace={true} />;
	}

	return (
		<section style={{ position: "relative", overflow: "auto" }}>
			<Container className="my-3">
				<Cropper
					image={encodeImg}
					crop={crop}
					rotation={rotation}
					zoom={zoom}
					aspect={1 / 1}
					onCropChange={setCrop}
					onRotationChange={setRotation}
					onCropComplete={onCropComplete}
					onZoomChange={setZoom}
				/>
			</Container>
			<div
				ref={myRef}
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
					className="mb-3"
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
