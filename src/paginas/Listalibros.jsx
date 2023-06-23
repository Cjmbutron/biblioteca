import React, { useState } from 'react';
import axios from 'axios';
import Libros from '../api/Api';
import styles from "../estilos/listalibros.module.css"
import imglibro from  "../img/libro.jpeg"
import Formulario from '../componentes/formulario';
import data from "../db.json"
import Libro from '../componentes/libro';
import bdbiBibliotecaHPB from "../bdbibliotecaHPB.json"
import Menu from '../componentes/menu';
import { Link } from 'react-router-dom';

const imagenes ="..portadas"

const Listalibros = () => {
  const [query, setQuery] = useState("");

  const filtroslibros = bdbiBibliotecaHPB.Libros.filter((ev) => {
    return ev.titulo.toLowerCase().match(query.toLowerCase());
  });

    return<>
        <Menu query={query} setQuery={setQuery} />
        <main className={styles.container}>
              {filtroslibros.map((prop)=>(
                <div>
                  <Libro
                    key={prop.codigo}
                    id={prop.codigo}
                    titulo={prop.titulo}
                    autor={prop.autor}
                    codigo={prop.codigo}
                    img={prop.img}
                  />
              </div>
                ))}  
        </main>
    </>
}

export default Listalibros
