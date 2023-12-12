import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function EventScreen() {
	const { event_name } = useParams();
    console.log(event_name)
	const navigate = useNavigate();
	const tonavigate = () => {
		navigate(`/`);
	};

	return (
		<div className="container mt-5 mb-5 p-5 ">
			<h2 className="mt -5 mb-5">You are viewing {event_name} page....</h2>
			<Button onClick={() => tonavigate()} variant="primary">
				Back
			</Button>
		</div>
	);
}
