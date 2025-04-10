import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]=useState(15)//The zeroth index stores the current state
  //The first index updates the state and triggers a re-render
  //setCounter is a function. The default value of counter is set  15.We can set it anything. 
  //The name counter and setCounter are given randomly
  
  function addValue(){
    console.log("Value added counter=",counter);
    //counter+=1; 
    setCounter(counter+1);
  }
  function removeValue(){
    console.log("Value removed from Counter=",counter);
    setCounter(counter-1);
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>counter value:{counter}</h2>
    <button onClick={addValue}>Add value:{counter}</button>
    <br />
    <button onClick={removeValue}>Remove value:{counter}</button>
    </>
  )
}

export default App
