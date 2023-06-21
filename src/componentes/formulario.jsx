import style from "../estilos/formulario.module.css"

const Formulario =(props)=>{

    return<div className={style.box}>

                <div className={style.box}>
                    <a className={style.button} href="#popup1">Solicitar</a>
                </div>

            <div id="popup1" className={style.overlay}>
                <div className={style.popup} >
                    <a className={style.close} href="#">&times;</a>
                    <form action="">
                        <h2>Solicitar Libro</h2>
                        <input 
                            type="text" 
                            placeholder="ingresa tu nombre"                         
                        />
                        <input 
                            type="text" 
                            placeholder="ingresa el codigo del libro" 
                            value={props.id}  
                        />
                        <input type="date" />
                        <button>enviar</button>
                    </form>
                </div>
            </div>
        </div>
        
}

export default Formulario