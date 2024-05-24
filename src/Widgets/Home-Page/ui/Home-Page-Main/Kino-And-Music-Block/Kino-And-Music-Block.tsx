import { KinopoiskCard } from 'src/Widgets/Home-Page/ui/Home-Page-Main/Advertising-Cards/Kinopoisk-Card.tsx'
import { MusicCard } from 'src/Widgets/Home-Page/ui/Home-Page-Main/Advertising-Cards/Music-Card.tsx'

import style from './Kino-And-Music-Block.module.scss'


const KinoAndMusicBlock = () => {
	return (
		<div className={style.MainKinoMusicBlock}>
			<KinopoiskCard />
			<MusicCard />
		</div>
	)
}

export default KinoAndMusicBlock