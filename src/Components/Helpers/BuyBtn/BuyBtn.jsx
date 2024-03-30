import "./BuyBtn.css";
// import { Link } from "react-router-dom";
import { products } from "../../Products/CardData/Products";

export const BuyBtn = () => {
	const handlePost = async (e) => {
		const data = products.map(({ id, title, desc, img }) => ({
			id,
			title,
			desc,
			img,
		}));
		try {
			const response = await fetch("http://localhost:3000/products", {
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			if (response.ok) {
				console.log("Данные успешно отправлены");
			}
		} catch (error) {
			console.log(error);
		}
		// Ваш код здесь.
	};
	return (
		<>
			<button onClick={handlePost} className="buy_btn">
				Компонент купить
			</button>
		</>
	);
};
