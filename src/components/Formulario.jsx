import React from "react";
import { color } from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";

function Formulario({guardarCategoria}) {
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];
  //Custom hook
  const [categoria, SelectNoticias] = useSelect('general', OPCIONES);
  
  const buscarNoticias = e =>{
    e.preventDefault();
    guardarCategoria(categoria)
  }

  return (
    <form
        onSubmit={buscarNoticias}
    >
      <h3 className={color}>Encuentra Noticias por categoria</h3>
      <SelectNoticias/>
      <input type="submit" value="Buscar" />
    </form>
  );
}

export default Formulario;
