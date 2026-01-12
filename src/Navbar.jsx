import { Link } from 'react-router-dom';
import './styles.css';

function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-dark bg-dark">
                <div className="container">
                <a className="navbar-brand fw-bold text-white" href="/">
                    <span className="logo-morado">Re:</span>Zero
                </a>
                <button
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="menu" className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white">Inicio</Link>
                            </li>
                        <li className="nav-item">
                            <Link to="/historia" className="nav-link text-white">Historia</Link>
                            </li>
                        <li className="nav-item">
                            <Link to="/personajes" className="nav-link text-white">Personajes</Link>
                            </li>
                    </ul>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar