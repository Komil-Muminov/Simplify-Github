import { products } from "../Products/CardData/Products";
import { CardList } from "../Products/CardList/CardList";
import "./Home.css";
export const Home = () => {
	return (
		<>
			{" "}
			<CardList products={products} />
		</>
	);
};
