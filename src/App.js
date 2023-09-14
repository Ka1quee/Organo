// import automatico dos componentes
import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      {/* chamamos o componente para pagina principal dessa forma, ele automaticamente irá importar para ca */}
     <Banner/>
      <CampoTexto/>
    </div>
  );
}

export default App;
