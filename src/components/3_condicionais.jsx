import { useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);

  if (counter > 20) {
    return <p>Maior que 20</p>;
  }

  return (
    <>
      <p>Contador: {counter}</p>

      <p>{counter > 10 ? 'Maior que 10' : 'Menor ou igual a 10'}</p>

      {counter > 15 && <p>Maior que 15</p>}

      <button onClick={() => setCounter(10)}>Atualizar</button>
      <button onClick={() => setCounter((prevValue) => prevValue + 1)}>
        Incrementar
      </button>
      <button onClick={() => setCounter((prevValue) => prevValue - 1)}>
        Decrementar
      </button>
    </>
  );
}
