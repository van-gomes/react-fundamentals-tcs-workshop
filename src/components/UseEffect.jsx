import { useEffect, useState } from 'react';

function notifyAPI() {
  console.log('Lista salva!');
}

export function UseEffect() {
  //criar um estado para armazenar a lista de strings
  const [list, setList] = useState([]);

  // UseEffect - Side Effects => Efeitos colaterais

  useEffect(() => {
    console.log(list);
    notifyAPI();
  }, [list]);

  function addToList() {
    setList((prevList) => [...prevList, `Item ${prevList.length + 1}`]);
  }

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {/* //botão para adicionar novo item à lista em uma lista */}
      <button onClick={addToList}>Add to list</button>
    </div>
  );
}
