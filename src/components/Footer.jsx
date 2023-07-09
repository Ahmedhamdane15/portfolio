import React from "react";

function Footer() {
	return (
		<div className="bg-[#F5F8FC] dark:bg-black">
			<div className="flex items-center justify-center container flex-col xl:flex-row py-6 lg:px-8 mx-auto">
				<span
					className="text-sm text-gray-500 text-center dark:text-gray-400
				"
				></span>
				<div className="flex items-center justify-center mt-4 space-x-6">
					<a
						href="https://github.com/Ahmedhamdane15"
						target="_blank"
						rel="noreferrer"
					>
						Github
					</a>
					<a
						href="https://www.linkedin.com/in/ahmed-hamdane-8761301a7/"
						target="_blank"
						rel="noreferrer"
					>
						Linkedin
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
