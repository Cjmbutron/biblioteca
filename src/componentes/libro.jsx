import styles from "../estilos/libro.module.css"
import style from "../estilos/formulario.module.css"
import imglibro from  "../../src/img/libro.jpeg"
import Formulario from "./formulario"
import React, { useState }  from "react"

const Libro =(prop)=>{
    const [titulo, setTirulo] = useState('')

    return <div className={styles.container}>
        <div className={styles.container}>
            <img src={prop.img} alt= "imagen libro" className={styles.container_img} />
               <div className={styles.container_desc}>
                   <h1>{prop.titulo}</h1>
                   <h3>{prop.autor}</h3>
                   <p>{prop.descripciones}</p>
                   <p>categoria</p>
                   <div className={style.box}>
                <Formulario
                    titulo={prop.titulo}
                    autor={prop.autor}
                ></Formulario>
                </div>
            </div>
        </div>
    </div>
    
}
export default Libro