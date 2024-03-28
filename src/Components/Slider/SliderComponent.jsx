import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "./Slider.css";
import "./SliderMedia.css";
import img from "./img/1.jpg";
import img2 from "./img/2.jpg";
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
						<img src={img} alt="" className="slider_img" />
						<a className="slider_buy-btn">Компонент купить</a>
					</SwiperSlide>

					<SwiperSlide className="slider_buy-content">
						<img src={img2} alt="" className="slider_img" />
						<a className="slider_buy-btn">Компонент купить -</a>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};
export default SliderComponent;
