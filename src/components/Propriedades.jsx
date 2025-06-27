// Componente Filho acessando props de diferentes formas
function Saudacao(props) {
  // Forma 1: acessar via props.nome
  return (
    <div>
      <p>Olá, {props.nome}!</p>
      <p>Você trabalha como {props.profissao}.</p>
      {/* Exemplo de uso da função recebida via props */}
      <button onClick={() => props.aoClicar(props.nome)}>Clique em mim</button>
    </div>
  );
}

// Outra forma: desestruturando diretamente no parâmetro
function Mensagem({ mensagem, nome }) {
  return (
    <p>
      {mensagem} {nome}!
    </p>
  );
}

// Componente Pai passando props para os filhos
export function Propriedades() {
  const pessoas = [
    { id: 1, nome: 'Maria', profissao: 'Desenvolvedora' },
    { id: 2, nome: 'João', profissao: 'Designer' },
    { id: 3, nome: 'Ana', profissao: 'Gerente de Projetos' },
  ];

  // Função que será passada como prop
  function mostrarAlerta(nome) {
    alert(`Você clicou em ${nome}`);
  }

  return (
    <div>
      <h2>Exemplo de uso de propriedades (props)</h2>
      {/* Iteração usando map com key */}
      {pessoas.map((pessoa) => (
        <Saudacao
          key={pessoa.id}
          nome={pessoa.nome}
          profissao={pessoa.profissao}
          aoClicar={mostrarAlerta} // Passando função como prop
        />
      ))}
      {/* Exemplo com Mensagem */}
      {pessoas.map((pessoa) => (
        <Mensagem
          key={pessoa.id}
          mensagem="Bem-vindo(a) ao React,"
          nome={pessoa.nome}
        />
      ))}
    </div>
  );
}
