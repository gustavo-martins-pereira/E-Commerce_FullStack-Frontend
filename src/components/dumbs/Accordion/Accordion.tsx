import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

interface AccordionProps {
    question: string;
    answer: string;
}

export function Accordion({ question, answer }: AccordionProps) {
    // STATES
    const [isOpen, setIsOpen] = useState(false);

    return (
        <details
            className="group"
            open={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
        >
            <summary
                className="flex justify-between items-center relative border-b py-4 font-bold transition-colors duration-300 cursor-pointer list-none focus-visible:outline [&::-webkit-details-marker]:hidden"
                aria-expanded={isOpen ? "true" : "false"}
                aria-controls={`accordion-content-${question}`}
            >
                {question}

                <FaAngleDown
                    className="w-4 h-4 top-1 transition duration-300 shrink-0 stroke-slate-700 group-open:rotate-180 text-accordion-arrow"
                    aria-label={isOpen ? "Collapse" : "Expand"}
                />
            </summary>

            <p
                id={`accordion-content-${question}`}
                className="my-4 leading-relaxed"
            >{answer}</p>
        </details>
    );
}