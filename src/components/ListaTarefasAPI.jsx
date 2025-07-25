import { useState, useEffect } from 'react';

function Tarefa({ id, titulo, aoRemover }) {
  return (
    <li style={{ marginBottom: '8px' }}>
      {titulo}
      <button
        style={{ marginLeft: '8px', padding: '3px' }}
        onClick={() => aoRemover(id)}
      >
        Remover
      </button>
    </li>
  );
}

function TarefaMensagem({ titulo }) {
  return <p>{titulo} adicionada à lista!</p>;
}

export function ListaDeTarefasAPI() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  // Buscar tarefas da API ao montar o componente
  useEffect(() => {
    fetch('http://localhost:3003/tarefas')
      .then((response) => response.json())
      .then((data) => {
        console.log('Tarefas carregadas:', data);
        setTarefas(data);
      })
      .catch((error) => {
        console.error('Erro ao carregar tarefas:', error);
      });
  }, []);

  useEffect(() => {
    async function carregarTarefas() {
      try {
        const response = await fetch('http://localhost:3003/tarefas');
        console.log('Resposta bruta:', response);

        const data = await response.json();
        console.log('Tarefas carregadas:', data);

        setTarefas(data);
      } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
      }
    }

    carregarTarefas();
  }, []);

  // Adicionar tarefa
  function adicionarTarefa() {
    if (novaTarefa.trim() === '') return;

    const nova = {
      titulo: novaTarefa.trim(),
    };

    fetch('http://localhost:3003/tarefas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nova),
    })
      .then((res) => res.json())
      .then((tarefaCriada) => {
        setTarefas((prev) => [...prev, tarefaCriada]);
        setNovaTarefa('');
      });
  }

  // Remover tarefa
  function removerTarefa(id) {
    fetch(`http://localhost:3003/tarefas/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setTarefas((prev) => prev.filter((t) => t.id !== id));
    });
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
      <button
        style={{ marginLeft: '8px', padding: '3px' }}
        onClick={adicionarTarefa}
      >
        Adicionar
      </button>

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
