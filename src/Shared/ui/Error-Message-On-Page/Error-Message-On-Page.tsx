import style from 'src/Shared/ui/Error-Message-On-Page/Error-Message-On-Page.module.scss'

export const ErrorMessageOnPage = () => {
	return (
		<>
			<div className={style.errorOnPage}>
				<p>Nothing can be found</p>
			</div>
		</>
	)
}