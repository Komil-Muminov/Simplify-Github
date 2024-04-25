import "./BasketBtn.css";
import { useState } from "react";
import RequsetLoading from "../API/Loading/RequsetLoading";
import RequestError from "../API/Error/RequestError";
import RequestSuccess from "../API/Success/RequestSuccess";
// export const BasketBtn = () => {
export const BasketBtn = ({ id, title, desc, img, quantity }) => {
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
			} else {
				console.log(`Данные успешно отправлены ${JSON.stringify(data)}`);
				// handleAddToBusket(data);
				setRequest("Success");
			}
		} catch (error) {
			console.log(`show ERRO:${error}`);
			setRequest("Error");
		}
	};

	return (
		<>
			<button onClick={handlePost} className="buy_btn">
				Компонент Корзина
			</button>
			{request === "Error" && <RequestError />}
			{request === "Success" && <RequestSuccess />}
			{request === "loading" && <RequsetLoading />}
		</>
	);
};
