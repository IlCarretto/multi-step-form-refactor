import React from 'react'
import styled from 'styled-components';
import {useForm, UseFormRegister, UseFormSetValue, Controller } from "react-hook-form";
import { IFormValues, ValidationRules } from '../types';

type RadioProps = {
    labelContent: { planName: string, src: string},
    id: string;
    isMonthly: boolean;
    register: UseFormRegister<IFormValues>;
    validation: ValidationRules;
    setValue: UseFormSetValue<IFormValues>;
    getValues: any;
}

const RadioGroup = ({labelContent, id, isMonthly, register, validation, setValue, getValues}: RadioProps) => {

    const {control} = useForm();

    const price = id === 'arcade' ? 9 : id === 'advanced' ? 12 : id === 'pro' ? 15 : 0;
    const calculatedPrice = isMonthly ? `${price}` : `${price * 10}`

    const handleRadioChange = () => {
        setValue('plan', { name: id, price: Number(calculatedPrice) });
    };


  return (
    <RadioWrapper>
        <Controller
        control={control}
        name="plan"
        rules={validation}
        render={({field}) => (
            <RadioBtn
                {...field}
                name='plan'
                value={calculatedPrice}
                type="radio" id={id}
                onChange={handleRadioChange}
                checked={getValues('plan.name') === id}
            />
        )}
        />
        <Label className='is-checked' htmlFor={id}>
            <LabelImg>
                <img width="50" height="50" src={labelContent.src} alt={labelContent.planName} />
            </LabelImg>
            <LabelContent>
                <PlanName>{labelContent.planName}</PlanName>
                <Price>$ {calculatedPrice}{isMonthly ? '/mo' : '/yr'}</Price>
                {!isMonthly && <small>2 months free</small>}
            </LabelContent>
        </Label>
    </RadioWrapper>
  )
}

export default RadioGroup

const RadioWrapper = styled.div`
display: flex;
gap: 8px;
margin-bottom: 1rem;
`

const RadioBtn = styled.input`
appearance: none;

    &:checked + label {
        border: 1px solid var(--marine-blue)!important;
    }
`

const Label = styled.label`
width: 120px;
height: 150px;
border: 1px solid var(--light-gray);
border-radius: 6px;
padding: 8px;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const LabelImg = styled.div`

`

const LabelContent = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
`

const PlanName = styled.h5`
font-size: 16px;
margin-bottom: 0;
`
const Price = styled.span`
font-size: 13px;
color: gray;
`