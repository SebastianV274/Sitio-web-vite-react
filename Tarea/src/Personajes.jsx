import './styles.css';

function Personajes() {
  return (
  <>
  <div className="personajes-bg">
    <section className="container py-5 ">
    <h2 className="text-center mb-5">Personajes Principales</h2>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/natsukisubaru.jpg" className="img-fluid shadow" alt="Subaru Natsuki" />
      </div>
      <div className="col-md-8">
        <h4>Subaru Natsuki</h4>
        <p>Protagonista transportado a un mundo desconocido. Posee la habilidad “Regreso por Muerte”, que le permite volver atrás en el tiempo cada vez que muere. Aunque carece de poderes, su determinación y voluntad lo impulsan a seguir adelante sin importar cuántas veces caiga.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/emilia.jpg" className="img-fluid shadow" alt="Emilia" />
      </div>
      <div className="col-md-8">
        <h4>Emilia</h4>
        <p>Semi-elfa candidata al trono de Lugunica. Es amable, compasiva y valiente, aunque también insegura y discriminada debido a su parecido con la Bruja de la Envidia. Tiene una fuerte conexión con Puck, su espíritu protector.</p>
      </div>
    </div>

    <div className="row align-items-center personaje">
      <div className="col-md-4 text-center">
        <img src="img/satella.jpg" className="img-fluid shadow" alt="Satella" />
      </div>
      <div className="col-md-8">
        <h4>Satella</h4>
        <p>Conocida como la Bruja de la Envidia, es una de las Brujas del Pecado y fue la responsable de causar la Gran Calamidad de hace 400 años. Es una figura misteriosa que comparte un vínculo con Subaru, ella fue la que le dio a Subaru Natsuki la autoridad desconocida como "regreso por muerte". Su poder y obsesión por él son tanto una bendición como una maldición.</p>
      </div>
    </div>

    <h2 className="text-center mt-5 mb-5">Aliados y Sirvientes</h2>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/puck.jpg" className="img-fluid shadow" alt="Puck" />
      </div>
      <div className="col-md-8">
        <h4>Puck</h4>
        <p>Un espíritu familiar de Emilia, conocido como la Bestia del Fin, se le considera uno de los Cuatro Grandes Espíritus. Toma la forma de un gato, es poderoso y sabio, pero también juguetón y a veces arrogante. Su lealtad hacia Emilia es inquebrantable, y a menudo actúa como su protector.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/roswaal.jpg" className="img-fluid shadow" alt="Roswaal L. Mathers" />
      </div>
      <div className="col-md-8">
        <h4>Roswaal L. Mathers</h4>
        <p>El noble excéntrico dueño de la mansión donde Subaru y las gemelas trabajan. Es un poderoso hechicero conmotivos misteriosos, siempre un paso adelante de los demás.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/rem.jpg" className="img-fluid shadow" alt="Rem" />
      </div>
      <div className="col-md-8">
        <h4>Rem</h4>
        <p>Sirvienta del señor Roswaal y hermana gemela de Ram. Es fuerte, leal y profundamente devota a Subaru, a quienama incondicionalmente. Su historia está marcada por la redención y la búsqueda de propósito.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/ram.jpg" className="img-fluid shadow" alt="Ram" />
      </div>
      <div className="col-md-8">
        <h4>Ram</h4>
        <p>Hermana mayor de Rem. Aunque perdió su cuerno, conserva una actitud orgullosa y directa. Es la sirvienta más cercana a Roswaal y confía plenamente en él, a la vez que protege a su hermana con gran amor.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/beatrice.jpg" className="img-fluid shadow" alt="Beatrice" />
      </div>
      <div className="col-md-8">
        <h4>Beatrice</h4>
        <p>Un poderoso espiritu que protege la Biblioteca de Conocimiento Prohibido en la mansión de Roswaal. Aunquesuele mostrarse distante, es muy protectora y desarrolla un fuerte lazo con Subaru.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/frederica.jpg" className="img-fluid shadow" alt="Frederica Baumann" />
      </div>
      <div className="col-md-8">
        <h4>Frederica Baumann</h4>
        <p>Antigua sirvienta de Roswaal y hermana mayor de Garfiel. Es amable y madura, con la habilidad detransformarse parcialmente en bestia debido a su linaje semi-bestial.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/petra.jpg" className="img-fluid shadow" alt="Petra Leyte" />
      </div>
      <div className="col-md-8">
        <h4>Petra Leyte</h4>
        <p>Una joven sirvienta de la mansión, es enérgica y optimista. Aporta alegría al entorno y tiene un fuertevínculo con los demás residentes.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/garfiel.jpg" className="img-fluid shadow" alt="Garfiel Tinsel" />
      </div>
      <div className="col-md-8">
        <h4>Garfiel Tinsel</h4>
        <p>Hermano menor de Frederica y defensor del Santuario. Tiene una personalidad fuerte, impulsiva y protectora,pero con un gran corazón. Posee una fuerza sobrehumana y puede transformarse en una bestia completa.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/otto.jpg" className="img-fluid shadow" alt="Otto Suwen" />
      </div>
      <div className="col-md-8">
        <h4>Otto Suwen</h4>
        <p>Comerciante itinerante y uno de los aliados más cercanos de Subaru. Posee la habilidad de comunicarse con cualquier animal o criatura, lo que lo convierte en un aliado ingenioso y valiente.</p>
      </div>
    </div>

      <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/fortuna.jpg" className="img-fluid shadow" alt="Fortuna" />
      </div>
      <div className="col-md-8">
        <h4>Fortuna</h4>
        <p>Tía de Emilia y figura maternal en su infancia. Su amor y sacrificio fueron vitales para la supervivencia de la joven semielfa.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/geuse.jpg" className="img-fluid shadow" alt="Geuse" />
      </div>
      <div className="col-md-8">
        <h4>Geuse Romanée-Conti</h4>
        <p>Antes de caer en la locura, fue un hombre noble y bondadoso que protegía a Emilia. Se convirtió en el Arzobispo del Pecado de la Pereza.</p>
      </div>
    </div>

    <h2 className="text-center mt-5 mb-5">Caballeros y Nobles</h2>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/crusch.jpg" className="img-fluid shadow" alt="Crusch Karsten" />
      </div>
      <div className="col-md-8">
        <h4>Crusch Karsten</h4>
        <p>Dama noble y candidata al trono. Es inteligente, justa y decidida, ganándose el respeto incluso de susoponentes.</p>
      </div>
    </div>

      <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/wilhelm.jpg" className="img-fluid shadow" alt="Wilhelm van Astrea" />
      </div>
      <div className="col-md-8">
        <h4>Wilhelm van Astrea</h4>
        <p>El Espadachín del Reino y abuelo de Reinhard. Sirviente de la candidata Crusch Karsten, es un guerrero sabio y noble, marcado por su amor hacia su esposa Theresia, a quien perdió en batalla.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/anastasia.jpg" className="img-fluid shadow" alt="Anastasia Hoshin" />
      </div>
      <div className="col-md-8">
        <h4>Anastasia Hoshin</h4>
        <p>Una astuta comerciante y candidata al trono. Usa su inteligencia y manipulación para obtener ventajaspolíticas, pero se preocupa genuinamente por sus subordinados.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/julius.jpg" className="img-fluid shadow" alt="Julius" />
      </div>
      <div className="col-md-8">
        <h4>Julius Juukulius</h4>
        <p>Caballero de Anastasia y maestro en magia espiritual. Aunque inicialmente rivaliza con Subaru, ambos terminan respetándose mutuamente.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/priscilla.jpg" className="img-fluid shadow" alt="Priscilla Barielle" />
      </div>
      <div className="col-md-8">
        <h4>Priscilla Barielle</h4>
        <p>Una de las candidatas al trono, altiva y egocéntrica. Cree que el mundo está diseñado para servirle y desea el poder absoluto. Es conocida por tener una lista de esposos fallecidos, aunque parece no importarle.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/al.jpg" className="img-fluid shadow" alt="Aldebaran" />
      </div>
      <div className="col-md-8">
        <h4>Aldebaran (Al)</h4>
        <p>Caballero de Priscilla Barielle y otro japonés invocado en el mundo de Lugunica. Es astuto, sarcástico y con un pasado misterioso.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/felt.jpg" className="img-fluid shadow" alt="Felt" />
      </div>
      <div className="col-md-8">
        <h4>Felt</h4>
        <p>Una joven ladrona de los barrios bajos que se convierte en candidata al trono. Su espíritu libre y su sentidode justicia inspiran a quienes la rodean.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/reinhard.jpg" className="img-fluid shadow" alt="Reinhard van Astrea" />
      </div>
      <div className="col-md-8">
        <h4>Reinhard van Astrea</h4>
        <p>El Caballero Divino de Lugunica, considerado el hombre más fuerte del reino. Posee innumerables bendiciones yun sentido del deber impecable.</p>
      </div>
    </div>

    <h2 className="text-center mt-5 mb-5">Brujas y Arzobispos del Pecado</h2>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/echidna.jpg" className="img-fluid shadow" alt="Echidna" />
      </div>
      <div className="col-md-8">
        <h4>Echidna</h4>
        <p>La Bruja de la Avaricia. Inteligente, curiosa y manipuladora, busca conocimiento absoluto sin considerar la moral.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/minerva.jpg" className="img-fluid shadow" alt="Minerva" />
      </div>
      <div className="col-md-8">
        <h4>Minerva</h4>
        <p>Bruja de la Ira. Aunque parece violenta, su ira surge del deseo de curar el sufrimiento del mundo.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/sekhmet.jpg" className="img-fluid shadow" alt="Sekhmet" />
      </div>
      <div className="col-md-8">
        <h4>Sekhmet</h4>
        <p>Bruja de la Pereza. Extremadamente poderosa pero demasiado apática para usar su fuerza.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/carmilla.jpg" className="img-fluid shadow" alt="Carmilla" />
      </div>
      <div className="col-md-8">
        <h4>Carmilla</h4>
        <p>Bruja de la Lujuria. Tímida y compasiva, representa la empatía extrema, capaz de sentir el dolor de todos.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/daphne.jpg" className="img-fluid shadow" alt="Daphne" />
      </div>
      <div className="col-md-8">
        <h4>Daphne</h4>
        <p>Bruja de la Gula. Creó una gran cantidad de Bestias Demoníacas en un esfuerzo por erradicar el hambre en el mundo. Sin embargo, sus creaciones se volvieron incontrolables, causando caos y destrucción en lugar de alivio.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/typhon.jpg" className="img-fluid shadow" alt="Typhon" />
      </div>
      <div className="col-md-8">
        <h4>Typhon</h4>
        <p>Bruja del Orgullo. De aspecto infantil, castiga a los “pecadores” con su toque destructivo.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/pandora.jpg" className="img-fluid shadow" alt="Pandora" />
      </div>
      <div className="col-md-8">
        <h4>Pandora</h4>
        <p>La Bruja de la Vanidad. Una entidad misteriosa capaz de alterar la realidad misma. Fría y manipuladora, fue responsable de grandes tragedias en la historia.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/hector.jpg" className="img-fluid shadow" alt="Hector" />
      </div>
      <div className="col-md-8">
        <h4>Hector</h4>
        <p>Conocido como Brujo de la Melancolía. Un ser extremadamente poderoso que enfrentó a Echidna en el pasado y cuyo poder rivaliza con el de las brujas.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/petelgeuse.jpg" className="img-fluid shadow" alt="Petelgeuse" />
      </div>
      <div className="col-md-8">
        <h4>Petelgeuse Romanée-Conti</h4>
        <p>Arzobispo de la Pereza. Fanático y retorcido, sirve a la Bruja de la Envidia en nombre del amor.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/sirius.jpg" className="img-fluid shadow" alt="Sirius" />
      </div>
      <div className="col-md-8">
        <h4>Sirius Romanée-Conti</h4>
        <p>Arzobispa de la Ira. Enloquecida por el amor y la pérdida, puede hacer que los demás compartan su dolor físico y emocional.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/regulus.jpg" className="img-fluid shadow" alt="Regulus" />
      </div>
      <div className="col-md-8">
        <h4>Regulus Corneas</h4>
        <p>Arzobispo de la Gula. Uno de los más peligrosos, con un ego inmenso y poder para detener el paso del tiempo de su cuerpo volviendolo invulnerable a cualquier cambio o daño físico.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/lye.jpg" className="img-fluid shadow" alt="Lye" />
      </div>
      <div className="col-md-8">
        <h4>Lye Batenkaitos</h4>
        <p>Hermano del medio en los Arzobispos de la Gula. Al igual que sus hermanos, puede devorar la existencia, los recuerdos e incluso los nombres de sus víctimas, borrándolos del mundo. Es cruel, excéntrico y disfruta experimentando con los límites del hambre y el olvido.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/roy.jpg" className="img-fluid shadow" alt="Roy" />
      </div>
      <div className="col-md-8">
        <h4>Roy Alphard</h4>
        <p>El hermano mayor en los arzobispos de la Gula. Imprudente y cruel, disfruta del caos y la destrucción siendo el más impulsivo del trío.</p>
      </div>
    </div>

    <div className="row align-items-center mb-4 personaje">
      <div className="col-md-4 text-center">
        <img src="img/rui.jpg" className="img-fluid shadow" alt="Rui" />
      </div>
      <div className="col-md-8">
        <h4>Rui Arneb</h4>
        <p>La hermana menor en los Arzobispos de la Gula. A diferencia de sus hermanos, Rui muestra una apariencia más calmada y racional, pero su poder es igual de aterrador. Ella puede consumir la identidad y recuerdos de otros, y al hacerlo, asimila sus personalidades.</p>
      </div>
    </div>

    <div className="personaje row align-items-center mb-5">
      <div className="col-md-4 text-center">
        <img src="img/capella.jpg" className="img-fluid shadow" alt="Capella" />
      </div>
      <div className="col-md-8">
        <h4>Capella Emerada Lugnica</h4>
        <p>Arzobispa de la Lujuria. De mente retorcida, distorsiona la belleza y el amor con sus poderes deformantes.</p>
      </div>
    </div>
  </section>
  </div>
</>
  );
}


export default Personajes;