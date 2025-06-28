import { EstilizacaoExemplo } from './components/EstilizacaoExemplo.jsx';
import { Fragmentos } from './components/Fragmentos.jsx';
import { ImutalidadeExemplo } from './components/ImutalidadeExemplo.jsx';
import { KeyExemplo } from './components/KeyExemplo.jsx';
import { Propriedades } from './components/Propriedades.jsx';
import { PropriedadesEspeciais } from './components/PropriedadesEspeciais.jsx';
import { ApiContext } from './components/ApiContext.jsx';
import { UseEffect } from './components/UseEffect.jsx';

export function App() {
  return (
    <>
      {/* <div>
        <h1>Fragmentos</h1>
        <Fragmentos />
      </div> */}

      {/* <div>
        <h1>Propriedades</h1>
        <Propriedades />
      </div> */}

      {/* <div>
        <h1>Propriedades Especiais</h1>
        <PropriedadesEspeciais />
      </div> */}

      {/* <div>
        <h1>Uso da Key</h1>
        <KeyExemplo />
      </div> */}

      {/* <div>
        <h1>Imutabilidade</h1>
        <p>
          A imutabilidade é um conceito fundamental no React. Sempre que você
          precisar atualizar o estado, crie uma nova cópia do estado em vez de
          modificá-lo diretamente.
        </p>
        <p>
          Isso garante que o React possa detectar mudanças e atualizar a
          interface corretamente.
        </p>
        <ImutalidadeExemplo />
      </div> */}

      {/* <div>
        <h1>Estilização</h1>
        <EstilizacaoExemplo />
      </div> */}

      {/* <div>
        <h1>UseEffect</h1>
        <UseEffect />
      </div> */}

      <div>
        <ApiContext />
      </div>
    </>
  );
}
