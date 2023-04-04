
const project = {
    name: "Share The Faith",
    description: "Orthodox Priest Fund for America",
    builtWith: "Headless WordPress on Atlas, React + Next.js",
}

export default function Portfolio() {
    return (
        <>
        <div className="portfolio">
            <div className="portfolio-name">
                {project.name}
            </div>
            <div className="portofolio-description">
                {project.description}
            </div>
            <div className="portfolio-builtwith">
                {project.builtWith}
            </div>
        </div>
        </>
    )
}