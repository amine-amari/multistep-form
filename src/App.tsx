import {FormEvent} from 'react'
import AccountForm from './AccountForm'
import AddressForm from './AddressForm'
import './App.css'
import UserForm from './UserForm'
import useMultistepForm from './useMultistepForm'

function App() {

  const {steps, currentStepIndex, step, isFirstStep, isLastStep, back, next} = useMultistepForm([
    <UserForm />,
    <AddressForm />,
    <AccountForm />
  ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    next()
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
