import { useState } from 'react'


function App() {
  let [color, changeColor]=useState("orange");

    return (
    <>
      <div style={{backgroundColor:color}} className="transition-all duration-1000 wrapper w-full h-screen flex justify-center">
        <div className="w-2/3 h-10 rounded-2xl bg-white shadow-2xl fixed bottom-6 flex justify-center items-center gap-3">
          <button onClick={()=>{changeColor('red')}} className='h-8 w-20 shadow-2xl rounded-2xl bg-red-700'>Red</button>
          <button onClick={()=>{changeColor('green')}} className='h-8 w-20 shadow-2xl rounded-2xl bg-green-600'>Green</button>
          <button onClick={()=>{changeColor('blue')}} className='h-8 w-20 shadow-2xl rounded-2xl bg-blue-700'>Blue</button>
          <button onClick={()=>{changeColor('#808000')}} className='h-8 w-20 shadow-2xl rounded-2xl  bg-[#808000]'>Olive</button>
          <button onClick={()=>{changeColor('gray')}} className='h-8 w-20 shadow-2xl rounded-2xl bg-gray-600'>Gray</button>
          <button onClick={()=>{changeColor('yellow')}} className='h-8 w-20 shadow-2xl rounded-2xl bg-yellow-500'>Yellow</button>
          <button onClick={()=>{changeColor('pink')}} className='h-8 w-20 shadow-2xl rounded-2xl bg-pink-600'>Pink</button>
          <button onClick={()=>{changeColor('purple')}} className='h-8 w-20 shadow-2xl rounded-2xl bg-purple-700'>Purple</button>
          <button onClick={()=>{changeColor('#E6E6FA')}} className='h-8 w-20 shadow-2xl rounded-2xl bg-[#E6E6FA]'>Lavender</button>
          <button onClick={()=>{changeColor('white')}} className='h-8 w-20 shadow-2xl rounded-2xl bg-white'>White</button>
          <button onClick={()=>{changeColor('black')}} className='h-8 w-20 shadow-2xl rounded-2xl bg-black text-white'>Black</button>
        </div>  
      </div>   
    </>
  )
}

export default App
