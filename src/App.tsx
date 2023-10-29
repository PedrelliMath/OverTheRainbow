import './App.css'
import GameComponent from './components/GameComponet'

function App() {
  return (
    <>
        <video autoPlay muted loop plays-inline back-video>
          <source src="rain.mp4" type="video/mp4"></source>
        </video>
      <GameComponent></GameComponent>
    </>
  )
}

export default App
