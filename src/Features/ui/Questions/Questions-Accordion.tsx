import {
    AccordionListItem,
} from 'src/Shared/ui/Accordion/Questions-List-Item/Accordion-List-Item.tsx';
import { FC } from 'react';

interface QuestionsAccordionProps {
    mapToUse: Record<string, { header: string; description: string; }>;
}

export const QuestionsAccordion: FC<QuestionsAccordionProps> = ({ mapToUse }) => {
    return (
        <>
            {Object.entries(mapToUse).map(([key, question]) => (
                <AccordionListItem key={key} header={question.header} description={question.description} />
            ))}
        </>
    );
};