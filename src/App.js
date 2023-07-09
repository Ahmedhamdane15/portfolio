import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Acceuil from "./pages/Acceuil.jsx";
import Contact from "./pages/Contact";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Acceuil />} />
			<Route path="/contact" element={<Contact />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
