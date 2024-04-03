import { Card } from "../Card/Card";
import "./cardslist.css";
import "../ProductsMedia.css";
export const CardList = ({ products }) => {
	return (
		<>
			<section className="sections">
				<div className="container">
					<div className="cardlist__content">
						<ul className="card__list">
							{products.map((item) => (
								<li className="card__item" key={item.id}>
									<Card key={item.id} {...item} />
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};
