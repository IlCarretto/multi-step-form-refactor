import React from 'react'
import styled from "styled-components";
import { FormData } from '../widgets/PersonalInfo';
import { useForm } from 'react-hook-form';
import { ValidationRules } from '../types';

type InputProps = {
    label: string;
    type: string;
    placeholder?: string;
    input: 'name' | 'email' | 'phone';
    updateFields: (fields: Partial<FormData>) => void;
    validation: ValidationRules;
}

function InputGroup({...props}: InputProps) {

    const {
    register,
    formState: {errors},
  } = useForm<FormData>();

  return (
    <InputWrapper>
      <Label htmlFor={props.input}>{props.label}</Label>
      <GenericInput
      id={props.input}
      placeholder={props.placeholder}
      type={props.type}
      {...register(props.input, props.validation)}
      />
      {errors[props.input] && <p>{errors[props.input]?.message}</p>}
    </InputWrapper>
  )
}

export default InputGroup

const GenericInput = styled.input`
border: 1px solid var(--light-gray);
border-radius: 6px;
padding: 8px 0;
padding-left: 10px;
font-size: 14px;
color: var(--marine-blue);
font-weight: 500;
width: 100%;
`

const InputWrapper = styled.div`
margin: 10px 0;
`

const Label = styled.label`
display: block;
font-size: 12px;
font-weight: 400;
color: var(--marine-blue);
`