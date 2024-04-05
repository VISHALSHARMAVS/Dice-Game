/* eslint-disable react/prop-types */


function Button({onclick,name,className=""}) {
  return (
    <button  onClick={onclick} className={`${className} bg-black border-2 border-solid border-black   p-1  rounded-lg  w-28 sm:w-30 md:w-32 lg:w-36 text-base`}>{name}</button>
    
  )
}

export default Button