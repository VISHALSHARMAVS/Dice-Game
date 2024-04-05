/* eslint-disable react/prop-types */


function Button({onclick,name,className=""}) {
  return (
    <button  onClick={onclick} className={`${className} bg-black border-2 border-solid border-black   p-1 min-w-56 rounded-lg w-36 text-base`}>{name}</button>
    
  )
}

export default Button