import React from 'react'
import InputGroup from '../components/InputGroup';

export type FormData = {
  name: string;
  email: string;
  phone: string;
}

const PersonalInfo = ({updateFields}: {updateFields: (fields: Partial<FormData>) => void;}) => {
  
  return (
    <div className='personal-info'>
      <h1 className='title'>Personal info</h1>
      <span className='subtitle'>Please provide your name, email address and phone number.</span>
      <div className="input-wrapper">
        <InputGroup label="Name" type="text" placeholder="Inserisci il nome.." updateFields={updateFields} input={'name'} validation={{required: true, maxLength: 18}}/>
        <InputGroup label="Email Address" type="email" placeholder="Inserisci l'email.." updateFields={updateFields} input={'email'} validation={{required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}}/>
        <InputGroup label="Phone Number" type="tel" placeholder="Inserisci il numero di telefono.." updateFields={updateFields} input={'phone'} validation={{min: 7, pattern: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/}}/>
      </div>
    </div>
  )
}

export default PersonalInfo