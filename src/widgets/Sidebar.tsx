import React from 'react'
import "./index.scss";

type ISidebar = {
  isFormPassed: boolean;
  goToStep: (index: number) => void;
  steps: { stepNum: number, title: string}[]
}

const Sidebar = ({steps, isFormPassed, goToStep}: ISidebar) => {

  return (
    <div className='sidebar'>
      {steps.map((step) => (
        <div key={step.stepNum} className="step">
          <div onClick={() => isFormPassed && goToStep(step.stepNum - 1)} className="_circle">
            <span>{step.stepNum}</span>
          </div>
          <div className="_title">
            <span>STEP {step.stepNum}</span>
            <h5>{step.title}</h5>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Sidebar