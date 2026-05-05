import Card from "../components/Card";

function Sobre() {
    const tecnologias = [
        { title: "Python", image: "src/assets/python.svg" },
        { title: "Django", image: "src/assets/django.svg" },
        { title: "React", image: "src/assets/react.svg" },
        { title: "HTML5", image: "src/assets/html.svg" },
        { title: "CSS3", image: "src/assets/css.svg" },
    ];

    return (
        <div className="container-sobre">
            <section className="sobre">
                <h2>Sobre mim</h2>
                <h3>Quem sou eu?</h3>
                <p>Sou desenvolvedora em formação com foco em back-end, utilizando principalmente Python e Django para construção de APIs e aplicações web. Tenho interesse em criar soluções práticas, bem estruturadas e com código limpo.

                    Atualmente, venho desenvolvendo projetos próprios para aprimorar minhas habilidades e expandir meus conhecimentos também no front-end, buscando me tornar uma desenvolvedora fullstack.

                    Estou em constante evolução, sempre estudando novas tecnologias e boas práticas de desenvolvimento, com o objetivo de crescer na área e contribuir em projetos reais.</p>

            </section>
            <section className="tecnologias-container">
                <p>Tecnologias que utilizo</p>
                <div className="tecnologias">
                    {tecnologias.map((tecnologia, index) => (
                        <Card key={index} title={tecnologia.title} image={tecnologia.image} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Sobre;