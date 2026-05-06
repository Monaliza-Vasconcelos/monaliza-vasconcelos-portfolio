import { Link } from "react-router-dom";

function NotFound () {
    return (
        <div className="notfound">
            <p>Ops, essa página não existe, retorne para a página principal.</p>
            <button>
                <Link to={"/"}>Início</Link>
            </button>
        </div>
    );
}

export default NotFound