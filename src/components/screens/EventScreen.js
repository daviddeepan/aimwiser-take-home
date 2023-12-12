import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function EventScreen() {
	const navigate = useNavigate();
	const tonavigate = () => {
		navigate(`/`);
	};

	return (
		<div className="container mt-5 mb-5 p-5 ">
			<h2 className="mt -5 mb-5">You are viewing the event page....</h2>
			<Button onClick={() => tonavigate()} variant="primary">
				Back
			</Button>
		</div>
	);
}
