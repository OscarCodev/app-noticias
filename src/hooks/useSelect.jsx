import React from "react";
import { useState } from "react";

const useSelect = (stateInicial, opciones) => {
  //state del custom hook
  const [state, actualizarState] = useState(stateInicial);

  const SelectNoticias = () => (
    <select
        value={state}
        onChange={e => actualizarState(e.target.value)}
    >
      {opciones.map(opcion => (
        <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
      ))}
    </select>
  );

  //Retona el estado y un componente
  return [state, SelectNoticias];
};

export default useSelect;
