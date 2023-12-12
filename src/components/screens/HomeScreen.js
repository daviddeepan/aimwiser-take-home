import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventList from "../schedules/EventList";
import "./HomeScreen.css";


export default function HomeScreen() {
	return (
		<Container fluid>
			<Row>
				<Col md={4} className="scrollable-section">
					<h2>Today</h2>
					<EventList />
				</Col>
				<Col md={4} className="scrollable-section">
					<h2>This week</h2>
					<EventList />
				</Col>
				<Col md={4} className="scrollable-section">
					<h2>Upcoming</h2>
					<EventList />
				</Col>
			</Row>
		</Container>
	);
}
