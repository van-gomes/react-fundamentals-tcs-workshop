function ListNames() {
  const [names] = React.useState([
    'Ana',
    'Bruno',
    'Carlos',
    'Aline',
    'Daniel',
    'Eduardo',
  ]);
  const [search, setSearch] = React.useState('');

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

function App() {
  return (
    <main>
      <ListNames />
    </main>
  );
}
