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
		<section style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
			<Container
				style={{
					position: "relative",
				}}
			>
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

				<div className="my-4 ">
					<div
						alt="test"
						style={{
							width: "100%",
							height: "80vh",
						}}
					/>

					<div ref={myRef}>
						<FooterBtn
							styling={{
								borderRadius: "0px 0px 8px 8px",
								position: "relative",
							}}
							onClick={showCroppedImage}
						>
							<Text>Potong Gambar</Text>
						</FooterBtn>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default CropPhotoCmp;
