import { ComponentPropsWithRef } from 'react';

import { forwardRef, Textarea } from '@chakra-ui/react';

import { useRegister } from '@redwoodjs/forms';

import { CrFieldProps } from '../cr-field-types';
import useFieldError from '../use-field-error';

export interface CrTextAreaFieldProps
  extends Omit<CrFieldProps<HTMLTextAreaElement>, 'type'>,
    Omit<ComponentPropsWithRef<typeof Textarea>, 'name'> {}

const CrTextAreaField = forwardRef<CrTextAreaFieldProps, typeof Textarea>(
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
      <Textarea id={id || name} {...rest} sx={sxStyle} {...useRegisterReturn} />
    );
  },
);

export default CrTextAreaField;
