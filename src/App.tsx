import './App.css'
import useMultistepForm from './useMultistepForm'

function App() {
  const {steps, currentStepIndex, step, isFirstStep, isLastStep, back, next} = useMultistepForm([
    <div>One</div>,
    <div>Two</div>,
    <div>Three</div>
  ])
  return (
    <div className='main-container'>
      <form>
        <div className='pagination'>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className='button-container'>
          { !isFirstStep && <button type='button' onClick={back}>Back</button>}
          <button type='button' onClick={next}>
            { isLastStep? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
