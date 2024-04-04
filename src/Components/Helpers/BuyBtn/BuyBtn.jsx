import "./BuyBtn.css";
import { useBusket } from "../useBusket/useBusket";
export const BuyBtn = ({ id, title, desc, img, quantity }) => {
	const { handleAddToBusket } = useBusket();
	const handlePost = async () => {
		const data = [{ id, title, desc, img, quantity }];
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
				handleAddToBusket(data);
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
