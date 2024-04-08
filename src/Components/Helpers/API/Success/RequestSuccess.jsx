import React, { useState, useEffect } from "react";
import "./RequstSuccess.css";

const RequestSuccess = () => {
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
				<div className="success__container">
					<div className="success__content">
						<span className="success__message">Данные успешно отправлены </span>
					</div>
				</div>
			)}
		</>
	);
};

export default RequestSuccess;
