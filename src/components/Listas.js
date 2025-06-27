function ListNames() {
  const [names] = React.useState(['Ana', 'Bruno', 'Carlos', 'Camila']);

  return (
    <ul>
      {names.map((name, index) => (
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
