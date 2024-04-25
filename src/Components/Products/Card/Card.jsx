import "./cardContent.css";
import { Link } from "react-router-dom";
import { BasketBtn } from "../../Helpers/BuyBtn/BasketBtn";
import { useEffect, useState } from "react";
import { getProducts } from "../../Helpers/API/ApiDry";
export const Card = ({ id, title, desc, img, quantity }) => {
	const apiProductsBasket = "http://localhost:3000/productsServer";

	const [basketData, setBasketData] = useState([]);

	getProducts(apiProductsBasket);
	const handlePromise = async () => {
		setBasketData(await getProducts(apiProductsBasket));
	};

	useEffect(() => {
		handlePromise();
	}, []);

	return (
		<>
			<div className="cards">
				<div className="card__content flex flex-wrap flex-col ">
					<img src={img} alt="товар" className="card__img" />
					<span className="discounts_presents">Блок скидок</span>
					<Link href="#" className="card__info-title">
						{" "}
						БлокTitle - {title}
					</Link>
					<p className="card__info-desc"> Блок Desc - {desc}</p>
					<BasketBtn
						id={id}
						title={title}
						desc={desc}
						img={img}
						quantity={quantity}
					/>
				</div>
			</div>
			<div>
				{basketData.map((item) => (
					<img key={item.id} src={item.img}></img>
				))}
			</div>
		</>
	);
};
