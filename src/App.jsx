import { ExemplosComponentes } from './components/1_componentes.jsx';
import { ListaDeTarefas } from './components/2_propriedades.jsx';
import { Counter } from './components/3_condicionais.jsx';
import { ListNames } from './components/4_listas.jsx';
import { ListSearchNames } from './components/5_listas_busca.jsx';
import { Estado } from './components/6_estado.jsx';
import { Efeitos1 } from './components/7_efeitos.jsx';
import { ExampleUseEffect } from './components/8_efeitos.jsx';
import { ListaDeTarefasAPI } from './components/ListaTarefasAPI.jsx';

export function App() {
  return (
    <>
      {/* {/* // 1 - Exemplos de Componentes */}
      {/* <div>
        <h1>Exemplos de Componentes</h1>
        <ExemplosComponentes />
      </div> */}

      {/* // 2 - Propriedades */}
      {/* <div>
        <h1>Exemplos de Propriedades (Props)</h1>
        <ListaDeTarefas />
      </div> */}

      {/* // 3 - Condicionais */}
      {/* <div>
        <h1>Exemplos de Condicionais</h1>
        <Counter />
      </div> */}

      {/* // 4 - Listas */}
      {/* <div>
        <h1>Exemplos de Listas</h1>
        <ListNames />
      </div> */}

      {/* // 5 - Listas e Busca */}
      {/* <div>
        <h1>Exemplos de Listas e Busca</h1>
        <ListSearchNames />
      </div>  */}

      {/* // 6 - Estado */}
      {/* <div>
        <h1>Exemplos de Estado</h1>
        <Estado />
      </div> */}

      {/* // 7 - Efeitos - Ciclo de vida */}
      {/* <div>
        <h1>Exemplos de Efeitos</h1>
        <Efeitos1 />
      </div> */}

      {/* // 8 - Efeitos */}
      <div>
        <h1>Exemplos de Efeitos</h1>
        <ExampleUseEffect />
      </div>

      {/* // 9 - Lista de Tarefas com API */}
      {/* <div>
        <h1>Lista de Tarefas com API</h1>
        <ListaDeTarefasAPI />
      </div> */}
    </>
  );
}
