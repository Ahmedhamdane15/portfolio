import React, {
	createContext,
	useState,
	useContext,
	useCallback,
	useEffect,
} from "react";
import { getTemoignages } from "../data/temoignages";
import { generateUUIDv4 } from "../utils/generateUUID";

const TemoignageContext = createContext();

// Custom hook pour TemoignageContext
function useTemoignages() {
	const context = useContext(TemoignageContext);
	if (!context) {
		throw new Error("useTemoignages doit etre utilisé dans TemoignageProvider");
	}

	const { temoignages, setTemoignages, isLoading } = context;

	const addTemoignage = useCallback(
		(name, description) => {
			const newTemoignage = { id: generateUUIDv4(), name, description };
			setTemoignages((prevTemoignages) => [...prevTemoignages, newTemoignage]);
		},
		[setTemoignages]
	);

	const updateTemoignage = useCallback(
		(id, name, description) => {
			setTemoignages((prevTemoignages) => {
				const updatedTemoignages = prevTemoignages.map((temoignage) => {
					if (temoignage.id === id) {
						return { id, name, description };
					}
					return temoignage;
				});
				return updatedTemoignages;
			});
		},
		[setTemoignages]
	);

	return {
		temoignages,
		addTemoignage,
		updateTemoignage,
		isLoading,
	};
}

function TemoignageProvider({ children }) {
	const [temoignages, setTemoignages] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		(async function () {
			setIsLoading(true);
			const result = await getTemoignages();
			setIsLoading(false);

			setTemoignages(result);
		})();
	}, []);

	return (
		<TemoignageContext.Provider
			value={{
				temoignages,
				setTemoignages,
				isLoading,
			}}
		>
			{children}
		</TemoignageContext.Provider>
	);
}

export { TemoignageProvider, useTemoignages };
