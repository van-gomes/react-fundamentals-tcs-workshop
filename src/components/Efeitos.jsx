function Counter() {
  const [counter, setCounter] = React.useState(0);
  const [name, setName] = React.useState('');

  React.useEffect(() => {
    console.log('Componente montado!');

    return () => {
      console.log('Componente desmontado!');
    };
  }, []);

  React.useEffect(() => {
    if (counter > 0) {
      console.log(`Contador atualizado: ${counter}`);
    }
  }, [counter]);

  React.useEffect(() => {
    console.log('Contador ou nome atualizados');
  }, [counter, name]);

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

function App() {
  const [show, setShow] = React.useState(true);

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
