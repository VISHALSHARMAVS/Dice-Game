/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


function TotalScore({score,setScore}) {
  return (
    <div className=" max-w-48 text-center">
    <h1 className=" sm:text-8xl text-7xl sm:leading-[100px] m-0 ">{score}</h1>
    <p className=" sm:text-2xl text-xl font-medium">Total Score</p>
</div>
  )
}

export default TotalScore