import Section from "../components/Section";
import { useState } from "react";

function Projects() {

    const [filter, setFilter] = useState("todos");

 
    const conteudo = [
        {
            image: "/loja.png",
            title: "Loja Digital Store",
            description: "Aplicação web de e-commerce para gerenciamento e venda de produtos online.",
            tags: ["HTML", "CSS", "JavaScript", "React"],
            category: "frontend",
            repoLink: "https://loja-digital-store-projeto-front-4rf7tamnn.vercel.app/",
            liveLink: "https://github.com/Monaliza-Vasconcelos/loja-digital-store-projeto-frontEnd"
        }

    ]

       const filteredProjects =
        filter === "todos"
            ? conteudo
            : conteudo.filter(project => project.category === filter);

    return (
        <>
            <div className="container-principal-projects">
                <div className="container-projects">
                    <section className="sessao-um-projects">
                        <p>Projetos</p>
                        <h2>Meus projetos</h2>
                    </section>
                    <section className="sessao-dois-projects">
                        <button onClick={() => setFilter("todos")}>Todos</button>
                        <button onClick={() => setFilter("fullstack")}>FullStack</button>
                        <button onClick={() => setFilter("frontend")}>Front-End</button>
                        <button onClick={() => setFilter("backend")}>Back-End</button>
                    </section>
                </div>
                <div>
                </div>

                <div className="container-section">
                    {filteredProjects.map((project, index) => (
                        <Section
                            key={index}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            repoLink={project.repoLink}
                            liveLink={project.liveLink}
                        />
                    ))}
                </div>

            </div>
        </>
    );
}

export default Projects;