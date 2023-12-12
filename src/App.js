import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/screens/HomeScreen";
import EventScreen from "./components/screens/EventScreen";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={<HomeScreen />} />
					<Route path="/event/:event_name" element={<EventScreen />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
