import { useState } from "react"
import Home from "./Components/Home"
import GameMode from "./Components/GameMode"


function App() {
 const [isGameOn, setGameOn] = useState(false)

 const GamePlay = ()=>{
  setGameOn((prev)=>!prev)
 }

  return (
   <>
   {isGameOn ? <GameMode/> : <Home Game={GamePlay}/> }
   </>
  )
}

export default App
