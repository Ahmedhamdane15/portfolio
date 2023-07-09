import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Acceuil from "./pages/Acceuil.jsx";
import Contact from "./pages/Contact";
import ProjetDetail from "./pages/ProjetDetail";
import Projets from "./pages/Projets";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Acceuil />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/projets">
				<Route index element={<Projets />} />
				<Route path=":id" element={<ProjetDetail />} />
			</Route>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
