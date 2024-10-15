import React, { useState, useEffect } from "react";
import "./Loading.css";
// import Skeleton from "@mui/material/Skeleton";
// import Stack from "@mui/material/Stack";

export const RequestLoading = () => {
	const [visible, setVisible] = useState(true);

	// Анимация исчезновения после 3 секунд
	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false);
		}, 3000); // Увеличил время анимации исчезновения до 3 секунд

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{visible && (
				<div className="loading__container">
					<div className="loading__content">
						<div className="loading__spinner"></div>
						<span className="loading__message">Загрузка...</span>
					</div>
				</div>
			)}
			{/* <Stack spacing={1}>
				<Skeleton variant="text" sx={{ fontSize: "1rem" }} />
				<Skeleton variant="circular" width={40} height={40} />
				<Skeleton variant="rectangular" width={210} height={60} />
				<Skeleton variant="rounded" width={210} height={60} />
			</Stack> */}
		</>
	);
};
