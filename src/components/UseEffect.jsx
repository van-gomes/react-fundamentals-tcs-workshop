import { useEffect, useState } from 'react';

function notifyAPI() {
  console.log('Lista salva!');
}

export function UseEffect() {
  //criar um estado para armazenar a lista de strings
  const [list, setList] = useState([]);
  // const [filteredList, setFilteredList] = useState([]);
  const [filter, setFilter] = useState('');

  // notifyAPI();
  // UseEffect - Side Effects => Efeitos colaterais

  // useEffect(() => {
  //   console.log(list);
  //   notifyAPI();
  // }, [list]);

  // Executa uma vez quando o componente é montado pois o array de dependências está vazio
  useEffect(() => {
    fetch('https://api.github.com/users/diego3g/repos')
      .then((response) => response.json())
      .then((data) => {
        setList(data.map((item) => item.full_name));
      });
  }, []);

  const setFilteredList = list.filter((item) => item.includes(filter));

  // useEffect(() => {
  //   setFilteredList(list.filter((item) => item.includes(filter)));
  // }, [filter]);

  function addToList() {
    //como estamos atualizando um estado que depende do estado anterior(dele mesmo)
    //é necessário passar uma função para o setList e não um valor direto e
    //usar uma arrow function pra resolver o problema de closure que
    //o React tem com o useState
    //https://pt-br.reactjs.org/docs/hooks-reference.html#usestate
    //quando eu clicar no botão, o React vai chamar a função addToList
    setList((state) => [...state, 'Novo item']);
    // console.log('Novo item adicionado à lista', list);
    notifyAPI();
  }

  function removeFromList(item) {
    //lógica da função para remover um item da lista
    notifyAPI();
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />

      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <ul>
        {setFilteredList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {/* //botão para adicionar novo item à lista em uma lista */}
      <button onClick={addToList}>Add to list</button>
    </div>
  );
}
