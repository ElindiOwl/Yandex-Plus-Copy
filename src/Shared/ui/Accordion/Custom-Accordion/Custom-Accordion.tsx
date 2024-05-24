import {
	AccordionListItem,
} from 'src/Shared/ui/Accordion/Questions-List-Item/Accordion-List-Item.tsx'
import { FC } from 'react'
import { AccordionMap } from 'src/Shared/lib'

interface QuestionsAccordionProps {
    mapToUse: AccordionMap;
    containerClassName: string;
    headerContainerClassName?: string;
    isHoverEffect?: boolean;
}

export const CustomAccordion: FC<QuestionsAccordionProps> = ({
	mapToUse,
	containerClassName,
	headerContainerClassName = '',
	isHoverEffect = false,
}) => {
	return (
		<>
			{Object.entries(mapToUse).map(([key, question]) => (
				<AccordionListItem key={key} containerClassName={containerClassName} description={question.description}
					header={question.header} headerContainerClassName={headerContainerClassName}
					isHoverEffect={isHoverEffect} />
			))}
		</>
	)
}