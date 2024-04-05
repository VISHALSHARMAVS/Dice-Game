import NumberSelector from "./NumberSelector"
import RollDice from "./RollDice"
import TotalScore from "./TotalScore"
import { useState } from "react"


function GameMode() {
  const [score,setScore] = useState(0)
  const[selectedNumber,setSelectedNumber] = useState()
  const [diceNumber , setDiceNumber]= useState(1)
  const[error,setError]=useState("")
  const [showRule,setShowRule] = useState(false)
  
  const genarateRandomNumber = (min,max)=> {
    return Math.floor(Math.random()*(max-min)+min)
  } 
  const handleClick= ()=>{
    if(!selectedNumber) {
      setError("*You have not selected any number");
      return 
    }
    setError("");
    const randomNumber = genarateRandomNumber(1,7)
    setDiceNumber(randomNumber);




    if (selectedNumber===randomNumber) {
      setScore(prev => prev+randomNumber)
    }else{setScore(prev=> prev-2)}
   setSelectedNumber();
   }

  return (

    <div>
    <main className="flex items-center justify-between m-auto px-8 pt-12 ">
      <TotalScore score={score} setScore={setScore}/> 
      
      <NumberSelector error={error}  setError={setError} isSelected  selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} /> 
    </main>
      <RollDice showRule={showRule} setShowRule={setShowRule} diceNumber={diceNumber}  selectedNumber={selectedNumber} handleClick={handleClick} setScore={setScore} />
    </div>
  )
}

export default GameMode