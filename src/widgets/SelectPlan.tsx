import React, {useState} from 'react'
import Radio from '../components/RadioGroup';
const IconArcade = "icon-arcade.svg";
const IconAdvanced = "/icon-advanced.svg";
const IconPro = "/icon-pro.svg";

interface ISelectPlan {
  isPlanMonthly: boolean;
  setIsPlanMonthly: (value: boolean) => void;
}

const SelectPlan = ({isPlanMonthly, setIsPlanMonthly}: ISelectPlan) => {

  return (
    <div className='select-plan'>
        <h1 className='title'>Select your plan</h1>
        <span className='subtitle'>You have the option of monthly or yearly billing.</span>
        <div className="input-wrapper d-flex">
            <Radio labelContent={{planName: "Arcade", src: IconArcade}} id='arcade' isMonthly={isPlanMonthly}/>
            <Radio labelContent={{planName: "Advanced", src: IconAdvanced}} id="advanced"isMonthly={isPlanMonthly}/>
            <Radio labelContent={{planName: "Pro", src: IconPro}} id="pro"isMonthly={isPlanMonthly}/>
        </div>
        <div className="switch-tab">
          <span>Monthly</span>
          <input
            id="switch-sub"
            type="checkbox"
            value=""
            className={`switch-button ${isPlanMonthly ? "monthly" : ""}`}
            onChange={() => setIsPlanMonthly(!isPlanMonthly)}
          />
          <label htmlFor="switch-sub"></label>
          <span>Yearly</span>
        </div>
    </div>
  )
}

export default SelectPlan