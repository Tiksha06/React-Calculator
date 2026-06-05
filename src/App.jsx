import { useState } from 'react'
import './App.css'

function App() {
  const [displayValue, setDisplayValue] = useState('0')

  const buttons = [
    'C', 'CE', '%', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
  ]

  const handleButtonClick = (value) => {
      // Handle button click logic here
      if (value === 'C') {
        setDisplayValue('0');
       } else if (value === 'CE') {
        setDisplayValue('0');
       } else if (value === '=') {
        try {
          let equation = displayValue.replaceAll('÷', '/').replaceAll('x', '*');
          let result = eval(equation);
          setDisplayValue(String(result));   //final result turn into String
        } catch (error) {
          setDisplayValue('Error'); // if equation is 5++2 [invalid]
        }
      }
        else {
          setDisplayValue((prev) => (prev === '0' ? value : prev + value));

       }
 }
  return (
    <div className= "calculator-container">

        {/*** Lavender Box ***/}
        <div className= "calculator-body">
          <h2 className= "calculator-title"> 🧮 Cute Calculator </h2>

          {/* Screen Display */}
          <div className= "calculator-screen">{displayValue}</div>

          {/* Buttons Grid */}
          <div className= "button-grid">
            {buttons.map((btn,index) => (
              <button key = {index} className= "calc-button" onClick={() => handleButtonClick(btn)}>{btn}</button>
            ))}
            </div>
          </div>
        </div>
  )
}

export default App