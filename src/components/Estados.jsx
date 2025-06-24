import React from 'react';

function Counter() {
  const [counter, setCounter] = React.useState(0);

  return (
    <>
      <p>Contador: {counter}</p>
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

function App() {
  return (
    <main>
      <Counter />
    </main>
  );
}
