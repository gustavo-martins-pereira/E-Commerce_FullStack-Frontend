import { FaHome } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";
import { useLocation, Link } from "react-router-dom";

interface BreadcrumbItem {
    name: string;
    link: string;
}

function Breadcrumb(): JSX.Element {
    const location = useLocation();

    const blacklist: string[] = [
        "/dashboard/manage-products/edit"
    ];

    const breadcrumbs: BreadcrumbItem[] = location.pathname
        .split("/")
        .filter((path: string) => path) // Remove empty paths
        .map((path: string, index: number, array: string[]) => {
            let fullPath = `/${array.slice(0, index + 1).join("/")}`;

            return {
                name: path.charAt(0).toUpperCase() + path.replace("-", " ").slice(1),
                link: fullPath,
            };
        })
        .filter((path: BreadcrumbItem) => {
            for(let item of blacklist) {
                return path.link !== item;
            }
        });

    return (
        <nav className="p-6 px-section overflow-auto" aria-label="Breadcrumb">
            <ol className="flex list-none items-stretch gap-2">
                {/* HOME BREADCRUMB */}
                <li className="flex items-center gap-2">
                    <Link
                        to="/"
                        className="flex items-center gap-1 transition-colors hover:text-icon-primary"
                    >
                        <FaHome size="2rem" />
                    </Link>
                </li>

                {/* DYNAMIC BREADCRUMBS */}
                {breadcrumbs.map((breadcrumb: BreadcrumbItem, index: number) => (
                    <li
                        key={index}
                        className="flex items-center gap-2 text-xl"
                    >
                        <FaGreaterThan />

                        {index === breadcrumbs.length - 1 ? (
                            // Current page breadcrumb without link
                            <span className="pointer-events-none text-breadcrumb-inactive">
                                {breadcrumb.name}
                            </span>
                        ) : (
                            <Link
                                to={breadcrumb.link}
                                className="transition-colors hover:text-icon-primary"
                            >
                                {breadcrumb.name}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}

export { Breadcrumb };
