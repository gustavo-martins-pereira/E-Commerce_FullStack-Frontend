import React from "react";
import { FaHome } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";
import { useLocation, Link } from "react-router-dom";

function Breadcrumb() {
    const location = useLocation();

    const breadcrumbs = location.pathname
        .split("/")
        .filter((path) => path) // Remove empty paths
        .map((path, index, array) => ({
            name: path.charAt(0).toUpperCase() + path.replace("-", " ").slice(1),
            link: `/${array.slice(0, index + 1).join("/")}`
        }));

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
                {breadcrumbs.map((breadcrumb, index) => (
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
