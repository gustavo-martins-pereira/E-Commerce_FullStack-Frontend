import { Link } from "react-router-dom";

import { Button } from "@components/dumbs/Button/Button";

interface LinkArrowProps {
    url: string;
    text: string;
}

export function LinkArrow({ url, text }: LinkArrowProps) {
    return (
        <Link to={url}>
            <Button
                className="text-sunset-orange font-semibold hover:underline"
                onClick={() => {}}
            >
                {text} &gt;
            </Button>
        </Link>
    );
}