// Componente que utiliza a propriedade especial children
export function Caixa({ children }) {
  return (
    <div style={{ border: '1px solid #888', padding: '16px', margin: '8px 0' }}>
      {children}
    </div>
  );
}

// Componente de exemplo usando o Caixa e passando elementos como children
export function PropriedadesEspeciais() {
  return (
    <div>
      <h2>
        Exemplo de uso da propriedade especial <code>children</code>
      </h2>
      <Caixa>
        <p>Este é um conteúdo passado como children para o componente Caixa.</p>
      </Caixa>
      <Caixa>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </Caixa>
    </div>
  );
}
