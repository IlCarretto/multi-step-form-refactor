import React from 'react'
import { IFormValues } from '../types'
import { checkIsMonthly } from '../utils/isMonthly';

interface IProps {
    getValues: any;
    isPlanMonthly: boolean;
}

const Summary = ({getValues, isPlanMonthly}: IProps) => {

    const formData: IFormValues = getValues();
    const { additions, email, name, phone, plan } = formData;

    const basePrice = formData.plan.price!;
    const additionPrices = formData.additions.map((addition) => addition.price);
    const totalAdditionPrice = additionPrices.reduce((acc, price) => acc + price, 0);
    const totalPrice = basePrice + totalAdditionPrice;

  return (
    <div className='summary'>
        <h1 className='title'>Finishing up</h1>
        <span className="subtitle">Double-check everything looks OK before confirming.</span>
        <div className="summary-wrapper">
            <div className="plan-wrapper">
                <div className="_name">
                    <h5>{plan.name} {checkIsMonthly(isPlanMonthly, "(Monthly)", "(Yearly)")}</h5>
                    <span>Change</span>
                </div>
                <div className="_price">
                    <div>${plan.price}</div>
                </div>
            </div>
            {additions.map((add) => (
            <div className="service-wrapper">
                <div className="_name">
                    <p>{add.name}</p>
                </div>
                <div className="_price">
                    <div>${add.price}</div>
                </div>
            </div>
            ))}
            <div className="total-wrapper">
                <div className="_name">
                    <p>Total {checkIsMonthly(isPlanMonthly, "(per month)", "(per year)")}</p>
                </div>
                <div className="_price">
                    <h4>${totalPrice}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Summary