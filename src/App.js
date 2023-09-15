// import automatico dos componentes
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div className="App">
      {/* chamamos o componente para pagina principal dessa forma, ele automaticamente irá importar para ca */}
     <Banner/>
     <Formulario/>
    </div>
  );
}

export default App;
