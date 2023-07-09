import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import { TemoignageProvider } from "./hooks/useTemoignages";
import Acceuil from "./pages/Acceuil.jsx";
import AjoutTemoignages from "./pages/AjoutTemoignages";
import Contact from "./pages/Contact";
import ProjetDetail from "./pages/ProjetDetail";
import Projets from "./pages/Projets";
import TemoignageList from "./pages/TemoignageList";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Acceuil />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/projets">
				<Route index element={<Projets />} />
				<Route path=":id" element={<ProjetDetail />} />
			</Route>
			<Route path="/temoignages">
				<Route index element={<TemoignageList />} />
				<Route path="ajout" element={<AjoutTemoignages />} />
			</Route>
		</Route>
	)
);

function App() {
	return (
		<>
			<TemoignageProvider>
				<RouterProvider router={router} />
			</TemoignageProvider>
		</>
	);
}

export default App;
