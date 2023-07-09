import { Link } from "react-router-dom";
const Header = () => {
	return (
		<header className="bg-white text-[#1a1a1a] py-4 dark:bg-[#111319] dark:text-white h-[10vh] overflow-hidden">
			<div className="container mx-auto flex justify-between items-center h-full px-4">
				<Link to="/" className="text-2xl font-bold">
					Accueil
				</Link>
			</div>
		</header>
	);
};

export default Header;
