import React, { ReactElement } from 'react';

import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

export type BaseInputProps<T> = {
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  options: RegisterOptions;
  isDirty: boolean;
  register: UseFormRegister<FieldValues>;
  hideValidationIndicator?: boolean;
  id: string;
} & Omit<React.HTMLProps<T>, 'id'>;

export type BaseInputComponent<T> = (props: BaseInputProps<T>) => ReactElement;

export type BaseProps = Pick<
  BaseInputProps<HTMLElement>,
  'placeholder' | 'isDirty' | 'error' | 'hideValidationIndicator'
>;
