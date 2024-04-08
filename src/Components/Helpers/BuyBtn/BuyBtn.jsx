import "./BuyBtn.css";
import { useBusket } from "../useBusket/useBusket";
import { useState } from "react";
export const BuyBtn = ({ id, title, desc, img, quantity }) => {
	const { handleAddToBusket } = useBusket();
	const [request, setRequest] = useState();
	const handlePost = async () => {
		const data = [{ id, title, desc, img, quantity }];
		try {
			setRequest("loading");
			const response = await fetch("http://localhost:3000/productsServer", {
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			if (!response.ok) {
				console.log(`Ошибка ${response.status && response.statusText}`);
				setRequest("Error");
			} else {
				alert(response);
				console.log(`Данные успешно отправлены ${JSON.stringify(data)}`);
				setRequest("Success");
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
