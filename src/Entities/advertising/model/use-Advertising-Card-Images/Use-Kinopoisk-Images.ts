import { getKinopoiskImages } from 'src/Entities/advertising/api/Get-Advertising-Card-Images/Get-Kinopoisk-Images';
import { useEffect, useState } from 'react';
import { AdvertisingImages } from 'src/Entities/advertising/model/Advertising-Card-Images-Types';


export const useKinopoiskImages = () => {
    const [kinopoiskImages, setKinopoiskImages] = useState<AdvertisingImages[]>([]);

    useEffect(() => {
        const fetchKinopoiskImages = async () => {
            const kinopoiskCardImagesDTO = await getKinopoiskImages();
            setKinopoiskImages(kinopoiskCardImagesDTO);
        };

        fetchKinopoiskImages();
    }, []);

    return kinopoiskImages;
};