import style from "../estilos/menu.module.css"
import imagen from "../../src/img/logo.png"

const Menu = () =>{
    return <div className={style.container} > 
        <img src={imagen} alt="Logo Nueva acropolis" className={style.container_logo}></img>
        <div className={style.container_menu}>
        <a href=""> solicitar libro</a>
        <a href=""> recomendaciones</a>
        <input type="text" placeholder="¿que libro estas buscando?"></input> 
        </div>
    </div>
}
export default Menu