import "./BuyBtn.css";
// import { Link } from "react-router-dom";
import { products } from "../../Products/CardData/Products";
import { useEffect } from "react";

export const BuyBtn = () => {
	const handlePost = async () => {
		const data = products.map(({ id, title, img, desc }) => ({
			id,
			title,
			img,
			desc,
		}));
		try {
			const response = await fetch("http://localhost:3000/productsServer", {
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			if (!response.ok) {
				console.log(`Ошибка ${response.status && response.statusText}`);
			} else {
				console.log(`Данные успешно отправлены ${JSON.stringify(data)}`);
			}
		} catch (error) {
			console.log(`show ERRO:${error}`);
		}
	};
	return (
		<>
			<button onClick={handlePost} className="buy_btn">
				Компонент купить
			</button>
		</>
	);
};
