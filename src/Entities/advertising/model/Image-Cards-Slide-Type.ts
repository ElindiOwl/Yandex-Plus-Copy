import { FC } from 'react';

export interface ImageCardsSlideProps {
    cardImagesFunction: () => { src: string }[];
    itemsToSlide: number;
    cardSize: 'tall' | 'small';
    cardHeaderText: FC;
}