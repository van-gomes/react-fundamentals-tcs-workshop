import { useState, useEffect } from 'react';

export function UseEffect2() {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/users/diego3g/repos')
      .then((response) => response.json())
      .then((data) => {
        setList(data.map((item) => item.full_name));
      });
  }, []);

  // const setFilteredList = list.filter((item) => item.includes(filter));

  useEffect(() => {
    setFilteredList(list.filter((item) => item.includes(filter)));
  }, [filter]);

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
        {filteredList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
