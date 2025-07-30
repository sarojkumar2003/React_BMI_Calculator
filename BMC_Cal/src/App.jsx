import { useState } from 'react'

import './App.css'

function App() {

  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')


  // logic to calculate BMI

  let calcBMI = (e) => {
    e.preventDefault()
    if (!weight || !height || Number(weight) <= 0 || Number(height) <= 0) {
      alert('Please enter valid values for weight and height.')
      
    }else {
      let bmiValue = (weight / (height * height)*703).toFixed(2)
      setBmi(bmiValue)
      if (bmiValue < 18.5) {
        setMessage('You are underweight.')
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage('You have a normal weight.')
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage('You are overweight.')
      } else {
        setMessage('You are obese.')
      }
    }
  }


  // logic to reset the form
  let Reset = () => {
    window.location.reload()
  }
  

  return (
    <>
      <div className='container'>
        <div className='container-1'></div>
        <h1 className='bmi-heading'>BMI Calculator</h1>
        <form onSubmit={calcBMI}>
          <div className='form-group'>
            <label htmlFor='weight'>Weight (kg):</label>
            <input type='number' placeholder='Enter weight in kg' id='weight' name='weight' value={weight} required  onChange={(e) => setWeight(e.target.value)}/>
            
          </div>
          <div className='form-group'>
            <label htmlFor='height'>Height (m):</label>
            <input type='number' placeholder='Enter height in m' id='height' name='height' value={height}  required onChange={(e) => setHeight(e.target.value)} />
            
          </div>
          <button type='submit'>Calculate BMI</button>
          <button type='button' onClick={Reset}>Reset</button>

          <div className='result'>
            <h2>Your BMI: {bmi}</h2>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
