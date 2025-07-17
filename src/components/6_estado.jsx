import { useState } from 'react';

export function Estado() {
  const [comentarios, setComentarios] = useState([1, 2, 3]);

  const comentariosComPush = [1, 2, 3];

  //Exemplo INCORRETO: mutação direta do array
  function adicionarComentarioErrado() {
    comentariosComPush.push(comentariosComPush.length + 1);
    console.log('Array com push:', comentariosComPush);
  }

  function adicionarComentarioCorreto() {
    setComentarios((prev) => {
      const novoComentario = [...prev, prev.length + 1];
      console.log('Próximo estado:', novoComentario);
      return novoComentario;
    });
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario, index) => (
          <li key={`${index}-${comentario}`}>{comentario}</li>
        ))}
      </ul>
      {/* <ul>
        {comentariosComPush.map((comentario, index) => (
          <li key={`${index}-${comentario}`}>{comentario}</li>
        ))}
      </ul> */}
      <button onClick={adicionarComentarioErrado}>
        Adicionar comentário (errado)
      </button>
      <button onClick={adicionarComentarioCorreto} style={{ marginLeft: 8 }}>
        Adicionar comentário (correto)
      </button>
    </div>
  );
}
