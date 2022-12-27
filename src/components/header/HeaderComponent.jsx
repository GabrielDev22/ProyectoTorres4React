import "./HeaderComponent.css"
import {Link} from "react-router-dom"
export const HeaderComponent = () => {

   /*  (function(){
        const listElements = document.querySelectorAll('.menu__item--show');
        const list = document.querySelector('.menu__links');
        const menu = document.querySelector('.menu__hamburguer');
    
        const addClick = () =>{
            listElements.forEach(element =>{
               element.addEventListener('click', ()=>{
                 
                 let subMenu = element.children[1];
                 let height = 0;
                 element.classList.toggle('menu__item--active');
    
    
                 if(subMenu.clientHeight ===  0){
                    height = subMenu.scrollHeight;
                 }
                 subMenu.style.height = `${height}px`;
               })
            })
        }    
       
    const deleteStyleHeight = () =>{
        listElements.forEach(element=>{
            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu__item--active');
            }
        });
    }
        menu.addEventListener('click', () => list.classList.toggle('menu__links--show'));

    })(); */


    return(
        <nav className="menu">
            <section className="menu__container">
                <h1 className="menu__logo">Business Tecnology</h1>

                <ul className="menu__links">
                    <li className="menu__item">
                        <Link to="/" className="menu__link">Inicio</Link>
                    </li>

                    <li className="menu__item menu__item--show">
                        <Link to="#servicios__container" className="menu__link">Servicios</Link>
                    </li>

                    <li className="menu__item menu__item--show">
                        <Link to="#proyecto__container" className="menu__link">Proyectos</Link>
                    </li>

                    <li className="menu__item menu__item--show">
                        <Link to="#clientes__container" className="menu__link">Nuestros Clientes</Link>
                    </li>
                </ul>

                <div className="menu__hamburger">
                    <img src="img/menu.svg" className="menu__img" alt="" />
                </div>
            </section>
        </nav>
    )
}