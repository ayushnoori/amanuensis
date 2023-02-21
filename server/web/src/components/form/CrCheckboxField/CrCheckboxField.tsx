import { ComponentPropsWithRef } from 'react';

import { forwardRef, Checkbox } from '@chakra-ui/react';

import { useRegister } from '@redwoodjs/forms';

import { CrFieldProps } from '../cr-field-types';
import useFieldError from '../use-field-error';

export interface CrCheckboxFieldProps
  extends Omit<CrFieldProps<HTMLInputElement>, 'type' | 'emptyAs'>,
    Omit<ComponentPropsWithRef<typeof Checkbox>, 'name' | 'type'> {}

const CrCheckboxField = forwardRef<CrCheckboxFieldProps, typeof Checkbox>(
  (
    {
      name,
      id,

      // for useRegister
      validation,
      onBlur,
      onChange,

      ...rest
    },
    ref,
  ) => {
    const isError = useFieldError(name);

    const type = 'checkbox';

    const sxStyle = isError
      ? {
          borderColor: 'red.500',
          color: 'red.500',
          '&:focus': { borderColor: 'unset' },
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
    );

    return (
      <Checkbox
        id={id || name}
        {...rest}
        /** This order ensures type="checkbox" */
        type={type}
        sx={sxStyle}
        {...useRegisterReturn}
      />
    );
  },
);

export default CrCheckboxField;
