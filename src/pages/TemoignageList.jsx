import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import LoadingIndicator from "../components/LoadingIndicator";
import TemoignageCard from "../components/TemoignageCard";
import TemoignageForm from "../components/TemoignageForm";
import { useTemoignages } from "../hooks/useTemoignages";

function TemoignageList() {
	const { temoignages, updateTemoignage, isLoading } = useTemoignages();
	const [editedTemoignageId, setEditedTemoignageId] = useState(null);

	const handleUpdate = useCallback(
		({ name, description }) => {
			updateTemoignage(editedTemoignageId, name, description);

			setEditedTemoignageId(null);
		},
		[editedTemoignageId, updateTemoignage]
	);

	if (isLoading) {
		return <LoadingIndicator />;
	}

	if (temoignages.length === 0) {
		return (
			<div>
				il n'y a pas de commentaires veuille en ajouter un{" "}
				<Link to="/temoignages">ici</Link>
			</div>
		);
	}

	return (
		<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
			<div className="flex justify-end">
				<Link
					to="/temoignages/ajout"
					className="block mb-6 px-6 py-3  text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-[#7364D0] rounded-md focus:outline-none"
				>
					Ajouter un témoignage
				</Link>
			</div>
			<div className="grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3 xl:gap-8 auto-rows-max">
				{temoignages.map((temoignage) => (
					<div
						className="mb-8 sm:break-inside-avoid flex flex-col"
						key={temoignage.id}
					>
						{editedTemoignageId === temoignage.id ? (
							<TemoignageForm
								description={temoignage.description}
								name={temoignage.name}
								onEdit={handleUpdate}
							/>
						) : (
							<TemoignageCard
								description={temoignage.description}
								name={temoignage.name}
								onEdit={() => {
									setEditedTemoignageId(temoignage.id);
								}}
							/>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default TemoignageList;
