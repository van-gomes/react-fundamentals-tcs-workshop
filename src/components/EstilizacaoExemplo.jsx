import React from 'react';

// Estilo em objeto JS (inline)
const estiloBotao = {
  backgroundColor: '#8257e6',
  color: '#fff',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '4px',
  cursor: 'pointer',
  marginRight: '8px',
};

export function EstilizacaoExemplo() {
  const ativo = true;

  return (
    <div>
      <h2 style={{ color: '#8257e6' }}>Exemplo de Estilização no React</h2>

      {/* Inline style */}
      <button style={estiloBotao}>Botão estilizado (inline)</button>

      {/* Classe CSS */}
      <button className="meu-botao">Botão estilizado (classe CSS)</button>

      {/* Estilo condicional */}
      <p>Este texto está {ativo ? 'green' : 'red'} (estilo condicional)</p>

      {/* Exemplo de CSS externo */}
      <p>
        Para usar uma classe CSS, crie um arquivo <code>.css</code> e importe no
        seu componente.
      </p>
    </div>
  );
}
