import { AccordionHeader } from 'src/Entities/questions/ui/Questions-Header/Accordion-Header.tsx'
import { AccordionDescription } from 'src/Entities/questions/ui/Questions-Description/Accordion-Description.tsx'
import React, { FC, useState } from 'react'
import { cn } from 'src/Shared/lib'

import style from './Questions-List-Item.module.scss'

export interface AccordionListProps {
    header: string | React.ReactNode;
    description: string | React.ReactNode;
    containerClassName?: string;
    headerContainerClassName?: string;
    isHoverEffect?: boolean;
}

export const AccordionListItem: FC<AccordionListProps> = ({
	header,
	description,
	containerClassName = '',
	headerContainerClassName = '',
	isHoverEffect = false,
}) => {
	const [isDescriptionVisible, setIsDescriptionVisible] = useState(false)

	const headerClickHandler = () => {
		setIsDescriptionVisible(!isDescriptionVisible)
	}

	return (
		<div className={cn([style.accordion, containerClassName])}>
			<AccordionHeader headerContainerClassName={headerContainerClassName} isHoverEffect={isHoverEffect} text={header}
				onClick={headerClickHandler} />
			<div
				// className={`${style.questions__description} ${!isDescriptionVisible ? style.questions__description_invisible : ''}`}>
				className={cn([style.accordion__description], { [style.accordion__description_invisible]: !isDescriptionVisible })}>
				<AccordionDescription text={description} />
			</div>
		</div>
	)
}