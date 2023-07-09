import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Acceuil from "./pages/Acceuil.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Acceuil />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
