import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import TakeSurvey from "./components/TakeSurvey";
import ThankYou from "./components/ThankYou";
import ViewResponses from "./components/ViewResponses";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";

function DashboardWrapper() {
	const location = useLocation();
	const { state } = location;
	const view = state ? state.view : "create";

	return <Dashboard initialView={view} />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<PrivateRoute><DashboardWrapper /></PrivateRoute>} />
        <Route path="/take_survey/:id" element={<TakeSurvey />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/survey/:id/responses" element={<ViewResponses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
