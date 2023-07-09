import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTemoignages } from "../hooks/useTemoignages";

function AjoutTemoignages() {
	const [data, setData] = useState({
		name: "",
		description: "",
	});

	const navigate = useNavigate();
	const { addTemoignage } = useTemoignages();

	const handleSubmit = (e) => {
		e.preventDefault();

		addTemoignage(data.name, data.description);

		navigate("/temoignages");
	};

	return (
		<section className="min-h-screen bg-[#F5F8FC] dark:bg-[#191C26] text-[#1a1a1a] dark:text-white overflow-hidden">
			<div className="container flex flex-col flex-1 px-6 py-12 mx-auto ">
				<div className="flex-1 lg:flex">
					<div className="lg:w-1/2">
						<div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-[#14161b]">
							<h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">
								Formulaire de témoignage
							</h1>

							<form className="mt-6" onSubmit={handleSubmit}>
								<div className="flex-1">
									<label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
										Name
									</label>
									<input
										value={data.name}
										onChange={(e) => setData({ ...data, name: e.target.value })}
										type="text"
										required
										className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-[#14161b] dark:text-gray-300 dark:border-gray-600 "
									/>
								</div>

								<div className="w-full mt-6">
									<label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
										Message
									</label>
									<textarea
										className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-[#14161b] dark:text-gray-300 dark:border-gray-600 "
										value={data.description}
										onChange={(e) =>
											setData({ ...data, description: e.target.value })
										}
										required
									></textarea>
								</div>

								<button
									className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#7364D0] rounded-md focus:outline-none"
									type="submit"
								>
									Envoyer
								</button>
							</form>
						</div>
					</div>
					<div className="lg:w-1/2">
						<Link
							to="/temoignages"
							className="block w-full px-6 py-3 sm:mt-6 lg:mt-0 lg:ml-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#7364D0] rounded-md focus:outline-none"
						>
							Voir les témoignages
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AjoutTemoignages;
