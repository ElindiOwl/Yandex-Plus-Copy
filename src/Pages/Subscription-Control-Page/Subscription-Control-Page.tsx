import Header from 'src/Widgets/header/Header'
import SubscriptionControlOptions
	from 'src/Widgets/Subscription-Page/ui/Subscription-Control-Options/Subscription-Control-Options.tsx'
import Footer from 'src/Widgets/footer/Footer'


function SubscriptionControlPage() {

	return (
		<>
			{/*добавить wrapper*/}
			<Header isScrollableStyle={false} />
			<SubscriptionControlOptions />
			<Footer />
		</>
	)
}

export default SubscriptionControlPage