/* eslint-disable react/prop-types */

import Button from "./Button"


function Home({Game}) {
  return (
    <div className="flex sm:flex-row flex-col justify-center h-screen gap-12 max-w-7xl items-center mx-auto p-10">
      <div>
        <img src="/Dice-removebg-preview.png" alt="Dices" className=" w-full" />
      </div>
      <div className="flex flex-col item-center sm:items-end w-full">
        <h1 className=" font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-8xl mb-8">DICE GAME</h1>
          <Button onclick={Game} name ="Play Now" className="text-white  hover:translate-y-[-3px]  "/>
      </div>
    </div>  
  )
}

export default Home