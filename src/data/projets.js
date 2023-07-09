import { delay } from "../utils/delay";

const projets = [
	{
		id: "1",
		title: "Application android ",
		shortDescription: "	commande nourriture ",
		description:
			"Ce projet a pour but de faciliter au client la commande dans un restaurant afin qu'il soit livrer chez eux  ",
		image: "unnamed.png",
		category: "JavaScript",
		date: " novembre 2022",
		technologies: ["Android"],
	},
	{
		id: "2",
		title: "application bureau ",
		shortDescription: "Calculatrice ",
		description:
			"Ce projet consiste a faire une application bureau qui permet de faire divers calcul et divers operation afin de facilité plusieurs  operation mathematique au utilisateur ",
		image: "calculatrice_bg.jpg",
		category: "Python",
		date: " mars 2022",
		technologies: ["C# ", ".net"],
	},
];

// simuler une requete http pour avoir les projets
export async function getProjets() {
	await await delay(300);

	return projets;
}

// simuler une requete http pour avoir un projet en particulier
export async function getProjet(id) {
	await delay(300);

	const project = projets.find((project) => project.id === id);

	if (project === undefined) {
		throw new Error("project not found");
	}

	return project;
}
