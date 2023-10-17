import React from 'react'
import CheckboxGroup from '../components/CheckboxGroup';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { IFormValues } from '../types';

interface IPickAddons {
  isPlanMonthly: boolean;
  register: UseFormRegister<IFormValues>;
  setValue: UseFormSetValue<IFormValues>;
}

const PickAddons = ({isPlanMonthly, register, setValue}: IPickAddons) => {

  return (
    <div className='pick-addons'>
        <h1 className='title'>Pick add-ons</h1>
        <span className="subtitle">Add-ons help enhance your gaming experience.</span>
        <div className="input-wrapper">
            <CheckboxGroup setValue={setValue} register={register} isPlanMonthly={isPlanMonthly} title="Online service" subtitle="Access to multiplayer games" id="online-service"/>
            <CheckboxGroup setValue={setValue} register={register} isPlanMonthly={isPlanMonthly} title="Larger storage" subtitle="Extra 1TB of cloud save" id="larger-storage"/>
            <CheckboxGroup setValue={setValue} register={register} isPlanMonthly={isPlanMonthly} title="Customizable profile" subtitle="Custom theme on your profile" id="customizable-profile"/>
        </div>
    </div>
  )
}

export default PickAddons