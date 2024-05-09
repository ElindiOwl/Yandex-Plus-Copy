import style from './Kino-And-Music-Block.module.scss';
import { KinopoiskCard } from 'src/Widgets/Home-Page/ui/Home-Page-Main/Advertising-Cards/Kinopoisk-Card.tsx';
import { MusicCard } from 'src/Widgets/Home-Page/ui/Home-Page-Main/Advertising-Cards/Music-Card.tsx';


const KinoAndMusicBlock = () => {
    return (
        <div className={style.MainKinoMusicDiv}>
            <KinopoiskCard />
            <MusicCard />
        </div>
    );
};

export default KinoAndMusicBlock;