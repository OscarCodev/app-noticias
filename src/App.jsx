import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";
import { useEffect, useState } from "react";
function App() {
  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=200d14a942804b2ca07b7cada1b66645`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    };
    consultarAPI();
  }, [categoria]);

  return (
    <>
      <Header titulo="Buscador de Noticias" />
      <div className="container">
        <Formulario guardarCategoria={guardarCategoria} />
      </div>
      <ListadoNoticias noticias={noticias}/>
    </>
  );
}

export default App;
