import React from 'react'

const Stepper = props => {

  const {currentStep, totalSteps} = props

  return (
    <p className="pm-stepper">
      مرحله {currentStep} از {totalSteps}
    </p>
  )
}

export default Stepper
