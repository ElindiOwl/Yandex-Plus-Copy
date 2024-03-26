import { useEffect, useState } from 'react';
import { AdvertisingImages } from 'src/Entities/advertising/model/Advertising-Card-Images-Types';
import { getYandexMusicImages } from 'src/Entities/advertising/api/Get-Advertising-Card-Images/Get-Music-Images';

export const useMusicImages = () => {
    const [musicImages, setMusicImages] = useState<AdvertisingImages[]>([]);

    useEffect(() => {
        const fetchMusicImages = async () => {
            const musicCardImagesDTO = await getYandexMusicImages();
            setMusicImages(musicCardImagesDTO);
        };

        fetchMusicImages();
    }, []);

    return musicImages;
};