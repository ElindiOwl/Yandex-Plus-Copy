import {
    AccordionListItem,
} from 'src/Shared/ui/Accordion/Questions-List-Item/Accordion-List-Item.tsx';
import { FC } from 'react';

interface QuestionsAccordionProps {
    mapToUse: Record<string, { header: string; description: string; }>;
    containerClassName: string;
    isHoverEffect?: boolean;
}

export const QuestionsAccordion: FC<QuestionsAccordionProps> = ({
                                                                    mapToUse,
                                                                    containerClassName,
                                                                    isHoverEffect = false,
                                                                }) => {
    return (
        <>
            {Object.entries(mapToUse).map(([key, question]) => (
                <AccordionListItem key={key} header={question.header} description={question.description}
                                   containerClassName={containerClassName} isHoverEffect={isHoverEffect} />
            ))}
        </>
    );
};