import "./ServiciosComponent.css"
export const ServicioComponent = () => {
    return(
        <div>
        <h2>Servicios</h2>
        <div className="servicios__container" id="servicios__container">
        <div className="servicio__contenido">
            <div className="servicios">
              <img src="img/computadora.svg" className="iconos" alt="" />
                   <p>
                       Especialistas en la creacion de paginas web escalables
                       con las cuales se posicionaran entre las primeras en el buscador de google, dando como resultado el crecimiento de la empresa al ser de las primeras opciones
                   </p>    
            </div>

            <div className="servicios">
                <img src="img/telefono.svg" className="iconos" alt="" />
                <p>
                    Especialistas en la creacion de aplicaciones moviles las cuales tienen como finalidad crear un medio aparte de una pagina web, en la cual el usuario pueda acceder a dicho servicio desde cualquier dispotivo movil y desde cualquier lugar que se encuentre en cualquier momento.
                </p>
            </div>

             <div className="servicios">
                 <img src="img/datos.svg" className="iconos" alt="" />
                 <p>
                     Tenemos tambien la creacion de base de datos para guardar toda la informacion que podamos obtener de los usuarios y asi por utilizarlo como un medio para poder venderles el servicio o insitarlos a interactuar con la pagina web o la aplicacion
                 </p>     
             </div>     

             <div class="servicios">
                 <img src="img/analisis_usuarios.svg" class="iconos" alt="" />
                 <p>
                    Nos encargamos de analizar a todos los usuarios que visitan nuestra pagina o aplicacion, llevando un registro de las cosas con las que mas interactuan y buscando patrones y razones para insitar despues a interactuar con el resto de opcioness
                 </p>    
             </div>

        <div className="servicios">
            <img src="img/codigo.svg" className="iconos" alt="" />
            <p>
                Creamos codigo personalizado y escable el cual se lograra mantener despues de una actualizacion trayendo como beneficio pocos cambios en el codigo sin la necesidad de restructurarlo desde cero
            </p>
        </div>

        <div className="servicios">
            <img src="img/experiencia_usuario.svg" className="iconos"alt="" />
            <p>
                Nos enfocamos mucho en la experiencia de usuario para que su visita en nuestros servicios sea de la mejor forma y experiencia. Para de esta forma para ellos sea clara y consiza cada uno de nuestros servicios y que tengan facilidad a la hora de entender el funcionamiento de la aplicacion
            </p>
        </div>
    </div>
    </div>
        </div>
    )
}