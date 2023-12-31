import {ReactElement, useState} from 'react';

export function useMultiStepForm(steps: ReactElement[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    function goNextStep() {
        setCurrentStepIndex(step => {
            if (step >= steps.length - 1) return step;
            return step + 1;
        })
    }

    function goBackStep() {
        setCurrentStepIndex(step => {
            if (step <= 0) return step;
            return step - 1;
        })
    }

    function goToStep(index: number) {
        setCurrentStepIndex(index);
    }

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length- 1,
        goNextStep,
        goBackStep,
        goToStep
    };
}