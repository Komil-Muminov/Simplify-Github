import "./cardContent.css";
import { BuyBtn } from "../../Helpers/BuyBtn/BuyBtn";
export const Card = ({ title, desc, img }) => {
	return (
		<>
			<div className="cards">
				<div className="card__content flex flex-wrap flex-col ">
					<img src={img} alt="sda" className="card__img" />
					<span className="discounts_presents">Блок скидок</span>
					<p className="card__info-title"> Блок с Title и Desc - {title}</p>
					<p className="card__info-desc"> Блок с Title и Desc - {desc}</p>
					<BuyBtn />
					{/* <a className="btn buy_btn">Кнопка купить</a> */}
				</div>
			</div>
		</>
	);
};
