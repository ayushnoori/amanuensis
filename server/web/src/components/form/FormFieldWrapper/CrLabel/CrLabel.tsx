import { FormLabel, FormLabelProps } from '@chakra-ui/react';

import useFieldError from '../../use-field-error';

export type CrLabelProps = FormLabelProps & {
  name: string;
};

export default function CrLabel({ name, children, ...restOfProps }) {
  const isError = useFieldError(name);

  return (
    <FormLabel
      htmlFor={name}
      {...restOfProps}
      sx={isError ? { color: 'red.500' } : {}}
    >
      {children || name}
    </FormLabel>
  );
}
