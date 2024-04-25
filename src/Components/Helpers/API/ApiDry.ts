// import { useEffect } from "react";
const getProducts = async (apiProductsBasket) => {
	try {
		const response = await fetch(apiProductsBasket);
		const responseData = await response.json();
		if (!response.ok) {
			console.log(
				`!response.ok error is ${response.statusText && response.status}`,
			);
		}

		return responseData;
	} catch (error) {
		console.log(`Error is :${error}`);
	}
	return [];
};

export { getProducts };
