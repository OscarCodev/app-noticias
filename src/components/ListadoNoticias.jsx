import React from 'react'
import Noticia from './Noticia'

function ListadoNoticias({noticias}) {
    const {url} = noticias;
  return (
    <div className='container flex'>
        {
            noticias.map(noticia => (
                <Noticia
                    key={url}
                    noticia={noticia}
                />
            ))
        }
    </div>
  )
}

export default ListadoNoticias