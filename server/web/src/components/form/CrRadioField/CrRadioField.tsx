import { ComponentPropsWithRef } from 'react';

import { forwardRef, Radio } from '@chakra-ui/react';

import { useRegister } from '@redwoodjs/forms';

import { CrFieldProps } from '../cr-field-types';
import useFieldError from '../use-field-error';

export interface CrRadioFieldProps
  extends Omit<CrFieldProps<HTMLInputElement>, 'type' | 'emptyAs'>,
    Omit<ComponentPropsWithRef<typeof Radio>, 'name' | 'type'> {}

const CrRadioField = forwardRef<CrRadioFieldProps, typeof Radio>(
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

    const type = 'radio';

    const sxStyle = isError
      ? {
          // borderColor: 'red.500',
          borderColor: 'red',
          // color: 'red.500',
          color: 'red',
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
      <input
        id={id || name}
        {...rest}
        /** This order ensures type="radio" */
        type={type}
        style={sxStyle}
        // sx={sxStyle}
        {...useRegisterReturn}
      />
    );
  },
);

export default CrRadioField;
