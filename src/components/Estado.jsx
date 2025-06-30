import { useState } from 'react';

export function Estado() {
  const [comentarios, setComentarios] = useState([1, 2, 3]);

  //Exemplo INCORRETO: mutação direta do array
  function adicionarComentarioErrado() {
    comentarios.push(4);
    console.log('Comentários após push (errado):', comentarios);
  }

  //Exemplo CORRETO: criando um novo array (imutabilidade)
  function adicionarComentarioCorreto() {
    const novosComentarios = [...comentarios, comentarios.length + 1];
    setComentarios(novosComentarios);
    console.log('Comentários (novo array):', novosComentarios);
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario, index) => (
          <li key={`${index}-${comentario}`}>{comentario}</li>
        ))}
      </ul>
      <button onClick={adicionarComentarioErrado}>
        Adicionar comentário (errado)
      </button>
      <button onClick={adicionarComentarioCorreto} style={{ marginLeft: 8 }}>
        Adicionar comentário (correto)
      </button>
    </div>
  );
}
