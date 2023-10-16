import React from 'react'
import styled from 'styled-components';
import {UseFormRegister, useForm, Controller} from "react-hook-form";
import { IFormValues } from '../types';

type ICheckbox = {
    isPlanMonthly: boolean;
    title: string;
    subtitle: string;
    id: string;
    register: UseFormRegister<IFormValues>;
}

const CheckboxGroup = ({isPlanMonthly, title, subtitle, id, register}: ICheckbox) => {

    const {control} = useForm();

    const price = id === 'online-service' ? 1 : id === 'larger-storage' || 'customizable-profile' ? 2 : 0;
    const calculatedPrice = isPlanMonthly ? `${price}/mo` : `${price * 10}/yr`

  return (
    <CheckboxWrapper>
        <Label>
            <LabelWrapper>
                <Controller
                name='additions'
                control={control}
                render={() => (
                    <CheckboxInput 
                        id={id} 
                        type='checkbox'
                        name='additions'
                    />
                )}
                />
                <CheckboxName>
                    <h5>{title}</h5>
                    <span>{subtitle}</span>
                </CheckboxName>
                <Footer>${calculatedPrice}</Footer>
            </LabelWrapper>
        </Label>
    </CheckboxWrapper>
  )
}

export default CheckboxGroup

const CheckboxWrapper = styled.div`
margin-bottom: 1rem;
`

const Label = styled.label`
cursor: pointer;
border-radius: 6px;
width: 100%;
padding: 10px 0;
border: 1px solid var(--light-gray);
display: block;
`
const LabelWrapper = styled.div`
display: flex;
align-items: center;
`
const CheckboxInput = styled.input`
flex: 1;
`
const CheckboxName = styled.div`
flex: 2;
`
const Footer = styled.div`
flex: 1;
`