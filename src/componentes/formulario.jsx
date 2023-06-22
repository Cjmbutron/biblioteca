import { Children } from "react"
import style from "../estilos/formulario.module.css"

const Formulario =(prop)=>{

    return<div className={style.box}>
                <div className={style.box}>
                    <a className={style.button} href="#popup1">Solicitar</a>
                </div>
            <div id="popup1" className={style.overlay}>
                <div className={style.popup} >
                    <a className={style.close} href="#">&times;</a>
                    <form action="" className={style.form} >
                        <h2>Solicitar Libro</h2>
                        <p>{prop.texto}</p>
                        <p>{prop.autor}</p>
                        <input 
                            type="text" 
                            placeholder="ingresa tu nombre"                         
                            className={style.input} />
                        <input 
                            type="text" 
                            placeholder="ingresa el codigo del libro" 
                            className={style.input}
                        />
                        <input type="date" />
                        <button className={style.button} >enviar</button>
                    </form>
                </div>
            </div>
        </div>
        
}

export default Formulario