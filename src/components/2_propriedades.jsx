import React, { useState } from 'react';

// Componente acessando props via props.titulo
function Tarefa(props) {
  return (
    <li style={{ marginBottom: '8px' }}>
      Tarefa: {props.titulo}
      <button
        style={{ marginLeft: '8px', padding: '3px' }}
        onClick={() => props.aoRemover(props.id)}
      >
        Remover
      </button>
    </li>
  );
}

// Componente acessando props via desestruturação
function TarefaMensagem({ titulo }) {
  return <p>{titulo} adicionada à lista!</p>;
}

// Componente pai
export function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: 'Estudar React' },
    { id: 2, titulo: 'Praticar exercícios' },
  ]);

  const [novaTarefa, setNovaTarefa] = useState('');

  function adicionarTarefa() {
    if (novaTarefa.trim() === '') return;

    const nova = {
      id: Date.now(),
      titulo: novaTarefa.trim(),
    };

    setTarefas((prev) => [...prev, nova]);
    setNovaTarefa('');
  }

  function removerTarefa(id) {
    setTarefas((prev) => prev.filter((tarefa) => tarefa.id !== id));
  }

  return (
    <div>
      <h2>Minhas Tarefas</h2>

      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {tarefas.map((tarefa) => (
          <Tarefa
            key={tarefa.id}
            id={tarefa.id}
            titulo={tarefa.titulo}
            aoRemover={removerTarefa}
          />
        ))}
      </ul>

      {tarefas.map((tarefa) => (
        <TarefaMensagem key={tarefa.id} titulo={tarefa.titulo} />
      ))}
    </div>
  );
}
