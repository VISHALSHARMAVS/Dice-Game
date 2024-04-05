

function RulesBtn() {
  return (
    <div className=" absolute mt-40 h-60 px-2 border bg-gray-200 shadow-lg max-w-3xl">
        <h2 className="text-center text-lg font-bold py-2">How to Play Game</h2>
        <div className="px-2 text-base">
            <p className="py-2">
              1.  Select any number
            </p>
            <p className="py-2">
               2. Click on dice image
            </p>
            <p className="py-2">
              3.  After click on dice if selected number is equal to dice number you will get points 
            </p>
            <p className="py-2">
               4. If you get Wrong guess then 2 points will be dedcuted
            </p>
        </div>
    </div>
  )
}

export default RulesBtn