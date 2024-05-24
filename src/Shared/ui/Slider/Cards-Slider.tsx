import { FC, useEffect, useState } from 'react';
import { CardSliderTemplate } from 'src/Entities/advertising/model/CardSliderTemplate';
import { CardSimple } from 'src/Shared/ui/Slider/Card/Card-Simple';
import { CardComposite } from 'src/Shared/ui/Slider/Card/Card-Сomposite';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SliderButtons } from 'src/Shared/ui/Buttons/Slider-Buttons/Slider-Buttons.tsx';

import style from './Card-Slider.module.scss';


export type CARD_SIZE = 'tall' | 'small' | 'wide';
export type CARD_TYPE = 'simple' | 'composite';

interface SliderProps {
    cards: CardSliderTemplate[];
    slidesPerGroup?: number;
    slidesPerView?: number;
    cardSize: CARD_SIZE;
    cardType: CARD_TYPE;
    isLoading: boolean;
}

const cardsType = {
	composite: CardComposite,
	simple: CardSimple,
};

export const CardsSlider: FC<SliderProps> = ({
	cards = [],
	slidesPerGroup = 1,
	slidesPerView = 4,
	cardSize = 'tall',
	cardType = 'simple',
	isLoading,
}) => {
	const Card = cardsType[cardType];

	const getSlidesPerView = (width: number) => {
		if (width < 800) {
			if (cardSize === 'tall') return slidesPerView + 2;
			if (cardSize === 'small') return slidesPerView + 1;
			if (cardSize === 'wide') return slidesPerView + 1;
		}
		return slidesPerView;
	};

	const getSpaceBetween = (width: number) => {
		if (width < 800) {
			if (cardSize === 'tall') return 10;
			if (cardSize === 'small') return -40;
			if (cardSize === 'wide') return 50;
		}
		return 1;
	};

	const [swiperProps, setSwiperProps] = useState({
		slidesOffsetAfter: 12,
		slidesOffsetBefore: 24,
		slidesPerGroup: slidesPerGroup,
		slidesPerView: getSlidesPerView(window.innerWidth),
		spaceBetween: 1,
	});

	useEffect(() => {
		const updateSwiperProps = () => {
			const width = window.innerWidth;
			setSwiperProps((prevProps) => ({
				...prevProps,
				slidesOffsetAfter: width < 800 ? 6 : 12,
				slidesOffsetBefore: width < 800 ? 12 : 24,
				slidesPerView: getSlidesPerView(width),
				spaceBetween: getSpaceBetween(width),
			}));
		};

		updateSwiperProps();
		window.addEventListener('resize', updateSwiperProps);
		return () => {
			window.removeEventListener('resize', updateSwiperProps);
		};
	}, [slidesPerView, slidesPerGroup, cardSize]);

	return (
		<div className={style.slider}>
			<Swiper
				allowTouchMove={true}
				autoHeight={false}
				className={style.slider__swiper}
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				navigation={{
					nextEl: '.nextSlideButton',
					prevEl: '.prevSlideButton',
				}}
				speed={500}
				{...swiperProps}
			>
				{cards.map((data, i) => (
					<SwiperSlide key={i} className={style.slider__slide}>
						<Card
							cardSize={cardSize}
							sliderDescription={data.sliderDescription || ''}
							sliderHeader={data.sliderHeader || ''}
							src={data.src}
						/>
					</SwiperSlide>
				))}
				{!isLoading && <SliderButtons />}
			</Swiper>
		</div>
	);
};
