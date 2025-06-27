function Alert1() {
  function handleAlertClick(event) {
    console.log(event);
    alert('Uma mensagem de alerta!');
  }

  return (
    <button type="button" onClick={handleAlertClick}>
      Mostrar alerta
    </button>
  );
}

function Alert2() {
  function handleAlertClick(msg) {
    alert(msg);
  }

  return (
    <button
      type="button"
      onClick={() => handleAlertClick('Uma mensagem via param!')}
    >
      Mostrar alerta c/ Parâmetro
    </button>
  );
}

function Alert3() {
  function handleAlertClick(event) {
    alert(event.target.previousSibling.value);
  }

  function handleInputChange(event) {
    console.log(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Digite algo..."
        onChange={handleInputChange}
      />
      <button onClick={handleAlertClick}>Mostrar alerta c/ Parâmetro</button>
    </div>
  );
}

function App() {
  return (
    <main>
      <Alert1 />
      <Alert2 />
      <Alert3 />
    </main>
  );
}
