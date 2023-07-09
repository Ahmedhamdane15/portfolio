import { IconPencil } from "@tabler/icons-react";

function TemoignageCard({ onEdit, description, name }) {
	return (
		<div className="relative flex-1 flex flex-col">
			<IconPencil
				className="w-6 h-6 text-gray-400 absolute top-2 right-2 cursor-pointer"
				onClick={onEdit}
			/>
			<blockquote className="rounded-xl bg-gray-50 p-6 shadow flex-1">
				<p className="leading-relaxed text-gray-700">{description}</p>
			</blockquote>
			<div className="mt-4 flex items-center gap-4">
				<div className="text-sm">
					<p className="font-medium">{name}</p>
				</div>
			</div>
		</div>
	);
}

export default TemoignageCard;
