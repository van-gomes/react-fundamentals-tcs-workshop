import { useState } from 'react';

export function ListSearchNames() {
  const [names] = useState([
    'Ana',
    'Bruno',
    'Carlos',
    'Aline',
    'Daniel',
    'Eduardo',
  ]);
  const [search, setSearch] = useState('');

  return (
    <ul>
      <input
        type="text"
        placeholder="Buscar por nome..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {names
        .filter((name) => name.toLowerCase().includes(search.toLowerCase()))
        .map((name, index) => (
          <li key={`${index}-${name}`}>{name}</li>
        ))}
    </ul>
  );
}
