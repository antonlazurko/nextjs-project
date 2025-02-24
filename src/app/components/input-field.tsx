'use client';
import { Field } from "formik";

export interface InputFieldProps{
    label?: string;
    id?: string;
    placeholder?: string;
    name?: string;
    type?: string
}

export default function InputField({label, id, name, placeholder, type='text', ...rest}:InputFieldProps) {
    return (
        <div className="flex flex-col">
            {label && <label htmlFor={id} className="mb-2 text-base color-gray-900">{label}</label>}
            <Field {...rest}
            id={id}
            className="p-3 h-11 text-sm rounded border border-gray-30 shadow"
            name={name}
            placeholder={placeholder}
            type={type}/>
        </div>
    )
}