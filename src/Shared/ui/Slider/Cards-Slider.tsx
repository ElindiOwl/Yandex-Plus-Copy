import style from './Card-Slider.module.scss';
import { FC } from 'react';
import { CardSliderTemplate } from 'src/Entities/advertising/model/CardSliderTemplate';
import { CardSimple } from 'src/Shared/ui/Slider/Card/Card-Simple';
import { CardComposite } from 'src/Shared/ui/Slider/Card/Card-Сomposite';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SliderButtons } from 'src/Shared/ui/Slide-Buttons/Slider-Buttons/Slider-Buttons.tsx';

export type CARD_SIZE = 'tall' | 'small' | 'wide'
export type CARD_TYPE = 'simple' | 'composite'

interface SliderProps {
    cards: CardSliderTemplate[];
    slidesPerGroup?: number;
    slidesPerView?: number;
    cardSize: CARD_SIZE;
    cardType: CARD_TYPE;
}

const cardsType = {
    simple: CardSimple,
    composite: CardComposite,
};

export const CardsSlider: FC<SliderProps> = ({
                                                 cards = [],
                                                 slidesPerGroup = 1,
                                                 slidesPerView = 4,
                                                 cardSize,
                                                 cardType,
                                             }) => {
    const Card = cardsType[cardType];

    return (
        <div className={style.slider}>
            <div className={style.sliderOverflow}>
                <div className={style.sliderItems}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={slidesPerView}
                        slidesPerGroup={slidesPerGroup}
                        speed={700}
                    >
                        {cards.map((data, i) => (
                            <SwiperSlide key={i}>
                                <Card
                                    src={data.src}
                                    cardSize={cardSize}
                                    sliderHeader={data.sliderHeader || ''}
                                    sliderDescription={data.sliderDescription || ''}
                                />
                            </SwiperSlide>
                        ))}
                        <SliderButtons />
                    </Swiper>
                </div>
            </div>

        </div>
    );
};