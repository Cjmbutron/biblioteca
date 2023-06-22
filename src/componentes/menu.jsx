import style from "../estilos/menu.module.css"
import imagen from "../../src/img/logo.png"
import { useState } from "react"

const setQuery =(e) =>{
    const val=e.target.value
}
 
const Menu = ( headProps) =>{
    const [busqueda, setBusqueda] = useState('')
    
    return <div className={style.container} > 
        <img src={imagen} alt="Logo Nueva acropolis" className={style.container_logo}></img>
        <div className={style.container_menu}>
        
        <a href=""> solicitar libro</a>
        <a href=""> recomendaciones</a>
        <input
            type="text" 
            name="buscar"
            placeholder="¿que libro estas buscando?"   
            onChange={ev => setBusqueda(ev.target.value)}         
        />
    
        </div>
    </div>
}
export default Menu