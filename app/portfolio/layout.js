import Portfolio from "./page";

export default function PortfolioLayout() {

    return (
        <section>
            {/* Shared UI */}
            <nav className="portfolio-nav">
                <ul>
                    <li>Types of work</li>
                    <li>Date completed</li>
                    <li>In progress</li>
                </ul>
            </nav>
            <Portfolio />
        </section>
    )
}