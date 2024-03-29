import "./Footer.css";
import "./FooterMedia.css";
import { Link } from "react-router-dom";
import insta from "./img/insta.svg";
import whatsupp from "./img/whatsupp.svg";
import telegram from "./img/telegram.svg";

export const Footer = () => {
	return (
		<>
			<section className="sections">
				<div className="container">
					<div className="footer__content">
						{/* <span className="bg_img"></span> */}
						<div className="footer_left">
							<div className="footer_left-content">
								<h2 className="secondary__titl footer_tel-title">
									Телефоны справочной службы
								</h2>
								<Link href="tel:+992900000000" className="links footer_link">
									+992900000000
								</Link>

								<Link href="tel:+992900000000" className="links footer_link">
									+992900000000
								</Link>

								<Link
									href="mailto:info-simplify@gmail.com"
									className="links footer_tel"
								>
									info-simplify@gmail.com
								</Link>
							</div>
							<div className="footer_adress">
								<p className="footer_addres-text">
									© 2024 ҶДММ «Симплифай». г. Душанбе, 101 мкр-н, ул.
									Багаутдинова, 9
								</p>
							</div>
						</div>
						<div className="footer_center">
							<div className="footer_center-content">
								<Link className="footer_link">Каталог товаров</Link>
								<Link className="footer_link">Смартфоны</Link>
								<Link className="footer_link">Телевизоры</Link>
							</div>{" "}
						</div>
						<div className="footer_right">
							{" "}
							<div className="footer_right-content">
								<h2 className="secondary__title">Мы в соцмедиа</h2>
								<div className="social_icons-content">
									<Link className="footer_social">
										<img src={insta} alt="instagram" />
									</Link>

									<Link className="footer_social">
										<img src={whatsupp} alt="whatsupp" />
									</Link>
									<Link className="footer_social">
										{" "}
										<img src={telegram} alt="telegram" />
									</Link>
								</div>
							</div>
						</div>
						<p className="footer_author">© Комил Муминов</p>
					</div>
				</div>
			</section>
		</>
	);
};
