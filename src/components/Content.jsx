import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Text from "./element/Text";

const Content = () => {
	const { takeImg } = useOutletContext();
	const navigate = useNavigate("");
	const handleProfile = () => {
		navigate("/changeProfile");
	};

	return (
		<section className="my-4">
			<Container>
				<Row className="gap-2">
					<Col xs="2">
						<button
							onClick={handleProfile}
							type="button"
							style={{
								backgroundColor: takeImg ? null : "#E0E0E0",
								backgroundImage: `url(${takeImg})`,
								border: "none",
								textDecoration: "none",
								width: "3.5rem",
								height: "3.5rem",
								borderRadius: "0.5rem",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
								backgroundSize: "cover",
								boxShadow: "4px 4px 8px rgba(0, 41, 132, 0.25)",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							{takeImg.length === 0 && (
								<img src="/img/camera.svg" alt="icon camera" />
							)}
						</button>
					</Col>

					<Col>
						<Text color="#000000">Ambil Dari kamera</Text>
						<p
							className="mt-1"
							style={{
								fontFamily: ["Nunito", "sans-serif"],
								fontSize: "0.75rem",
								fontWeight: 400,
								lineHeight: "1rem",
							}}
						>
							Kelas 10 IPA 8
						</p>
					</Col>
				</Row>

				<article className="mt-4">
					<Row className="gap-4">
						{[1, 2, 3].map((num) => {
							return (
								<Col xs="12" key={num}>
									<div
										style={{
											width: "100%",
											height: "12.25rem",
											backgroundColor: "#002984",
											boxShadow: "4px 4px 8px rgba(0, 41, 132, 0.25)",
											borderRadius: "0.5rem",
										}}
									></div>
								</Col>
							);
						})}
					</Row>
				</article>
			</Container>
		</section>
	);
};

export default Content;
