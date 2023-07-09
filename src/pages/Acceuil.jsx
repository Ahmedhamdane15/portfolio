import React from "react";

function Acceuil() {
	return (
		<div className="bg-[#F5F8FC] dark:bg-[#191C26] text-[#1a1a1a] dark:text-white min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
			<div className="container mx-auto">
				<div className="flex items-center justify-center h-full sticky top-0">
					<svg
						className="w-[300px] h-[300px] "
						viewBox="0 0 1000 1000"
						xmlns="http://www.w3.org/2000/svg"
					>
						<defs>
							<linearGradient id="b" gradientTransform="rotate(-45 .5 .5)">
								<stop offset="0%" stopColor="#212121" />
								<stop offset="100%" stopColor="#212121" />
							</linearGradient>
							<clipPath id="a">
								<path
									fill="currentColor"
									d="M873.5 680Q787 860 596 887t-357-77Q73 706 76.5 502t164-319Q401 68 592 106.5t279.5 216Q960 500 873.5 680Z"
								/>
							</clipPath>
						</defs>
						<g clipPath="url(#a)">
							<path
								fill="url(#b)"
								d="M873.5 680Q787 860 596 887t-357-77Q73 706 76.5 502t164-319Q401 68 592 106.5t279.5 216Q960 500 873.5 680Z"
							/>

							<image
								xlinkHref="portfolio-picture.jpg"
								width="1000"
								height="1000"
								clipPath="url(#a)"
							/>
						</g>
					</svg>
				</div>
				<h1 className="text-center text-5xl font-bold mb-4">
					<span className="text-[#a9afc3] dark:text-[#a9afc3]"> Bonjour, </span>
				</h1>
				<p className="text-center text-xl mb-4 text-[#a9afc3] dark:text-[#a9afc3]">
					Ayant un fort attrait pour le domaine informatique, ma formation m'a
					permis d'acquérir de fortes compétences et être polyvalent sur les
					concepts de langages informatiques. J'ai réussi à avoir un bagage
					solide dans divers domaines (informatique, réseaux, électronique) et
					j'aimerais me développer et me surpasser en ayant de nouvelles
					opportunités dans ces domaines.
				</p>

				<p className="text-center text-xl mb-4 text-[#a9afc3] dark:text-[#a9afc3]">
					Html, CSS , Javascript , C++ , JAVA , SQL , Mongo DB , Cassandra ,
					Android , Maintenance d'un ordinateur
				</p>

				<h2 className="text-center text-5xl font-bold mb-4">
					<span className="text-[#7364D0] font-black"> HAMDANE Ahmed </span>
				</h2>
			</div>
		</div>
	);
}

export default Acceuil;
