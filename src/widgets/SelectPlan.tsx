import React, {useState} from 'react'
import Radio from '../components/RadioGroup';
import {UseFormSetValue, UseFormRegister} from 'react-hook-form';
import { IFormValues } from '../types';
const IconArcade = "icon-arcade.svg";
const IconAdvanced = "/icon-advanced.svg";
const IconPro = "/icon-pro.svg";

interface ISelectPlan {
  isPlanMonthly: boolean;
  setIsPlanMonthly: (value: boolean) => void;
  register: UseFormRegister<IFormValues>;
  formErrors: any;
  setValue: UseFormSetValue<IFormValues>;
  getValues: any;
}

const SelectPlan = ({isPlanMonthly, setIsPlanMonthly, register, formErrors, setValue, getValues}: ISelectPlan) => {

  const handleSwitch = () => {
    setIsPlanMonthly(!isPlanMonthly)
    setValue('plan', {name: '', price: null});
  }

  return (
    <div className='select-plan'>
        <h1 className='title'>Select your plan</h1>
        <span className='subtitle'>You have the option of monthly or yearly billing.</span>
        <div className="input-wrapper d-flex">
            <Radio getValues={getValues} setValue={setValue} register={register} labelContent={{planName: "Arcade", src: IconArcade}} id='arcade' isMonthly={isPlanMonthly} validation={{required: {value: true, message: 'You must choose at least a plan'}}}/>
            <Radio getValues={getValues} setValue={setValue} register={register} labelContent={{planName: "Advanced", src: IconAdvanced}} id="advanced"isMonthly={isPlanMonthly} validation={{required: {value: true, message: 'You must choose at least a plan'}}}/>
            <Radio getValues={getValues} setValue={setValue} register={register} labelContent={{planName: "Pro", src: IconPro}} id="pro" isMonthly={isPlanMonthly} validation={{required: {value: true, message: 'You must choose at least a plan'}}}/>
        </div>
        <div className="switch-tab">
          <span>Monthly</span>
          <input
            id="switch-sub"
            type="checkbox"
            value=""
            className={`switch-button ${isPlanMonthly ? "monthly" : ""}`}
            onChange={handleSwitch}
          />
          <label htmlFor="switch-sub"></label>
          <span>Yearly</span>
        </div>
        {formErrors['plan'] && <p className='error'>{formErrors['plan']?.message}</p>}
    </div>
  )
}

export default SelectPlan