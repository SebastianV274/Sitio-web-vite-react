import './styles.css';
import { Link } from "react-router-dom";

function Inicio() { 
return (
    <>
    <div className="inicio-bg">
        <section className="Logo text-center">
            <h1 className="display-3 fw-bold">
                <span className="logo-morado">Re:</span>Zero - Starting Life in Another World
            </h1>
            <p className="lead lh-1 contorno-texto">Una historia de fantasía, tragedia y segundas oportunidades</p>
             <Link to="/historia" className="btn btn-primary btn-lg mt-3">
                Ver Historia
            </Link>
        </section>

        <section id="informacion" className="py-2 text-center">
            <div className="row align-items-center mb-5 justify-content-center">
                <div className="col-md-6">
                    <p className="fs-5 bg-dark text-white p-4 rounded shadow">
                        <strong>Re:Zero − Starting Life in Another World</strong> (Re:Zero kara Hajimeru Isekai Seikatsu)
                        es una serie japonesa de novelas ligeras escritas por <strong>Tappei Nagatsuki</strong> e ilustradas por
                        <strong> Shinichirou Otsuka</strong>. La historia sigue a <strong>Subaru Natsuki</strong>, un joven
                        que es transportado misteriosamente a otro mundo. Sin habilidades especiales, descubre que posee
                        una habilidad única y aterradora: <em>“Regreso por Muerte”</em>, que le permite regresar en el tiempo
                        cada vez que muere.
                    </p>
                </div>
                <div className="col-md-6 text-center">
                    <img src="public/img/subaruemiliatres.jpg" alt="Emilia y Subaru" className="img-fluid shadow" />
                </div>
            </div>

            <div className="row align-items-center justify-content-center">
                <div className="col-md-6 order-md-2">
                    <p className="fs-5 bg-dark text-white p-4 rounded shadow">
                        El anime fue producido por el estudio <strong>White Fox</strong> y se estrenó en <strong>2016</strong>.
                        Desde entonces, ha ganado una gran base de fans por su trama emocionalmente intensa, sus giros
                        dramáticos y su profundo desarrollo de personajes. A lo largo de las temporadas, la historia explora
                        temas como el sacrificio, el amor, el arrepentimiento y la esperanza.
                    </p>
                </div>
                <div className="col-md-6 order-md-1 text-center">
                    <img src="public/img/whitefox.jpeg" alt="ReZero White Fox" className="img-fluid shadow" />
                </div>
            </div>
        </section>

        <section className="py-5 curiosidades text-center">
            <h2 className="mb-5 text-dark">Curiosidades</h2>
            <div className="row justify-content-center g-4">
                <div className="col-md-4">
                    <div className="card shadow h-100 p-3">
                        <h5 className="card-title">1. Inspiración del autor</h5>
                        <p className="card-text">Tappei Nagatsuki comenzó publicando la historia en internet antes de ser editada profesionalmente. La idea principal nació de su fascinación por los bucles temporales y las consecuencias emocionales de morir repetidamente.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow h-100 p-3">
                        <h5 className="card-title">2. Adaptaciones</h5>
                        <p className="card-text">Además del anime, Re:Zero cuenta con OVAs, videojuegos, mangas y novelas ligeras, expandiendo el universo de Lugunica y sus personajes secundarios.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow h-100 p-3">
                        <h5 className="card-title">3. Popularidad</h5>
                        <p className="card-text">Re:Zero ha sido nominado y premiado en varias ocasiones como uno de los mejores animes de su año, destacando por su narrativa oscura y emocionalmente intensa.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</>
)
}

export default Inicio;