import { useEffect, useState } from 'react';
import { CardSliderTemplate } from '../CardSliderTemplate';
import { getYandexMusicImages } from 'src/Entities/advertising/api/Get-Advertising-Card-Images/Get-Music-Images';

export const useMusicImages = () => {
    const [musicImages, setMusicImages] = useState<CardSliderTemplate[]>([]);

    useEffect(() => {
        const fetchMusicImages = async () => {
            const musicCardImagesDTO = await getYandexMusicImages();
            setMusicImages(musicCardImagesDTO);
        };

        fetchMusicImages();
    }, []);

    return musicImages;
};