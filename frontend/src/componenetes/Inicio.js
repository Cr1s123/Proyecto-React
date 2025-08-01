import React from "react";

import "../componenetes/css/inicio.css";

const Inicio = () => {
  return (
    <section className="history">
      <h1>UNIVERSIDAD NACIONAL DE PIURA</h1>
      <img src="./imagenes/EscudoUniversidad_Nacional_de_Piura.png" alt="Nuestra historia" className="history-image"/>
      <p>
        Desde nuestra fundación en <strong>1990</strong>, hemos trabajado con pasión y dedicación para ofrecer
        soluciones innovadoras a nuestros clientes. Nuestro compromiso con la calidad y la excelencia nos ha permitido
        crecer y consolidarnos como líderes en el mercado.
      </p>
      <p>
       Hoy, seguimos con la misma visión: <strong>crear un futuro mejor</strong> con productos y servicios que marcan la diferencia.
      </p>

    </section>
  );
};

export default Inicio;