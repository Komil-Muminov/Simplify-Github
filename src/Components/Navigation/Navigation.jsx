import { Link } from "react-router-dom";
import log from "./img/log.jpg";
import "./Navigation.css";
import "./NavMedia.css";
export const Navigation = () => {
	return (
		<>
			<section className="sections">
				<div className="container">
					<nav className="nav flex justify-between items-center">
						<div className="log__content flex items-center gap-5">
							<Link to="/">
								<img src={log} className="log_img" />
							</Link>
							<p className=" select-none">Simplify</p>
						</div>
						<div className="links__content">
							<Link to="/">Главная</Link>
						</div>
					</nav>
				</div>
			</section>
		</>
	);
};
