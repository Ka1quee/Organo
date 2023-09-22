// import automatico dos componentes
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  // sempre que formos fazer listas/arrays nos usamos "[]"
  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) =>{
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      {/* chamamos o componente para pagina principal dessa forma, ele automaticamente irá importar para ca */}
     <Banner/>
     <Formulario aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
     <Time nome="Programação"/>
     <Time nome="Frontend"/>
     <Time nome="Data Science"/>
    </div>
  );
}

export default App;
