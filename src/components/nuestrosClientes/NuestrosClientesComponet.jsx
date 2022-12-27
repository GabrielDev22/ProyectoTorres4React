import "./NuestrosClientesComponent.css"
export const NuestrosClientesComponent = () => {

    /* let slider = document.querySelector(".clientes-contenedor")
    let sliderIndividual = document.querySelectorAll(".clientes__slider")
    let contador = 1;
    let width = sliderIndividual[0].clientWidth;
    let intervalo = 7000;

    window.addEventListener('resize', function(){
        width = sliderIndividual[0].clientWidth;
    })

    setInterval(function(){
        slides();
    },intervalo);

    function slides(){
        slider.style.transform = "translate("+(-width*contador)+"px)";
        slider.style.transition = "transform .8s";
        contador++;

        if(contador === sliderIndividual.length){
            setTimeout(function(){
                slider.style.transform = "translate(0px)";
                slider.style.transition = "transform 0s";
                contador=1;
            },7000)
        }
    } */

    return(
        <div>
            <h2>Nuestros Clientes</h2>

            <section className="clientes__container" id="clientes__container">
                <div className="clientes-contenedor">
                    <div className="clientes__slider">
                        <img className="imagen__clientes" src="img/img9.jpg" alt="" />
                            <p>
                                Mi nombre es Yeni Alvarez y gracias a Businnes Tecnology y a su increibles habilidades y capacidades en el mundo tecnologico pude llevar a cabo un proyecto el cual termino dando como resultado mejorar la calidad de vida de las personas y dandoles herramientas para facilitar su trabajo, gracias a ellos miles de personas han podido ahorrar tiempo, trabajo y dinero entregandoles una aplicacion donde consiguen todas las herramientas que necesitan
                            </p>
                    </div>

                    <div className="clientes__slider">
                        <img className="imagen__clientes" src="img/img10.jpg" alt="" />
                            <p>
                                Mi nombre es Jordan Alexander gracias a Businnes Tecnology pude por fin implementar y estructuras un modelo de exito en el mundo tecnologicos, fue un proyecto de muchos años pero gracias a ellos pude implementarlo y causar un gran impacto en el mundo gracias a las herramientas que eran obtenidas en las computadoras para asi mejorar su funcionamientos
                            </p>
                    </div>

                    <div className="clientes__slider">
                        <img className="imagen__clientes" src="img/img11.jpg" alt="" />
                            <p>
                                Mi nombre es Andreina Gonzalez, gracias a Businnes Tecnology y a su grandiosa guia pude por fin montar mi negocio digital y hacer que este se posicionara y se diera a conocer a nivel mundial, teniendo la capacidad de vender mis productos no solo en mi pais si que pudiera llegar a cualquier pais.
                            </p>
                    </div>

                    <div className="clientes__slider">
                        <img className="imagen__clientes" src="img/img12.jpg" alt="" />
                            <p>
                                Mi nombre es Enrique Reyes, gracias a Businnes Tecnology pude lograr crear una pagina web y aplicacion en la cual podia ayudar a miles de persoans a que pudieran conectarse y chatear con cualquier persoan desde cualquier parte del mundo. Fue un proyecto bastante dificil de llevar a cabo pero por su experiencia y conocimientos facilitaron en muchos aspectos el trabajo dando como resultado. La creacion de una aplicacion que conecta a las personas  
                            </p>
                    </div>
                </div> 
            </section>
        </div>
    )
}