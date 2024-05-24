import { CustomAccordion } from 'src/Shared/ui/Accordion/Custom-Accordion/Custom-Accordion.tsx'
import { questionsMap } from 'src/Entities/questions/lib/Questions-Map/questions-map.tsx'

import style from './Questions.module.scss'

const Questions = () => {

	return (
		<div className={style.questions}>
			<div className={style.questions__textArea}>
				<h2 className={style.questions__text}>Остались вопросы? <br />Сейчас ответим</h2>
			</div>
			<CustomAccordion containerClassName={style.questions__accordion} headerContainerClassName={style.questions__headerContainer}
				isHoverEffect={true} mapToUse={questionsMap} />
		</div>
	)
}

export default Questions