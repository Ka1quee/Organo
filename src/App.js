// import automatico dos componentes
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },

    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#EBFBFF'
    },

    {
      nome: 'Data Science',
      corPrimaria: '#A6D15T',
      corSecundaria: '#FDFBE2'
    },

    {
      nome: 'Devops',
      corPrimaria: '#ED6B69',
      corSecundaria: '#FDE7E8'
    },

    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9FS'
    },

    {
      nome: 'Mobile',
      corPrimaria: '#FFBAOS',
      corSecundaria: '#FFF5D9'
    },

    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FFBA29',
      corSecundaria: '#FFEEDF'
    }
  ]

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
     
     {times.map(time => <Time nome={time.nome}/> )}
     
     

    </div>
  );
}

export default App;
