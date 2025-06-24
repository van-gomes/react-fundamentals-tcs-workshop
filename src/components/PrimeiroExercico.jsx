import { useEffect, useState } from 'react';

function notifyAPI() {
  console.log('Lista salva!');
}

export function App() {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    notifyAPI();
  }, [list]);

  useEffect(() => {
    fetch('https://api.github.com/users/diego3g/repos')
      .then((response) => response.json())
      .then((data) => {
        setList(data.map((item) => item.full_name));
      });
  }, []);

  useEffect(() => {
    setFilteredList(list.filter((item) => item.includes(filter)));
  }, [filter]);

  function addToList() {
    setList((state) => [...state, 'Novo item']);
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />

      <ul>
        {filteredList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <button onClick={addToList}>Add to list</button>
    </div>
  );
}
