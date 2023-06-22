import React, { useState } from 'react';
import axios from 'axios';
import Libros from '../api/Api';
import styles from "../estilos/libro.module.css"
import imglibro from  "../img/libro.jpeg"
import Formulario from '../componentes/formulario';
import data from "../db.json"
import Libro from '../componentes/libro';

const imagenes ="..portadas"

const Listalibros = () => {

    return <div>
      {data.libros.map((prop)=>{
        return <div>
          <Libro
            key={prop.id}
            id={prop.id}
            titulo={prop.titulo}
            autor={prop.autor}
            descripciones={prop.descripciones}
            img={prop.img}
          />
       </div>
        })
           }  
         

        </div>
}

export default Listalibros
