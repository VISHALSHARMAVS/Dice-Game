/* eslint-disable react/prop-types */

import Button from "./Button"


function Home({Game}) {
  return (
    <div className="flex justify-center h-screen gap-12 max-w-7xl items-center mx-auto p-10">
      <div>
        <img src="/Dice-removebg-preview.png" alt="Dices" className=" w-full" />
      </div>
      <div className="flex flex-col items-end">
        <h1 className=" font-extrabold text-8xl mb-8">DICE GAME</h1>
          <Button onclick={Game} name ="Play Now" className="text-white  hover:translate-y-[-3px]  "/>
      </div>
    </div>  
  )
}

export default Home