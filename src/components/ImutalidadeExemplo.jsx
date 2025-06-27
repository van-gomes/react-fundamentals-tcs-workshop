import React, { useState } from 'react';

export function ImutalidadeExemplo() {
  // Estado inicial: array de comentários
  const [comentarios, setComentarios] = useState([
    'Primeiro comentário',
    'Segundo comentário',
  ]);

  // Exemplo INCORRETO: mutação direta do array (NÃO FAÇA ISSO)
  function adicionarComentarioErrado() {
    comentarios.push('Novo comentário'); // Mutação direta
    setComentarios(comentarios); // React pode não percebe a mudança
    console.log('Comentários após mutação com push:', comentarios);
  }

  // Exemplo CORRETO: criando um novo array (imutabilidade)
  function adicionarComentarioCorreto() {
    setComentarios([...comentarios, 'Novo comentário']); // Novo array
    console.log('Comentários após adição correta:', [
      ...comentarios,
      'Novo comentário',
    ]);
  }

  return (
    <div>
      <h2>Exemplo de Imutabilidade no React</h2>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <button onClick={adicionarComentarioErrado}>
        Adicionar comentário (errado)
      </button>
      <button onClick={adicionarComentarioCorreto} style={{ marginLeft: 8 }}>
        Adicionar comentário (correto)
      </button>
      <p style={{ marginTop: 16 }}>
        <strong>Por que imutabilidade é importante?</strong>
        <br />
        Modificar o estado diretamente pode causar bugs, pois o React pode não
        detectar a mudança. Sempre use{' '}
        <code>setComentarios([...comentarios, novoItem])</code> para criar um
        novo array.
      </p>
    </div>
  );
}
