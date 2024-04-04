import { useState } from "react";

export const useBusket = () => {
	const [busketItems, setBusketItems] = useState([]);
	const handleAddToBusket = (item) => {
		setBusketItems((prev) => [...prev, item]);
	};

	const handleRemoveItemBusket = (itemId) => {
		setBusketItems((prev) => prev.filter((item) => item.id !== itemId));
	};
	const handleClearBusket = () => {
		setBusketItems([]);
	};

	return {
		handleAddToBusket,
		handleRemoveItemBusket,
		handleClearBusket,
	};
};
