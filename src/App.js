import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Index from "./pages";
import RouteChangeProfile from "./pages/changeProfile";
import RouteCropPhoto from "./pages/cropPhoto";
import RouteTakePhoto from "./pages/takePhoto";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Index />} />
				<Route path="/changeProfile" element={<RouteChangeProfile />} />
				<Route path="/takePhoto" element={<RouteTakePhoto />} />
				<Route path="/cropPhoto" element={<RouteCropPhoto />} />
			</Route>
		</Routes>
	);
}

export default App;
