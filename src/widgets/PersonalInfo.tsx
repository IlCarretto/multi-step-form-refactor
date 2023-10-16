import React from 'react'
import InputGroup from '../components/InputGroup';
import {UseFormRegister, FieldErrors } from 'react-hook-form';
import { IFormValues } from '../types';

interface IProps {
  register: UseFormRegister<IFormValues>;
  formErrors: FieldErrors;
}

const PersonalInfo = ({register, formErrors}: IProps) => {

  return (
    <div className='personal-info'>
      <h1 className='title'>Personal info</h1>
      <span className='subtitle'>Please provide your name, email address and phone number.</span>
      <div className="input-wrapper">
        <InputGroup formErrors={formErrors} register={register} label="Name" type="text" placeholder="Inserisci il nome.." input={'name'} validation={{required: { value: true, message: "Name is required"}, maxLength: { value: 18, message: "Name should be max 18 characters"}}}/>
        <InputGroup formErrors={formErrors} register={register} label="Email Address" type="email" placeholder="Inserisci l'email.." input={'email'} validation={{required: { value: true, message: "Email is required"}, pattern: {value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: "Email must contain @ and end in a top-level domain such as '.com'.."}}}/>
        <InputGroup formErrors={formErrors} register={register} label="Phone Number" type="tel" placeholder="Inserisci il numero di telefono.." input={'phone'} validation={{pattern: 
        {value: /^\d{7,}$/, message: 'Phone number must contain at least 7 characters'}}}/>
      </div>
    </div>
  )
}

export default PersonalInfo