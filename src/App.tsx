import React, {useState, useEffect} from 'react';
import Sidebar from './components/Sidebar';
import PersonalInfo from './widgets/PersonalInfo';
import { useMultiStepForm } from './hook/useMultiStepForm';
import { useForm,SubmitHandler } from 'react-hook-form';
import SelectPlan from './widgets/SelectPlan';
import PickAddons from './widgets/PickAddons';
import Summary from './widgets/Summary';
import { IFormValues } from './types';
import ThankYou from './widgets/ThankYou';

function App() {
  const stepsData = [{ stepNum: 1, title: 'your info'}, { stepNum: 2, title: 'select plan'}, { stepNum: 3, title: 'add-ons'}, { stepNum: 4, title: 'summary'}];
  
  const {handleSubmit, watch, register, formState: {errors}, setValue, getValues} = useForm<IFormValues>({mode: 'all', defaultValues: {
    name: '',
    email: '',
    phone: '',
    plan: {name: '', price: null},
    additions: []
  }});

  const [isPlanMonthly, setIsPlanMonthly] = useState(true);
  
  const {currentStepIndex, step, steps, isFirstStep, isLastStep, goNextStep, goBackStep, goToStep } = useMultiStepForm([
    <PersonalInfo register={register} formErrors={errors}/>,
    <SelectPlan getValues={getValues} setValue={setValue} register={register} formErrors={errors} isPlanMonthly={isPlanMonthly} setIsPlanMonthly={setIsPlanMonthly}/>,
    <PickAddons setValue={setValue} register={register} isPlanMonthly={isPlanMonthly}/>,
    <Summary getValues={getValues} isPlanMonthly={isPlanMonthly}/>,
    <ThankYou/>
  ]);
  
  const [isFormPassed, setIsFormPassed] = useState(false);
  useEffect(() =>{
    if (isLastStep) {
      setIsFormPassed(true);
    }
  }, [isLastStep])

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data, "Step submitted");
    if (!isLastStep) return goNextStep();
    alert("Form submitted succesfully!");
  };

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
          {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
        </form>
      </main>
    </div>
  );
}

export default App;
