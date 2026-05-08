import { useState } from "react";

function Contacts() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name,
            email,
            message,
        };

        try {
            const response = await fetch(
                "https://monaliza-portfolio-api.onrender.com/api/contact/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            const result = await response.json();

            alert(result.message);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="contacts-container">

                <section className="contacts-header">
                    <h2 className="contacts-title background_titulo tamanho_letras">
                        Contato
                    </h2>

                    <h3 className="contacts-subtitle">
                        Vamos conversar?
                    </h3>

                    <p className="contacts-description">
                        Estou sempre aberto a novas oportunidades e projetos interessantes.
                        Entre em contato!
                    </p>

                    <p className="contacts-info">
                        <i className="fas fa-envelope contacts-icon"></i>
                        monalizavasconcelos889@gmail.com
                    </p>

                    <p className="contacts-info">
                        <i className="fab fa-linkedin contacts-icon"></i>
                        https://www.linkedin.com/in/monaliza-vasconcelos-08a004197/
                    </p>

                    <p className="contacts-info">
                        <i className="fab fa-github contacts-icon"></i>
                        https://github.com/Monaliza-Vasconcelos
                    </p>
                </section>

                <section className="contacts-content">

                    <form
                        className="contacts-form"
                        onSubmit={handleSubmit}
                    >

                        <div className="contacts-input-group">

                            <input
                                className="contacts-input"
                                type="text"
                                name="name"
                                placeholder="Nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <input
                                className="contacts-input"
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                        </div>

                        <textarea
                            className="contacts-message"
                            name="message"
                            placeholder="Mensagem"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />

                        <button
                            className="contacts-button"
                            type="submit"
                        >
                            Enviar mensagem
                        </button>

                    </form>

                </section>

            </div>
        </>
    );
}

export default Contacts;