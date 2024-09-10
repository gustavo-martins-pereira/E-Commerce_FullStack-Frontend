import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

export default function Accordion({ question, answer }) {
    // STATES
    const [isOpen, setIsOpen] = useState(false);

    return (
        <details
            className="group"
            open={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
        >
            <summary
                className="flex justify-between items-center relative py-4 border-y font-bold transition-colors duration-300 cursor-pointer list-none focus-visible:outline [&::-webkit-details-marker]:hidden"
                aria-expanded="false"
                aria-controls={`accordion-content-${question}`}
            >
                {question}

                <FaAngleDown
                    className="w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-180"
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