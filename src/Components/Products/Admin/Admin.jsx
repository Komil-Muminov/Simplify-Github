import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Admin.css";
/**
 * Надо реализовать возможность сохранение картинок на сервер
 */
const Admin = () => {
	const [formData, setFormData] = useState({
		id: uuidv4(),
		title: "",
		desc: "",
		img: null,
		quantity: 0,
	});

	const handleChange = (e) => {
		const { name, value, files } = e.target;
		if (name === "img") {
			setFormData((prev) => ({
				...prev,
				img: files[0], // Установка файла напрямую в состояние img
			}));
		} else {
			setFormData((prev) => ({
				...prev,
				[name]: value,
			}));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formDataToSend = new FormData();
		formDataToSend.append("id", formData.id);
		formDataToSend.append("title", formData.title);
		formDataToSend.append("desc", formData.desc);
		formDataToSend.append("quantity", formData.quantity);
		formDataToSend.append("img", formData.img);
		try {
			const response = await fetch("http://localhost:3000/productsServer", {
				method: "POST",
				body: formDataToSend,
			});
			if (!response.ok) {
				console.log(`Ошибка при отправке данных: ${response.status}`);
			} else {
				setFormData({ id: uuidv4(), title: "", desc: "", img: null });
				console.log("Данные успешно отправлены");
			}
		} catch (error) {
			console.log(`Ошибка при отправке данных: ${error}`);
		}
	};

	useEffect(() => {
		console.log(formData);
	}, [formData]);
	return (
		<>
			<section className="sections">
				<div className="container">
					<div className="admin__content">
						<form onSubmit={handleSubmit} className="admin_form">
							<input
								required
								onChange={handleChange}
								name="title"
								type="text"
								className="admin_input"
							/>
							<input
								required
								onChange={handleChange}
								name="desc"
								type="text"
								className="admin_input"
							/>
							<input
								required
								onChange={handleChange}
								name="quantity"
								type="number"
								className="admin_input"
							/>
							<input
								required
								onChange={handleChange}
								name="img"
								type="file"
								className="admin_input"
							/>

							<button className="btn submit_btn">Добавить товар</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Admin;
