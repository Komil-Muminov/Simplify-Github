import { useState } from "react";
import { products } from "../Products/CardData/Products";
import { CardList } from "../Products/CardList/CardList";
import "./Home.css";
export const Home = () => {
	const [showData, setshowData] = useState([]);
	return (
		<>
			{" "}
			<CardList products={products} />
		</>
	);
};
