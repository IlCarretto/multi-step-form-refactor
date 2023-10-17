import React, {useState} from 'react'
import styled from 'styled-components';
import {UseFormRegister, useForm, Controller, UseFormSetValue} from "react-hook-form";
import { IFormValues } from '../types';
import { checkIsMonthly } from '../utils/isMonthly';

type ICheckbox = {
    isPlanMonthly: boolean;
    title: string;
    subtitle: string;
    id: string;
    register: UseFormRegister<IFormValues>;
    setValue: UseFormSetValue<IFormValues>;
}

const CheckboxGroup = ({isPlanMonthly, title, subtitle, id, setValue}: ICheckbox) => {

    const [additionsArray, setAdditionsArray] = useState<{name: string, price: number}[]>([]);
    const {control} = useForm();

    const price = id === 'online-service' ? 1 : id === 'larger-storage' || 'customizable-profile' ? 2 : 0;
    const calculatedPrice = isPlanMonthly ? `${price}` : `${price * 10}`

    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        
        const title = e.target.id;
        const isInArray = additionsArray.findIndex((item) => item.name === title);
        // console.log(isChecked, "isChecked");
        // console.log(title, "addon title");
        // console.log(isInArray, "isInArray");
        // console.log(additionsArray, "array");
        
        if (isChecked) {
            if (isInArray === -1) {
                const newAdd = { name: title, price: Number(calculatedPrice)};
                const updatedArray = additionsArray.concat(newAdd);
                setAdditionsArray(updatedArray);
                // console.log(newAdd, "new add");
                // console.log(updatedArray, "updated");
                setValue('additions', updatedArray);
            }
        } else {
            if (isInArray !== -1) {
                const updatedArray = additionsArray.filter((item) => item.name !== title);
                // console.log(updatedArray, "updated remove");
                setAdditionsArray(updatedArray);
                setValue('additions', updatedArray);
            }
        }
    }

  return (
    <CheckboxWrapper>
        <Label>
            <LabelWrapper>
                <Controller
                name='additions'
                control={control}
                render={() => (
                    <CheckboxInput 
                        id={title}
                        type='checkbox'
                        name='additions'
                        checked={additionsArray.find((item) => item.name === title) && true}
                        onChange={(e) => handleCheck(e)}
                    />
                )}
                />
                <CheckboxName>
                    <h5>{title}</h5>
                    <span>{subtitle}</span>
                </CheckboxName>
                <Footer>${calculatedPrice}{checkIsMonthly(isPlanMonthly, "/mo", "/yr")}</Footer>
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