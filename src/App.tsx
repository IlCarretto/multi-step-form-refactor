import React, {useState, useEffect} from 'react';
import Sidebar from './widgets/Sidebar';
import PersonalInfo, { FormData } from './widgets/PersonalInfo';
import { useMultiStepForm } from './hook/useMultiStepForm';
import { useForm,SubmitHandler } from 'react-hook-form';
import SelectPlan from './widgets/SelectPlan';
import PickAddons from './widgets/PickAddons';
import Summary from './widgets/Summary';
import { IFormValues } from './types';

function App() {
  const stepsData = [{ stepNum: 1, title: 'your info'}, { stepNum: 2, title: 'select plan'}, { stepNum: 3, title: 'add-ons'}, { stepNum: 4, title: 'summary'}];

  const [data, setData] = useState<IFormValues>({
    name: "",
    email: "",
    phone: "",
    // plan: {
    //   name: "",
    //   price: null
    // },
    // additions: [],
  });
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const [isPlanMonthly, setIsPlanMonthly] = useState(true);
  
  const {currentStepIndex, step, steps, isFirstStep, isLastStep, goNextStep, goBackStep, goToStep } = useMultiStepForm([
    <PersonalInfo updateFields={updateFields}/>,
    <SelectPlan isPlanMonthly={isPlanMonthly} setIsPlanMonthly={setIsPlanMonthly}/>,
    <PickAddons isPlanMonthly={isPlanMonthly}/>,
    <Summary/>
  ]);
  
  const [isFormPassed, setIsFormPassed] = useState(false);
  useEffect(() =>{
    if (isLastStep) {
      setIsFormPassed(true);
    }
  }, [isLastStep])

  const {handleSubmit} = useForm<IFormValues>();

  const onSubmit = (data: IFormValues) => {
    console.log(data, "Step submitted");
    if (!isLastStep) return goNextStep();
    alert("Form submitted succesfully!");
  }

  return (
    <div className="App">
      <main>
        <Sidebar isFormPassed={isFormPassed} goToStep={goToStep} steps={stepsData}/>
        <form onSubmit={handleSubmit(onSubmit)}>
          {step}
          <div className="btn-group">
          {!isFirstStep && (
            <button className='btn-prev' type='button' onClick={goBackStep}>
              Go Back
            </button>
          )}
          {!isLastStep ? (
            <button type='submit' className='btn-next'>
              Next Step
            </button>
          ) : (
            <button type='submit' className='btn-next'>
              Confirm
            </button>
          )}
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
