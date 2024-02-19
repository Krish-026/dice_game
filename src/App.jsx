import GamePlay from "./components/GamePlay/GamePlay";
import StartGame from "./components/StartGame/StartGame"
import { useState } from "react"
function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prevState) => !prevState)
  }


  return (
    <>
    {isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>}
    </>
  )
}

export default App


