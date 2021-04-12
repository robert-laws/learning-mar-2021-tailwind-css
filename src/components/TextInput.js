import React, { useEffect } from 'react';
import { useInput } from '../hooks/useInput';

const TextInput = ({ inputName, onInput, placeholder, initialValue }) => {
  const [value, onChange] = useInput(initialValue);

  useEffect(() => {
    onInput(inputName, value);
  }, [value, inputName, onInput]);

  return (
    <label className='block'>
      <label htmlFor={inputName} className='block font-normal text-gray-700'>
        {inputName.split('_').join(' ')}
      </label>
      <input
        type='text'
        className='mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50'
        name={inputName}
        id={inputName}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
};

export default TextInput;
