import './Subscription-Control-Options.scss'
import SubscriptionPageHeader
	from 'src/Widgets/Subscription-Page/ui/Subscription-Page-Header/Subscription-Page-Header.tsx'
import SubscriptionOptions from 'src/Features/ui/Subscription/Subscription-Options/Subscription-Options.tsx'

const SubscriptionControlOptions = () => {
	return (
		<div className='mainPageDivFinalSubControl'>
			<div className='mainPageDivSubControl'>
				<SubscriptionPageHeader />
				<SubscriptionOptions displayCount={1} />
			</div>
		</div>
	)
}

export default SubscriptionControlOptions