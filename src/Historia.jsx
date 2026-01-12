import './styles.css';

function Historia() {
  return (
<>
  <div className="historia-bg">
   <header className="text-center">
    <h1 className="display-4 fw-bold">Historia de Re:Zero</h1>
    <p className="lead text-black fw-bold">Descubre los diferentes arcos de la historia y cómo Subaru enfrenta su destino una y otra vez.</p>
  </header>

 <main className="container my-5">
    <h2 className="text-center mb-4">Arcos Principales</h2>
    
    <div className="accordion" id="historiaReZero">
      
      <div className="accordion-item">
        <h2 className="accordion-header" id="tituloUno">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#arcoUno" aria-expanded="true" aria-controls="arcoUno">
            Arco 1: El Tumultuoso Primer Día
          </button>
        </h2>
        <div id="arcoUno" className="accordion-collapse collapse show" aria-labelledby="tituloUno" data-bs-parent="#historiaReZero">
          <div className="accordion-body">
            <div className="row">
              <div className="col-md-4"><img src="/img/lugunicadia.jpg" alt="Lugunicadia" className="arc-img" /></div>
              <div className="col-md-4"><img src="/img/subaruemiliauno.jpg" alt="Subaru y Emilia Arco uno" className="arc-img" /></div>
              <div className="col-md-4"><img src="/img/reinharduno.jpg" alt="Reinhard Arco uno" className="arc-img" /></div>
            </div>
            <p>Al regresar a casa de la tienda de conveniencia, Natsuki Subaru se encuentra repentinamente transportado a un mundo nuevo y misterioso. Allí, en el Reino de Lugunica, cree ser un protagonista con grandes poderes, pero pronto descubre que no lo es. Golpeado por matones y salvado por una chica de cabello plateado, Subaru decide ayudarla a recuperar su insignia robada. Sin embargo, ambos son asesinados. Cuando despierta nuevamente, descubre que ha retrocedido en el tiempo. Así nace su desesperada lucha contra el destino con su poder “Regreso por Muerte”.</p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="tituloDos">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#arcoDos" aria-expanded="false" aria-controls="arcoDos">
            Arco 2: Semana Turbulenta
          </button>
        </h2>
        <div id="arcoDos" className="accordion-collapse collapse" aria-labelledby="tituloDos" data-bs-parent="#historiaReZero">
          <div className="accordion-body">
            <div className="row">
              <div className="col-md-4"><img src="img/mansionroswaal.jpg" alt="Mansión Roswaal" className="arc-img" /></div>
              <div className="col-md-4"><img src="img/remdos.jpg" alt="Rem Arco Dos" className="arc-img" /></div>
              <div className="col-md-4"><img src="img/ulgarm.jpg" alt="Ulgarm Bestia" className="arc-img" /></div>
            </div>
            <p>Tras salvar a Emilia, Subaru despierta en la Mansión Roswaal, donde comienza a trabajar como mayordomo junto a las gemelas Rem y Ram. Sin embargo, en su quinto día, es asesinado misteriosamente. Con cada muerte, vuelve al primer día y repite los mismos eventos en busca de respuestas. Entre la desconfianza y el miedo, Subaru intenta descubrir al asesino y proteger a todos, enfrentando su fragilidad emocional y los horrores de sus repeticiones.</p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="tituloTres">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#arcoTres" aria-expanded="false" aria-controls="arcoTres">
            Arco 3: Regreso a la Capital
          </button>
        </h2>
        <div id="arcoTres" className="accordion-collapse collapse" aria-labelledby="tituloTres" data-bs-parent="#historiaReZero">
          <div className="accordion-body">
            <div className="row">
              <div className="col-md-4"><img src="img/arbolflugel.jpg" alt="Arbol Flugel" className="arc-img" /></div>
              <div className="col-md-4"><img src="img/ballenablanca.jpg" alt="Ballena Blanca" className="arc-img" /></div>
              <div className="col-md-4"><img src="img/petelgeusetres.jpg" alt="Petelgeuse Arco Tres" className="arc-img" /></div>
            </div>
            <p>Subaru regresa a la Capital Real para presenciar la Selección Real, pero su impulsividad provoca conflictos con Emilia. Pronto, la Mansión Roswaal y la Aldea Arlam son atacadas por el Culto de la Bruja y la Ballena Blanca. Con solo Rem a su lado, Subaru debe reunir aliados de los demás campamentos para derrotar a los Arzobispos del Pecado y superar su desesperación.</p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="tituloCuatro">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#arcoCuatro" aria-expanded="false" aria-controls="arcoCuatro">
            Arco 4: Contrato Eterno
          </button>
        </h2>
        <div id="arcoCuatro" className="accordion-collapse collapse" aria-labelledby="tituloCuatro" data-bs-parent="#historiaReZero">
          <div className="accordion-body">
            <div className="row">
              <div className="col-md-4"><img src="img/santuario.jpg" alt="Santuario" className="arc-img" /></div>
              <div className="col-md-4"><img src="img/echidnacuatro.jpg" alt="Echidna Arco Cuatro" className="arc-img" /></div>
              <div className="col-md-4"><img src="img/satellacuatro.jpg" alt="Satella Arco Cuatro" className="arc-img" /></div>
            </div>
            <p>Devastado por la pérdida de Rem, Subaru viaja con Emilia y Otto al Santuario. Allí, deben superar las pruebas impuestas por Echidna, la Bruja de la Avaricia. Mientras Subaru enfrenta su pasado y sus emociones más oscuras, los ataques a la mansión y la amenaza del Gran Conejo ponen a prueba su determinación. Finalmente, Subaru forma un “Contrato Eterno” con Emilia, simbolizando su crecimiento y compromiso.</p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="tituloCinco">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#arcoCinco" aria-expanded="false" aria-controls="arcoCinco">
            Arco 5: Las Estrellas que Graban la Historia
          </button>
        </h2>
        <div id="arcoCinco" className="accordion-collapse collapse" aria-labelledby="tituloCinco" data-bs-parent="#historiaReZero">
          <div className="accordion-body">
            <div className="row">
              <div className="col-md-4"><img src="img/priestella.jpg" alt="Priestella" className="arc-img" /></div>
              <div className="col-md-4"><img src="img/capelladragon.jpg" alt="Capella Dragon" className="arc-img" /></div>
              <div className="col-md-4"><img src="img/garfielvskurgan.jpg" alt="Garfiel contra Kurgan" className="arc-img" /></div>
            </div>
            <p>Un año después, Anastasia invita al Campamento de Emilia a Priestella. Allí, los distintos campamentos se reúnen, pero la ciudad es tomada por los Arzobispos del Pecado. Atrapado entre enemigos y aliados, Subaru debe unir a todas las facciones para liberar la ciudad y grabar su historia en las estrellas, jurando continuar sin importar cuántas veces muera.</p>
          </div>
        </div>
      </div>

    </div>
  </main>
  </div>
</>
  );
}
export default Historia;