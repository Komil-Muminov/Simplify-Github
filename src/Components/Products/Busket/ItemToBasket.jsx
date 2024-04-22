import "./ItemToBasket.css";
import { useEffect, useState } from "react";
const BasketLength = () => {
	// Хранилище данных из серверв
	const [getProducts, setGetProducts] = useState([]);
	useEffect(() => {
		const getResponse = async () => {
			try {
				const response = await fetch("http://localhost:3000/productsServer");
				if (!response.ok) {
					console.log(`responseError:${response.statusText}`);
				} else {
					const data = await response.json();
					setGetProducts((prevProducts) => [...prevProducts, ...data]);
				}
			} catch (error) {
				console.log(`errorCath:${error}`);
			}
		};
		getResponse();
	}, []); // Пустой массив означает, что эффект выполняется только при монтировании компонента
	console.log(`getProducts:${JSON.stringify(getProducts)}`);
	console.log(`getProducts длина:${getProducts.length}`);
	return (
		<>
			{getProducts?.length > 0
				? console.log(`О да )`) && <BasketLength productsLegth={getProducts} />
				: console.log(`О нет`)}
		</>
	);
};

export default BasketLength;
