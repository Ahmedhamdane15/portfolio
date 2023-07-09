import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ThemeSwitcher from "./ThemeSwitcher";

function Layout() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-1 ">
				<Outlet />
			</main>
			<Footer />
			<ThemeSwitcher />
		</div>
	);
}

export default Layout;
