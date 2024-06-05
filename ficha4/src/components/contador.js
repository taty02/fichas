import React, { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incContador = () => {
    setContador(contador + 1);
  };

  const decContador = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h1>Contador</h1>
      
      <button onClick={incContador}>+</button> 
      <button onClick={decContador}>-</button>
      
      <span>{contador}</span>
    </div>
  );
};

export default Contador;