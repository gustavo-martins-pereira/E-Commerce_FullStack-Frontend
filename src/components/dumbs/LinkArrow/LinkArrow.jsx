import { Link } from "react-router-dom";

import { Button } from "@components/dumbs/Button/Button";

export function LinkArrow({ url, text }) {
    return (
        <Link to={url}><Button className="text-sunset-orange font-semibold hover:underline">{text} &gt;</Button></Link>
    );
}