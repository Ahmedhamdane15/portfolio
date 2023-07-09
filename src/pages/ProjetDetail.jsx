import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chargement from "../components/LoadingIndicator";
import { getProjet } from "../data/projets.js";

function ProjetDetail() {
	const [projet, setProjet] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	const { id } = useParams();

	useEffect(() => {
		(async function () {
			setIsLoading(true);
			try {
				const result = await getProjet(id);
				setProjet(result);
				setIsLoading(false);
			} catch (error) {
				setHasError(true);
				console.log(error);
			}
		})();
	}, [id]);

	if (hasError) {
		return (
			<div>
				<h1>404 projet non trouvé</h1>
			</div>
		);
	}

	if (isLoading) {
		return <Chargement />;
	}

	return (
		<div className="bg-[#F5F8FC] dark:bg-[#191C26] text-[#1a1a1a] dark:text-white py-4 min-h-[90vh]">
			<div className="md:w-[80%] w-[90%] mx-auto flex flex-col justify-center gap-5 text-center md:text-left">
				<h1 className="font-bold text-4xl">{projet.title}</h1>

				<div className="max-w-[500px] max-h-[500px]">
					<img
						src={`/${projet.image}`}
						alt=""
						className="object-cover w-full h-full"
					/>
				</div>
				<p>{projet.description}</p>
				<h1 className="my-4 text-xs font-semibold tracking-wide uppercase">
					Used technologies:{" "}
				</h1>
				<ul className="flex flex-wrap md:justify-start justify-center">
					{projet.technologies.map((tech, i) => (
						<li
							key={i}
							className="px-2 py-1 mb-2 mr-2 text-xs font-semibold tracking-wide uppercase bg-gray-200 rounded-full dark:bg-[#1e212d] dark:text-gray-300"
						>
							{tech}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default ProjetDetail;
