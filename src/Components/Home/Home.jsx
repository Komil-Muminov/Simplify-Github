import { useState } from "react";
import { products } from "../Products/CardData/Products";
import { CardList } from "../Products/CardList/CardList";
import RequsetLoading from "../Helpers/API/Loading/RequsetLoading";
import "./Home.css";
export const Home = () => {
	return (
		<>
			{" "}
			<CardList products={products} />
		</>
	);
};
