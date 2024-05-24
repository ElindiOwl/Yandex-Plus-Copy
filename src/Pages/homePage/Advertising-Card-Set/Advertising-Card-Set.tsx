import KinoAndMusicBlock
	from 'src/Widgets/Home-Page/ui/Home-Page-Main/Kino-And-Music-Block/Kino-And-Music-Block'
import CashBackBlock from 'src/Widgets/Home-Page/ui/Home-Page-Main/CashBack-Block/CashBack-Block'
import { SportSeasonCard } from 'src/Widgets/Home-Page/ui/Home-Page-Main/Advertising-Cards/Sport-Season-Card'
import { PlusIdeasCard } from 'src/Widgets/Home-Page/ui/Home-Page-Main/Advertising-Cards/Plus-Ideas-Card'
import { NewInPlusCard } from 'src/Widgets/Home-Page/ui/Home-Page-Main/Advertising-Cards/New-In-Plus-Card'

export const AdvertisingCardSet = () => {
	return (
		<>
			<SportSeasonCard />
			<PlusIdeasCard />
			<NewInPlusCard />
			<KinoAndMusicBlock />
			<CashBackBlock />
		</>
	)
}