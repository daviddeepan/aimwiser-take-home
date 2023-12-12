import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventList from "../EventList";
import "./HomeScreen.css";

export default function HomeScreen() {
	return (
		<Container fluid>
			<Row>
				<Col md={12} lg={4} className="scrollable-section">
					<h2>Today</h2>
					<EventList endpoint="today" />
				</Col>
				<Col md={12} lg={4} className="scrollable-section">
					<h2>This week</h2>
					<EventList endpoint="thisweek" />
				</Col>
				<Col md={12} lg={4} className="scrollable-section">
					<h2>Upcoming</h2>
					<EventList endpoint="upcoming" />
				</Col>
			</Row>
		</Container>
	);
}
