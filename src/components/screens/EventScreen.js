import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function EventScreen() {
	const { event_name } = useParams();
	console.log(event_name);
	const navigate = useNavigate();
	const tonavigate = () => {
		navigate(`/`);
	};

	return (
		<div className="container mt-5 mb-5 p-5 ">
			<h2 className="mt -5 mb-5">
				You are viewing the {event_name} page....
			</h2>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book. It has
				survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged. It was
				popularised in the 1960s with the release of Letraset sheets
				containing Lorem Ipsum passages, and more recently with desktop
				publishing software like Aldus PageMaker including versions of
				Lorem Ipsum
			</p>
			<Button onClick={() => tonavigate()} variant="primary">
				Back
			</Button>
		</div>
	);
}
