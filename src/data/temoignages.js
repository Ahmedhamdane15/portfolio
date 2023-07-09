import { delay } from "../utils/delay";

const temoignages = [
	{
		id: "1",
		name: "Mark",
		description:
			"Je tiens à partager mon expérience en travaillant avec Ahmed en tant que développeur. Ahmed est une personne extrêmement talentueuse et passionnée par son métier. Il possède une solide expertise dans plusieurs langages de programmation, notamment PHP, Java et JavaScript, ainsi qu'une connaissance approfondie des frameworks populaires tels que Laravel et React.",
	},
	{
		id: "2",
		name: "Gauthier",
		description:
			"Je suis ravi de partager mon expérience de travail avec Ahmed, un développeur exceptionnel. J'ai eu la chance de collaborer avec lui sur plusieurs projets et je suis toujours impressionné par son professionnalisme et sa compétence.",
	},
	{
		id: "3",
		name: "Olivier",
		description:
			"Ahmed est un professionnel brillant et compétent qui excelle dans son domaine.",
	},
];

// simuler une requete http pour recuperer les temoignages
export async function getTemoignages() {
	await await delay(300);

	return temoignages;
}
