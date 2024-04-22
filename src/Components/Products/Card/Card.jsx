import "./cardContent.css";
import { Link } from "react-router-dom";
import { BasketBtn } from "../../Helpers/BuyBtn/BasketBtn";
export const Card = ({ id, title, desc, img, quantity }) => {
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
		</>
	);
};
