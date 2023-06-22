import React from "react"
import axios from "axios"
import { useState } from "react"
import style from "../estilos/formulario.module.css"

const Formulario =(prop)=>{
    const [nombre, setNombre]=useState('')

    const handleSendMessage = async () => {
        try {
          const response = await axios.post('ACff15be5630c4747e67c747cb1729de48', {
            phone: '+14175412133',
            message: '¡Hola! Este es mi mensaje enviado desde mi aplicación React.',
          });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };


    return<div className={style.box}>
                <div className={style.box}>
                    <a className={style.button} href="#solicitar">Solicitar</a>
                </div>
            <div id="solicitar" className={style.overlay}>
                {console.log(prop.titulo)}
            <p>{prop.titulo}</p>
                <div className={style.popup} >
                    <a className={style.close} href="#">&times;</a>
                    <form action="" className={style.form} >
                        <h2>Solicitar Libro</h2>
                        <input 
                            type="text" 
                            placeholder="ingresa tu nombre"                         
                            className={style.input}
                            onChange={ev => setNombre(ev.target.value)}                             
                            />
                            <p>{nombre}</p>
                            <button className={style.button} onClick={handleSendMessage}>Enviar mensaje de WhatsApp</button>
                    </form>
                </div>
            </div>
        </div>
}

export default Formulario