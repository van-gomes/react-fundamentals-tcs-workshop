// O componente recebe todas as props em um objeto chamado "props"
// function Saudacao(props) {
//   return (
//     <div>
//       {/* Acessa o valor da prop "nome" */}
//       <h2>Olá, {props.nome}!</h2>

//       {/* Usa a função passada pelo pai através da prop "aoClicar" */}
//       <button onClick={() => props.aoClicar(props.nome)}>Dizer oi</button>
//     </div>
//   );
// }

// O componente já recebe as props desestruturadas (extraídas diretamente)
function Saudacao({ nome, aoClicar }) {
  return (
    <div>
      {/* Usa diretamente a prop "nome" */}
      <h2>Olá, {nome}!</h2>

      {/* Usa diretamente a prop "aoClicar" */}
      <button onClick={() => aoClicar(nome)}>Dizer oi</button>
    </div>
  );
}

export function ExemploPropriedades() {
  function mostrarAlerta(nome) {
    alert(`Oi, ${nome}!`);
  }

  return (
    <div>
      <Saudacao nome="Maria" aoClicar={mostrarAlerta} />
      <Saudacao nome="João" aoClicar={mostrarAlerta} />
      <Saudacao nome="Ana" aoClicar={mostrarAlerta} />
    </div>
  );
}
