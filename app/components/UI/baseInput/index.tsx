'use client';
import React from 'react';
import { BaseInputComponent, BaseInputProps } from './interface';
import Base from './base';

const BaseInput = <T extends HTMLElement>(Component: any): BaseInputComponent<T> => {
  const BaseInputComponent = (props: BaseInputProps<T>) => {
    const { error, options, isDirty, hideValidationIndicator, ...rest } = props;
    const baseProps = { error, options, isDirty, hideValidationIndicator, placeholder: rest.placeholder };
    const inputClass =
      'shadow appearance-none border border-2  rounded w-full py-2 px-3   dark:hover:text-white focus:ring-0 bg-app-button  focus:dark:border-rose-600 focus:border-blue-500   dark:border-rose-600/50 border-blue-500/50  ';
    return (
      <Base {...baseProps}>
        <Component {...rest} className={inputClass} {...rest.register(rest.id, options)} />
      </Base>
    );
  };
  BaseInputComponent.displayName = `BaseInput(${Component.displayName})`;
  return BaseInputComponent;
};

export default BaseInput;
