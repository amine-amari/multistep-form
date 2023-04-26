import {FormEvent, useState} from 'react'
import AccountForm from './AccountForm'
import AddressForm from './AddressForm'
import './App.css'
import UserForm from './UserForm'
import useMultistepForm from './useMultistepForm'

type FormData = {
  firstName: string,
  lastName: string,
  age: string,
  street: string,
  city: string,
  region: string,
  plz: string,
  email: string,
  password: string
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  region: "",
  plz: "",
  email: "",
  password: ""
}

function App() {

  const [data, setData] = useState(INITIAL_DATA)

  function updateFields (fields: Partial<FormData>) {
    setData(prev => {
      return {...prev, ...fields}
    })
  }

  const {steps, currentStepIndex, step, isFirstStep, isLastStep, back, next} = useMultistepForm([
    <UserForm {...data} updateFields={updateFields}/>,
    <AddressForm {...data} updateFields={updateFields}/>,
    <AccountForm {...data} updateFields={updateFields}/>
  ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert("Account created")
  }

  return (
    <div className='main-container'>
      <form onSubmit={onSubmit}>
        <div className='pagination'>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className='button-container'>
          { !isFirstStep && <button type='button' onClick={back}>Back</button>}
          <button type='submit'>
            { isLastStep? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
