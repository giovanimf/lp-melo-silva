import './App.css'
import AnimatedDiv from './components/cardsanime'
import Frase from './components/frase'
import NossosDiferenciais from './components/nossos-diferenciais'
import Projetos from './components/projetos'
import Rodape from './components/rodape'
import Servicos from './components/servicos'

function App() {

  return (
    <div>
      <Servicos/>
      <NossosDiferenciais/>
      <Projetos/>
      <Frase/>
      <Rodape/>
    </div>
  )
}

export default App
