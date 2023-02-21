import { ComponentProps, ElementType, ReactNode } from 'react';

import { FormControl, FormHelperText } from '@chakra-ui/react';

import useFieldError from '../use-field-error';

import CrFieldError from './CrFieldError/CrFieldError';
import CrLabel from './CrLabel/CrLabel';

export type FormFieldWrapperProps<TElement extends ElementType> =
  ComponentProps<TElement> & {
    name: string;
    label?: string;
    helperText?: string;
    fieldType: TElement;
    bare?: boolean;
    children?: ReactNode;
  };

export default function FormFieldWrapper<TElement extends ElementType>({
  name,
  label,
  helperText,
  fieldType: FieldType,
  bare,
  children,
  ...restOfProps
}: FormFieldWrapperProps<TElement>) {
  const isError = useFieldError(name);

  const required = restOfProps.validation?.required;

  return bare ? (
    <FieldType name={name} {...restOfProps} />
  ) : (
    <FormControl id={name} isInvalid={isError} isRequired={required}>
      {label && <CrLabel name={name}>{label}</CrLabel>}
      {children ? children : <FieldType name={name} {...restOfProps} />}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      <CrFieldError name={name} />
    </FormControl>
  );
}
