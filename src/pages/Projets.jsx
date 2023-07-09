import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Chargement from "../components/LoadingIndicator";
import { getProjets } from "../data/projets.js";

function Projets() {
	const [projets, setProjets] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		(async function () {
			setIsLoading(true);
			try {
				const result = await getProjets();
				setProjets(result);
				setIsLoading(false);
			} catch (error) {
				setHasError(true);
				console.log(error);
			}
		})();
	}, []);

	if (hasError) {
		return (
			<div>
				<h1>Une erreur est survenue</h1>
			</div>
		);
	}

	if (isLoading) {
		return <Chargement />;
	}

	return (
		<div className="bg-[#F5F8FC] dark:bg-[#191C26] text-[#1a1a1a] dark:text-white py-4">
			<div className="px-4 mx-auto min-h-[90vh] container">
				<div className="mx-auto max-w-lg text-center pb-20">
					<h2 className="text-3xl font-bold sm:text-4xl">Mes projets</h2>

					<p className="mt-4 text-[#7e7e7e] dark:text-gray-300">
						<h1> vous trouverez ici deux de mes projets </h1>
					</p>
				</div>
				<div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 ">
					{projets.map((project) => (
						<Link to={`/projets/${project.id}`} key={project.id}>
							<div className="overflow-hidden transition-shadow duration-300 dark:bg-[#111319] rounded shadow-sm hover:bg-white border  dark:border-[#1e212d] dark:hover:border-[#7364D080] hover:shadow-lg cursor-pointer flex-1">
								<div className="overflow-hidden">
									<img
										src={project.image}
										className="object-cover w-full h-64 hover:scale-110 transform transition-transform duration-300"
										alt=""
									/>
								</div>
								<div className="p-5 ">
									<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
										<a
											href="/"
											className="transition-colors duration-200 text-[#6f67a3] "
											aria-label="Category"
											title="traveling"
										>
											{project.category}
										</a>
										<span className="text-gray-600">— {project.date}</span>
									</p>
									<a
										href="/"
										aria-label="Category"
										title="Visit the East"
										className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
									>
										{project.title}
									</a>
									<p className="mb-2 text-gray-400">
										{project.shortDescription}
									</p>
									<h1 className="my-4 text-xs font-semibold tracking-wide uppercase">
										Used technologies:{" "}
									</h1>
									<ul className="flex flex-wrap">
										{project.technologies.map((tech, i) => (
											<li
												key={i}
												className="mr-2 mb-2 text-xs font-semibold tracking-wide uppercase p-2 px-2 bg-[#7364D080] rounded-full text-white"
											>
												{tech}
											</li>
										))}
									</ul>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default Projets;
