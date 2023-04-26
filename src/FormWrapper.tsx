import {ReactNode} from "react"
import './FormWrapper.css'

type FormWrapperProps = {
    title: string
    children: ReactNode
}

function FormWrapper({title, children}: FormWrapperProps) {
  return (
    <>
        <h2 className="title">{title}</h2>
        <div className="fields">{children}</div>
    </>
    
  )
}

export default FormWrapper