import { ComponentPropsWithRef } from 'react';

import { forwardRef, Select } from '@chakra-ui/react';

import { useRegister } from '@redwoodjs/forms';

import { CrFieldProps } from '../cr-field-types';
import useFieldError from '../use-field-error';

export interface CrSelectFieldProps
  extends Omit<CrFieldProps<HTMLSelectElement>, 'type'>,
    Omit<ComponentPropsWithRef<typeof Select>, 'name'> {}

const CrSelectField = forwardRef<CrSelectFieldProps, typeof Select>(
  (
    {
      name,
      id,
      emptyAs,

      // for useRegister
      validation,
      onBlur,
      onChange,

      ...rest
    },
    ref,
  ) => {
    const isError = useFieldError(name);

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
      },
      ref,
      emptyAs,
    );

    return (
      <Select id={id || name} {...rest} sx={sxStyle} {...useRegisterReturn} />
    );
  },
);

export default CrSelectField;
