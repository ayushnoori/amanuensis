import { FormErrorMessage, FormErrorMessageProps } from '@chakra-ui/react';

import { FieldError } from '@redwoodjs/forms';

export type CrFieldProps = FormErrorMessageProps & { name: string };

export default function CrFieldError({ name, ...restOfProps }: CrFieldProps) {
  return (
    <FormErrorMessage
      sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
      {...restOfProps}
    >
      <FieldError name={name} />
    </FormErrorMessage>
  );
}
