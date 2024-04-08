import React, { useState, useEffect } from "react";
import "./RequestError.css";

const RequestError = () => {
	const [visible, setVisible] = useState(true);

	// Анимация исчезновения после 3 секунд
	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{visible && (
				<div className="error__container">
					<div className="error__content">
						<span className="error__message">Ошибка при отправке данных </span>
					</div>
				</div>
			)}
		</>
	);
};

export default RequestError;
