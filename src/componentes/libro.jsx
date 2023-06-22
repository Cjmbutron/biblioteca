import styles from "../estilos/libro.module.css"
import imglibro from  "../../src/img/libro.jpeg"
import Formulario from "./formulario"

const Libro =(prop)=>{

    const titulo=prop.titulo
    return <div className={styles.container}>
        <div className={styles.container}>
            <img src={prop.img} alt= "imagen libro" className={styles.container_img} />
               <div className={styles.container_desc}>
                   <h1>{prop.titulo}</h1>
                   <h3>{prop.autor}</h3>
                   <p>{prop.descripciones}</p>
                   <p>categoria</p>
                   <Formulario 
                        texto={titulo} 
                        autor={prop.autor}
                    />
                   <p>{titulo}</p>
               </div>
        </div>
    </div>
    
}
export default Libro