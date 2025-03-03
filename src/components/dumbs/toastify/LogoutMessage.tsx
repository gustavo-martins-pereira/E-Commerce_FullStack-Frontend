import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

interface LogoutMessageProps {
    closeToast: () => void;
}

export function LogoutMessage({ closeToast }: LogoutMessageProps) {
    return (
        <article className="flex flex-col gap-4 pl-4">
            <p>Account disconnected, please log in again to access user features again</p>

            <div className="flex gap-4">
                <Button className="btn-primary" onClick={closeToast}>Ok</Button>

                <Link to="/register-login">
                    <Button className="btn-primary" onClick={closeToast}>
                        Go to the Login page
                    </Button>
                </Link>
            </div>
        </article>
    );
};
