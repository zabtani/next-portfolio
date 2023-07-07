'use client';
import { useForm } from 'react-hook-form';

import API from '../api/methods';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import Input from './UI/input';
import TextArea from './UI/textArea';
import Button from './UI/button';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({ mode: 'onChange' });

  const { mutate, isLoading } = useMutation({
    mutationFn: (data: any) => API.sendForm(data),
  });

  const onSubmit = (data: any) => mutate({ data: data });
  useEffect(() => {
    console.log(errors);
  }, [errors]);
  const defaultOptions = {
    required: '% is required.',
    pattern: { value: /^[A-Za-z ]+$/i, message: 'Invalid %' },
    maxLength: { value: 20, message: '% is too long' },
    minLength: { value: 2, message: '% is too short' },
  };
  const getBaseProps = (name: string) => ({
    type: 'text',
    register,
    error: errors[name] as any,
    isDirty: Boolean(dirtyFields?.[name]),
    options: defaultOptions,
    id: name,
  });
  return (
    <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
      <Input {...getBaseProps('name')} placeholder="Full Name" />
      <Input {...getBaseProps('company')} placeholder="Company Name" />
      <Input
        {...getBaseProps('phone')}
        type="number"
        placeholder="Phone Number"
        options={{
          ...defaultOptions,
          pattern: { ...defaultOptions.pattern, value: /^[0-9]*$/ },
          maxLength: { ...defaultOptions.maxLength, value: 12 },
          minLength: { ...defaultOptions.minLength, value: 9 },
        }}
      />
      <TextArea
        {...getBaseProps('message')}
        hideValidationIndicator
        placeholder="Message"
        rows={4}
        cols={50}
        options={{
          ...defaultOptions,
          required: false,
          maxLength: { ...defaultOptions.maxLength, value: 250 },
          minLength: { ...defaultOptions.minLength, value: 2 },
        }}
      />
      {isLoading && <div>sending form</div>}
      <Button className="self-center w-56 justify-center pr-5" type="submit">
        <SendIcon />
        Send!
      </Button>
    </form>
  );
};
export default ContactForm;
const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
    />
  </svg>
);
