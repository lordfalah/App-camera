import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import Text from "./Text";

const TakeFromGalery = () => {
	const [selectedFile, setSelectedFile] = useState();
	const { setEncodeImg } = useOutletContext();
	const [, setPreview] = useState();
	const navigate = useNavigate("");

	// create a preview as a side effect, whenever selected file is changed
	useEffect(() => {
		if (!selectedFile) {
			setPreview(undefined);
			return;
		}

		const objectUrl = URL.createObjectURL(selectedFile);
		setPreview(objectUrl);
		setEncodeImg(objectUrl);
	}, [selectedFile, setEncodeImg]);

	const onSelectFile = async (e) => {
		if (!e.target.files || e.target.files.length === 0) {
			setSelectedFile(undefined);
			return;
		}

		// I've kept this example simple by using the first image instead of multiple
		await setSelectedFile(e.target.files[0]);
		navigate("/cropPhoto");
	};

	return (
		<Fragment>
			<form>
				<label
					htmlFor="upload-photo"
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: "#006C84",
						borderRadius: "0.5rem",
						boxShadow: "4px 4px 8px rgba(0, 41, 132, 0.25)",
						height: "2.5rem",
						border: "none",
						textDecoration: "none",
						outline: "none",
						width: "100%",
						cursor: "pointer",
					}}
				>
					<Text color="#FFFFFF">Ambil Dari Gallery</Text>
				</label>
				<input
					type="file"
					name="photo"
					id="upload-photo"
					onChange={onSelectFile}
				/>
			</form>
		</Fragment>
	);
};
export default TakeFromGalery;
