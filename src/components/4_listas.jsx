import { useState } from 'react';

export function ListNames() {
  const [names] = useState(['Ana', 'Bruno', 'Carlos', 'Camila']);

  return (
    <ul>
      {names.map((name, index) => (
        <li key={`${index}-${name}`}>{name}</li>
      ))}
    </ul>
  );
}
