import { CARD_SIZE } from 'src/Shared/ui/Slider/CardsSlider';

export interface CardSliderTemplate {
    src: string;
    sliderHeader?: string;
    sliderDescription?: string;
    cardSize?: CARD_SIZE;
}