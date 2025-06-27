import React from 'react';

export function KeyExemplo() {
  const frutas = [
    { id: 1, nome: 'Maçã' },
    { id: 2, nome: 'Banana' },
    { id: 3, nome: 'Laranja' },
  ];

  // Exemplo de uso correto da key (usando id único)
  const listaComKey = frutas.map((fruta) => {
    console.log(`Renderizando com key (id): ${fruta.id} - ${fruta.nome}`);
    return <li key={fruta.id}>{fruta.nome}</li>;
  });

  // Exemplo de uso inadequado da key (usando index)
  const listaComIndex = frutas.map((fruta, index) => {
    console.log(`Renderizando com index: ${index} - ${fruta.nome}`);
    return <li key={index}>{fruta.nome}</li>;
  });

  return (
    <div>
      <h2>Iteração com key única (correto):</h2>
      <ul>{listaComKey}</ul>

      <h2>Iteração com index como key (não recomendado):</h2>
      <ul>{listaComIndex}</ul>

      <p>
        <strong>Por que não usar o index como key?</strong>
        <br />
        Se a ordem dos itens mudar, o React pode associar o estado errado aos
        elementos, causando bugs visuais ou de lógica. Sempre que possível, use
        uma key única e estável, como um id.
      </p>
    </div>
  );
}
