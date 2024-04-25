import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddProducts = () => {
	type Products = {
		id: string;
		discount: number;
		title: string;
		desc: string;
	};
	const [products, setProducts] = useState<Products[]>([
		{
			id: uuidv4(),
			discount: 0,
			title: "",
			desc: "",
		},
	]);

	const handleChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setProducts((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	console.log(products);
	return (
		<>
			<section className="sections">
				<div className="container">
					<div className="products__content">
						<form action="" className="form flex gap-3">
							<input
								type="number"
								onChange={handleChange}
								className="products_discount bg-red-300"
								minLength={2}
								name="discount"
								required
							/>
							<input
								type="text"
								onChange={handleChange}
								className="products_title bg-red-300"
								name="title"
								minLength={2}
								required
							/>
							<input
								name="desc"
								type="text"
								onChange={handleChange}
								className="products_desc bg-red-300"
								minLength={2}
								required
							/>
							<button className="rounded-sm bg-red-400">Добавить товар</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default AddProducts;
