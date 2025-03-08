import { useState } from 'react'
import './App.css'

function App() {
   const [quote,setQuote] = useState([])
   const [isQuote,setIsQuote] = useState(false)
   const generateQuote = async()=>{
    const response = await fetch('http://localhost:8000/quote/external')
    const data = await response.json()
    setIsQuote(true)
    setQuote(data)
   }
  return (
    <>
     <div className='main-container'>
      <h1> Generate Random Quote</h1>
      {!isQuote ? (<div className='quote-display'>
        <h3 className='author'>Click the generate btn...</h3>
      </div>) :
      (<div className='quote-display'>
        <p className='quote'>"{quote.quote}"</p>
        <h3 className='author'>--{quote.author}</h3>
      </div>)}
      <button className='btn' onClick={generateQuote}>Generate Quote</button>
     </div>
    </>
  )
}

export default App
