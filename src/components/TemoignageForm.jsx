import { useCallback, useState } from "react";

function TemoignageForm({ onEdit, description, name }) {
	const [data, setData] = useState({ description, name });

	const handleSubmit = useCallback(
		(e) => {
			e.preventDefault();
			onEdit({ description: data.description, name: data.name });
		},
		[data.description, data.name, onEdit]
	);

	return (
		<form onSubmit={handleSubmit}>
			<div className="rounded-xl bg-gray-50 p-6 shadow">
				<textarea
					className="w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-[#14161b] dark:text-gray-300 dark:border-gray-600"
					placeholder="Message"
					required
					value={data.description}
					onChange={(e) => setData({ ...data, description: e.target.value })}
				></textarea>
				<input
					required
					value={data.name}
					placeholder="nom"
					onChange={(e) => setData({ ...data, name: e.target.value })}
				/>
			</div>
			<button
				className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#7364D0] rounded-md focus:outline-none"
				type="submit"
			>
				Modifier
			</button>
		</form>
	);
}

export default TemoignageForm;
