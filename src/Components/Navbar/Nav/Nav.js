import React from 'react'
import {Link} from 'react-router-dom'

export const Nav = ({ categorias }) => {
    return (
        <ul className='categories'>
            {categorias.map((categoria) => {
                return <Link className='categoryLink' key={categoria.id}  to={categoria.ruta}>{categoria.nombre}</Link>
            })}
        </ul>
    )
};

