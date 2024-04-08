import "./cardContent.css";
import { BuyBtn } from "../../Helpers/BuyBtn/BuyBtn";
import { Link } from "react-router-dom";
export const Card = ({ id, title, desc, img, quantity }) => {
	return (
		<>
			<div className="cards">
				<div className="card__content flex flex-wrap flex-col ">
					<img src={img} alt="sda" className="card__img" />
					<span className="discounts_presents">Блок скидок</span>
					<Link href="#" className="card__info-title">
						{" "}
						БлокTitle - {title}
					</Link>
					<p className="card__info-desc"> Блок Desc - {desc}</p>
					<BuyBtn
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
