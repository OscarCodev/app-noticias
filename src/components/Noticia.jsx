import React from "react";

function Noticia({ noticia }) {
  const { urlToImage, url, title, description, source } = noticia;
  //Si no hay una imagen
  const imagen = urlToImage ? (
    <>
      <img src={urlToImage} alt={title} />
      <span>{source.name}</span>
    </>
  ) : null;

  return (
    <article>
      {imagen}
      <div className="container">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <div className="container">
        <a href={url} target="_blank" rel="noopener noreferrer">
          Ver noticia completa
        </a>
      </div>
    </article>
  );
}

export default Noticia;
