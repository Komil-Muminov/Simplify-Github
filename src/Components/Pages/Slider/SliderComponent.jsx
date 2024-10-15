import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "./Slider.css";
import "./SliderMedia.css";
import log from "./img/log.jpg";
import slog from "./img/slog.png";
import kit from "./img/kit.jpg";
const SliderComponent = () => {
	return (
		<div className="slider__content">
			<div className="slider__content">
				<Swiper
					aria-label="Слайдер"
					navigation={true}
					modules={[Navigation]}
					className="mySwiper"
				>
					<SwiperSlide className="slider_buy-content">
						<Link>
							<img src={slog} alt="слоган" className="slider_img" />
						</Link>
					</SwiperSlide>

					<SwiperSlide className="slider_buy-content">
						<Link>
							<img src={log} alt="логотип" className="slider_img" />
						</Link>
					</SwiperSlide>

					<SwiperSlide className="slider_buy-content">
						<Link>
							<img src={kit} alt="кит" className="slider_img" />
						</Link>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};
export default SliderComponent;
