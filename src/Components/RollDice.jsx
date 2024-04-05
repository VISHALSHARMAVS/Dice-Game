/* eslint-disable react/prop-types */
import RulesBtn from "./RulesBtn"
import Button from "./Button"



function RollDice({setScore,diceNumber,handleClick,showRule,setShowRule }) {

  const handleRules =()=>{
    setShowRule((prev)=>!prev)
  }
  const resetHandler =()=>{
    setScore(0)
  }
  
  return (
    <div className="flex w-full ">
    <div className="flex flex-col items-center justify-between m-auto pt-32 w-1/2 ">
        <div className=" w-60 cursor-pointer pb-4  " onClick={handleClick}>
        <img src={`/dice-six-faces-${diceNumber}.png `}  alt="Dice Roll" />
        </div>
        <p className="py-2">Click On Dice to Roll</p>
        <div className="flex flex-col gap-2 pb-2">
        <Button onclick={resetHandler} name="Reset Score" className=" hover:translate-y-[-3px] text-white" />
        <Button onclick={handleRules} name={`${showRule ? "Hide": "Show"} Rules`} className="bg-white text-black hover:bg-black hover:text-white" />
        </div>
    </div>
        {showRule && <RulesBtn className="w-1/2"></RulesBtn>}
    </div>
  )
}

export default RollDice