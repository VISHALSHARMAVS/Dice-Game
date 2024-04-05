/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


function TotalScore({score,setScore}) {
  return (
    <div className=" max-w-48 text-center">
    <h1 className=" text-8xl leading-[100px]">{score}</h1>
    <p className=" text-2xl font-medium">Total Score</p>
</div>
  )
}

export default TotalScore