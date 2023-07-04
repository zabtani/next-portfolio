import { PropsWithChildren } from 'react';
import Icon from './icons';
import { BaseProps } from './interface';

const Base = (props: BaseProps & PropsWithChildren) => (
  <div className="relative">
    {props.children}
    <Features
      hideValidationIndicator={props.hideValidationIndicator}
      placeholder={props.placeholder}
      isDirty={props.isDirty}
      error={props.error}
    />
  </div>
);

const Features = ({ placeholder, isDirty, error, hideValidationIndicator }: BaseProps) => {
  const errorMessage = (error?.message as string) ?? '';
  const isError = Boolean(errorMessage);
  return (
    <>
      {isError && <Icon.Error />}
      {!isError && isDirty && !hideValidationIndicator && <Icon.Confirm />}
      <p className="text-red-400 text-xs text-right italic h-4 m-1    ">
        {isError && errorMessage?.replace('%', placeholder ?? '')}
      </p>
    </>
  );
};

export default Base;
