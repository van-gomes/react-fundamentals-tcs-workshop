import { Fragmentos } from './components/Fragmentos.jsx';
import { Estado } from './components/Estado.jsx';
import { Propriedades } from './components/Propriedades.jsx';
import { PropriedadesEspeciais } from './components/PropriedadesEspeciais.jsx';
import { ApiContext } from './components/ApiContext.jsx';
import { UseEffect } from './components/UseEffect.jsx';
import { Efeitos1 } from './components/Efeitos1.jsx';
import { UseEffect2 } from './components/UseEffect2.jsx';

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

      {/* 
      <div>
        <h1>Estado e Imutabilidade</h1>
        <Estado />
      </div> */}

      {/* <div>
        <h1>UseEffect</h1>
        <UseEffect />
      </div> */}

      {/* <div>
        <ApiContext />
      </div> */}

      <div>
        <h1>Efeitos 1</h1>
        <Efeitos1 />
      </div>

      {/* <div>
        <h1>UseEffect 2</h1>
        <UseEffect2 />
      </div> */}
    </>
  );
}
