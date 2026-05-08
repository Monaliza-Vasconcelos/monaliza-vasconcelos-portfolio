import python from "../assets/python.svg";
import django from "../assets/django.svg";
import react from "../assets/react.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";

import Card from "../components/Card";

function Sobre() {

    const tecnologias = [
        { title: "Python", image: python },
        { title: "Django", image: django },
        { title: "React", image: react },
        { title: "HTML5", image: html },
        { title: "CSS3", image: css },
    ];

    return (
        <div className="container-sobre">

            <section className="sobre">
                <h2 className="tamanho_letras background_titulo" >Sobre mim</h2>
                <h3>Quem sou eu?</h3>

                <p>
                    Sou desenvolvedora em formação com foco em back-end,
                    utilizando principalmente Python e Django para construção
                    de APIs e aplicações web.
                </p>

            </section>

            <section className="tecnologias-container">

                <p>Tecnologias que utilizo</p>

                <div className="tecnologias">
                    {tecnologias.map((tecnologia, index) => (
                        <Card
                            key={index}
                            title={tecnologia.title}
                            image={tecnologia.image}
                        />
                    ))}
                </div>

            </section>

        </div>
    );
}

export default Sobre;