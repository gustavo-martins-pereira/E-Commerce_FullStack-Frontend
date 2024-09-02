import { useNavigate } from "react-router-dom";

export function NotFound() {
    const navigator = useNavigate();

    return (
        <main>
            <section className="section flex flex-col items-start gap-4">
                <p className="font-bold">Oops!</p>
                <h1>Page Not Found</h1>
                <p>The page you are looking for could not be found. Please check the URL and try again.</p>

                <button className="btn btn-primary" onClick={() => navigator("/")}>Back</button>
            </section>

            <article className="section flex flex-col items-start gap-4 md:flex-row md:justify-between">
                <h2>Discover Our Latest Products</h2>

                <div className="flex flex-col gap-4">
                    <p>Explore our wide range of high-quality products and find exactly what you need.</p>

                    <div className="flex gap-4">
                        <button className="btn btn-secondary" onClick={() => navigator("/")}>Homepage</button>
                    </div>
                </div>
            </article>
        </main>
    );
}
