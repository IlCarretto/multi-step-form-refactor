import React from 'react'
import styled from 'styled-components';
import {useForm} from "react-hook-form";

type RadioProps = {
    labelContent: { planName: string, src: string},
    id: string;
    isMonthly: boolean;
}

const RadioGroup = ({labelContent, id, isMonthly}: RadioProps) => {

    const { register } = useForm();

    const price = id === 'arcade' ? 9 : id === 'advanced' ? 12 : id === 'pro' ? 15 : 0;
    const calculatedPrice = isMonthly ? `${price}/mo` : `${price * 10}/yr`

  return (
    <RadioWrapper>
        <Label>
            <LabelImg>
                <img width="50" height="50" src={labelContent.src} alt={labelContent.planName} />
            </LabelImg>
            <LabelContent>
                <PlanName>{labelContent.planName}</PlanName>
                <Price>$ {calculatedPrice}</Price>
                {!isMonthly && <small>2 months free</small>}
            </LabelContent>
        </Label>
        <RadioBtn
            value={calculatedPrice}
            type="radio" id={id}
            {...register("plan")}
        />
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
        border: 1px solid var(--marine-blue);
        background-color: red;
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