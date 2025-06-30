import { useEffect, useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('Componente montado!');

    return () => {
      console.log('Componente desmontado!');
    };
  }, []);

  useEffect(() => {
    if (name !== '' || counter > 0) {
      console.log(`Nome ou contador atualizado: ${name} - ${counter}`);
    }
  }, [counter, name]);

  // useEffect(() => {
  //   console.log('Contador ou nome atualizados');
  // }, [counter, name]);

  return (
    <>
      <div>
        <label>Nome:</label>
        <input onChange={(e) => setName(e.target.value)} />
      </div>

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

export function Efeitos1() {
  const [show, setShow] = useState(true);

  return (
    <main>
      <button onClick={() => setShow((prev) => !prev)}>
        Mostrar/Ocultar Contador
      </button>
      <hr />
      {show && <Counter />}
    </main>
  );
}
