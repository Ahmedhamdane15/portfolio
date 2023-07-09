import React from "react";

function Contact() {
	return (
		<section className="min-h-screen bg-[#F5F8FC] dark:bg-[#191C26] text-[#1a1a1a] dark:text-white overflow-hidden">
			<div className="flex flex-col ">
				<div className="container flex flex-col flex-1 px-6 py-12 mx-auto ">
					<div className="flex-1 lg:flex lg:items-center lg:-mx-6 ">
						<div className="mt-8 lg:w-1/2 lg:mx-6">
							<div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-[#14161b] lg:max-w-xl">
								<h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">
									Formulaire de contact
								</h1>

								<form className="mt-6">
									<div className="flex-1">
										<label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
											Nom et Prenom
										</label>
										<input
											type="text"
											required
											className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-[#14161b] dark:text-gray-300 dark:border-gray-600 "
										/>
									</div>

									<div className="flex-1 mt-6">
										<label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
											addresse mail
										</label>
										<input
											type="email"
											required
											className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-[#14161b] dark:text-gray-300 dark:border-gray-600 "
										/>
									</div>

									<div className="flex-1 mt-6">
										<label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
											Objet
										</label>
										<input
											type="text"
											placeholder=""
											required
											className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-[#14161b] dark:text-gray-300 dark:border-gray-600 "
										/>
									</div>

									<div className="w-full mt-6">
										<label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
											Message
										</label>
										<textarea
											required
											className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-[#14161b] dark:text-gray-300 dark:border-gray-600 "
											placeholder="Message"
										></textarea>
									</div>

									<button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#7364D0] rounded-md focus:outline-none">
										Envoyer
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
