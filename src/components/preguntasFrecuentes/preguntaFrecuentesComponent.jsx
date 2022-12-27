import "./PreguntasFrecuentesComponent.css"
export const PreguntasFrecuenteComponent = () => {

    /* (function(){
        const titleQuestions = [...document.querySelectorAll('.questions__title')];
        console.log(titleQuestions)
    
        titleQuestions.forEach(question =>{
            question.addEventListener('click', ()=>{
                let height = 0;
                let answer = question.nextElementSibling;
                let addPadding = question.parentElement.parentElement;
    
                addPadding.classList.toggle('questions__padding--add');
                question.children[0].classList.toggle('questions__arrow--rotate');
    
                if(answer.clientHeight === 0){
                    height = answer.scrollHeight;
                }
    
                answer.style.height = `${height}px`;
            });
        });
    })(); */
   

    return(
        <section className="questions container">
            <h2>Preguntas frecuentes</h2>
    <p>
       Aqui le dejamos un apartado de preguntas frecuentes las cuales solemos recibir constantemente de nuestros clientes
    </p>

    <section className="questions__container">
        <article className="questions__padding">
            <div className="questions__answer">
                <h3 className="questions__title">¿Cuanto tiempo demora?
                    <span className="questions__arrow">
                        <img src="img/arrow.svg" className="questions__img" alt="" />
                    </span>
                </h3>

                <p class="questions__show">
                    Los tiempos de demoras en cada uno de nuestros proyectos varian dependiendo el nivel de dificultad y de amplitud en cada uno de ellos. Lo cual hace dificil dar una fecha exacta, sin embargo llegando a un acuerdo con el cliente se puede entregar dichos proyectos en un lapso de tiempo estipulado, lo cual significaria entregarlo mucho antes de lo que seria lo habitual
                </p>
            </div>
        </article>

        <article class="questions__padding">
            <div class="questions__answer">
                <h3 class="questions__title">¿Nuestra forma de trabajo?
                    <span class="questions__arrow">
                        <img src="img/arrow.svg"  class="questions__img" alt="" />
                    </span>
                </h3>

                <p className="questions__show">
                    Tenemos una forma de trabajo en la cual se basa, en generar un cronograma en el cual se les ira mostrando de una manera rapida y constante los avances que se van realizando en dicho proyecto y llegar a un acuerdo para realizar una entregar pautada con los clientes.
                </p>
            </div>
        </article>

        <article className="questions__padding">
            <div className="questions__answer">
                <h3 className="questions__title">¿Nuestros Profesionales?
                    <span className="questions__arrow">
                        <img src="img/arrow.svg" className="questions__img" alt="" />
                    </span>
                </h3>

                <p className="questions__show">
                    Contamos con una larga y extensa cantidad de profesionales los cuales estaran conformados en grupos. Lo que hace a cada uno especialistas en un area facilitanto el proceso y los trabajos que incorporamos en cada uno de los proyectos que son solicitados por nuestros clientes
                </p>
            </div>
        </article>
    </section>
    </section>
    )
}