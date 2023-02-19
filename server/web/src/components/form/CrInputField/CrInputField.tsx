import { ComponentPropsWithRef } from 'react';

import { forwardRef, Input } from '@chakra-ui/react';

import { useRegister } from '@redwoodjs/forms';

import { CrFieldProps } from '../cr-field-types';
import useFieldError from '../use-field-error';

export const INPUT_TYPES = [
  'button',
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  'hidden',
  'image',
  'month',
  'number',
  'password',
  'radio',
  'range',
  'reset',
  'search',
  'submit',
  'tel',
  'text',
  'time',
  'url',
  'week',
] as const;

type InputType = typeof INPUT_TYPES[number];

export interface CrInputFieldProps
  extends Omit<CrFieldProps<HTMLInputElement>, 'type'>,
    Omit<ComponentPropsWithRef<typeof Input>, 'name' | 'type'> {
  type?: InputType;
}

const CrInputField = forwardRef<CrInputFieldProps, typeof Input>(
  (
    {
      name,
      id,
      emptyAs,

      // for useRegister
      validation,
      onBlur,
      onChange,
      type,

      ...rest
    },
    ref,
  ) => {
    const isError = useFieldError(name);

    const sxStyle = isError
      ? {
          borderColor: 'red.500',
          color: 'red.500',
        }
      : {};

    const useRegisterReturn = useRegister(
      {
        name,
        validation,
        onBlur,
        onChange,
        type,
      },
      ref,
      emptyAs,
    );

    return (
      <Input
        id={id || name}
        {...rest}
        type={type}
        sx={sxStyle}
        {...useRegisterReturn}
      />
    );
  },
);

export default CrInputField;
