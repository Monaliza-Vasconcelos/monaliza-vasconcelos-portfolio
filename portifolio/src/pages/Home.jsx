import perfil from '../assets/perfil.png';
import { Link } from 'react-router-dom'; 

function Home() {
    return (
        <>
            <div className="container">
                <div className="home-container">
                    <p className="home">Olá, eu sou</p>
                    <div className="home-title">
                        <h1>Monaliza Vasconcelos</h1>
                    </div>
                    <h2 className="home">Desenvolvedora Back-end</h2>

                    <p className="home-p">Desenvolvedora em formação com foco em back-end Python e Django.
                        Construindo APIs e projetos práticos, aberta a oportunidades full-stack.</p>
                    <div className="home-button">
                        <button className="button-home-projects"><Link to={"/projetos"}>Ver projetos <i className="fas fa-arrow-right"></i></Link></button>
                        <button className="button-home-contact">Entrar em contato <i className="fas fa-envelope"></i></button>
                    </div>
                    <div className="home-icons">
                        <a href="https://www.linkedin.com/in/monaliza-vasconcelos-08a004197/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Monaliza-Vasconcelos" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
                <div className="imagem-perfil">
                    <img src={perfil} alt="Perfil" />
                </div>
            </div>
        </>
    );
}

export default Home;