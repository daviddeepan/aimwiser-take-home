import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function EventList({ endpoint }) {
	const [events, setEvents] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`http://localhost:5000/${endpoint}`
				); // Replace with your actual port
				const data = await response.json();
				setEvents(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, [endpoint]);

	const tonavigate = (event_name) => {
		navigate(`/${event_name}`);
	};

	return (
		<div>
			{events.map((event) => (
				<Card
					key={event.id}
					className="mt-1 mb-1"
					style={({ width: "30rem" }, { overflow: "auto" })}
				>
					<Card.Body>
						<Card.Title>{event.name}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							{event.date}
						</Card.Subtitle>
						<Card.Subtitle className="mb-2 text-muted">
							{event.location}
						</Card.Subtitle>
						<Card.Text>{event.description}</Card.Text>
						<Button
							onClick={() => tonavigate(event.name)}
							variant="primary"
						>
							Explore
						</Button>
					</Card.Body>
				</Card>
			))}
		</div>
	);
}
