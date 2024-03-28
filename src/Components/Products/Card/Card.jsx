import "./cardContent.css";
export const Card = ({ title, desc, img }) => {
	return (
		<>
			<div className="cards">
				<div className="card__content flex flex-wrap flex-col ">
					<img src={img} alt="sda" className="card__img" />
					<span className="discounts_presents">ss</span>
					<p>{title}</p>
					<p>{desc}</p>
					<a>ff</a>
				</div>
			</div>
		</>
	);
};
