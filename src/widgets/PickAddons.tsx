import React from 'react'
import CheckboxGroup from '../components/CheckboxGroup';

interface IPickAddons {
    isPlanMonthly: boolean;
}

const PickAddons = ({isPlanMonthly}: IPickAddons) => {
  return (
    <div className='pick-addons'>
        <h1 className='title'>Pick add-ons</h1>
        <span className="subtitle">Add-ons help enhance your gaming experience.</span>
        <div className="input-wrapper">
            <CheckboxGroup isPlanMonthly={isPlanMonthly} title="Online service" subtitle="Access to multiplayer games" id="online-service"/>
            <CheckboxGroup isPlanMonthly={isPlanMonthly} title="Larger storage" subtitle="Extra 1TB of cloud save" id="larger-storage"/>
            <CheckboxGroup isPlanMonthly={isPlanMonthly} title="Customizable profile" subtitle="Custom theme on your profile" id="customizable-profile"/>
        </div>
    </div>
  )
}

export default PickAddons