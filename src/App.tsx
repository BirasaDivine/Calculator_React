import { useState } from 'react'

function App() {
  const buttonArray=["AC","+/-","%","÷","7","8","9","X","4","5","6","-","1","2","3","+","0",".","="]

  const newArray=buttonArray.map(button =>{
    return <button onClick ={()=>displaying(button)}className={`rounded-full ${ "0".includes(button)?"col-span-2 w-38 bg-amber-500" : ["AC","+/-","%","-","+","."].includes(button)?"bg-amber-500" : ["7","8","9","6","5","4","3","2","1"].includes(button) ? "bg-purple-300" : "bg-green-300" } border size-15`}>{button}</button>
  })
  let [display,useDisplay]=React.useState("")
   let [firstOperand,usefirstOperand]=React.useState("")
    let [operand,useOperand]=React.useState("")
  function displaying(button:string){
    useDisplay( prevbutton=> prevbutton+button)
  }
  function changeFirstOperand(button:string){
    usefirstOperand(prev=>prev+button)
  }
  function changeOperand(button:string){
    useOperand(button)
  }
  return (
    <>
      <div className="bg-black">
        <div className="flex justify-center items-center pt-30">
          <div className='w-[400px] h-[600px] bg-amber-200 rounded-3xl p-9'>
            <input value={display} className="bg-white   bg-2 rounded-2xl h-[150px] w-[350px] inset-shadow-black/50 inset-shadow-sm ">
            </input>
            <div className="grid  grid-cols-4  gap-5 pt-5">
              {newArray}
            </div>
          </div>
      </div>
        
        
      </div>

    </>
  )
}

export default App
