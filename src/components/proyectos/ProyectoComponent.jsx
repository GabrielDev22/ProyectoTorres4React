import "./ProyectoComponent.css"
export const ProyectoComponent = () => {
    return(
        <div>
              <h2>Proyectos</h2>

            <section class="proyecto__container" id="proyecto__container">
                <div class="proyecto">
                    <img src="img/img15.jpg" class="imagen__proyectos" alt="" />

            <h3>Desarrollo de Paginas </h3>
                <ul class="lista">
                    <li>✅ Planificacion de la estructura de la pagina</li>
                    <li>✅ Plan de crecimiento constante </li>
                    <li>✅ Evaluacion de posicionamiento</li>
                </ul>
        </div>

         <div class="proyecto">
            <img src="img/img16.jpg"  class="imagen__proyectos" alt="" />
                <h3>Desarrollo de aplicaciones</h3>
                <ul class="lista">
                    <li>✅ Planificacion de la estructura de la aplicacion</li>
                    <li>✅ Plan de funcionalidad y experiencia de usuario</li>
                    <li>✅ Utilidades y beneficios de la aplicacion</li>
                </ul>
            </div>
        </section>
    </div>
    )
}