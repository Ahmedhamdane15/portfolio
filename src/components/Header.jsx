import { Link } from "react-router-dom";
const Header = () => {
	return (
		<header className="bg-white text-[#1a1a1a] py-4 dark:bg-[#111319] dark:text-white h-[10vh] overflow-hidden">
			<div className="container mx-auto flex justify-between items-center h-full px-4">
				<Link to="/" className="text-2xl font-bold">
					Accueil
				</Link>
				<nav>
					<ul className="flex space-x-4 items-center">
						<li>
							<Link to="/projets" className="hover:text-gray-400">
								Projets
							</Link>
						</li>
						<li>
							<Link to="/contact" className="hover:text-gray-400">
								Contact
							</Link>
						</li>
						<li>
							<Link to="/temoignages" className="hover:text-gray-400">
								Témoignages
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
