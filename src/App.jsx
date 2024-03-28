import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Errorpage } from "./Components/ErrorPage/Errorpage";
import { Navigation } from "./Components/Navigation/Navigation";
import { Footer } from "./Components/Footer/Footer";
import { Loading } from "./Components/Loading/Loading";
import SliderComponent from "./Components/Slider/SliderComponent";
function App() {
	return (
		<>
			<Navigation />
			{/* <Loading /> */}
			<SliderComponent />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<Errorpage />} />
				<Route element={<Home />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;

