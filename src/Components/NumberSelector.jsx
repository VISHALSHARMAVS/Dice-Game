/* eslint-disable react/prop-types */



function NumberSelector({setError,error,isSelected,selectedNumber,setSelectedNumber}) {
    const num = [1,2,3,4,5,6]
    
    isSelected = selectedNumber;
    const numberHandler = (value)=> {
      setSelectedNumber(value)
      setError("")
      
 }

  return (
    <div className="flex flex-col items-end gap-1">
    
      <p className=" text-red-600 font-bold  ">{error}</p>
    <div className="flex ">
      {num.map((value,key)=>(
        <div key={key}  onClick={()=> numberHandler(value)}  className={`${isSelected===value ? 'bg-black text-white':'bg-white text-black'}   h-16 w-8 sm:w-16 border cursor-pointer border-black grid place-items-center text-2xl font-bold`}>{value }</div>))}
    </div> 
    <div className="flex items-center justify-between gap-8">

        <p className=" font-bold text-xl sm:text-2xl ">Select Number</p>
    </div>
    </div>
  )
}

export default NumberSelector