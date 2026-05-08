function Contacts() {
    return (
        <>
            <div className="contacts-container">
                
                <section className="contacts-header">
                    <h2 className="contacts-title background_titulo tamanho_letras" >Contato</h2>

                    <h3 className="contacts-subtitle">
                        Vamos conversar?
                    </h3>

                    <p className="contacts-description">
                        Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato!
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
                    <form className="contacts-form" action="">
                        
                        <div className="contacts-input-group">
                            <input
                                className="contacts-input"
                                type="text"
                                placeholder="Nome"
                            />

                            <input
                                className="contacts-input"
                                type="email"
                                placeholder="Email"
                            />
                        </div>

                        <textarea
                            className="contacts-message"
                            type="text"
                            placeholder="Mensagem"
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