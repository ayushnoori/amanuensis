import { ComponentProps } from 'react';

import { ComponentStyleConfig } from '@chakra-ui/react';

import { FormError } from '@redwoodjs/forms';

export const CrFormErrorStyleConfig: ComponentStyleConfig = {};

export type CrFormErrorProps = Pick<ComponentProps<typeof FormError>, 'error'>;

export default function CrFormError({ error }: CrFormErrorProps) {
  return (
    <FormError
      error={error}
      wrapperClassName="rw-form-error-wrapper"
      titleClassName="rw-form-error-title"
      listClassName="rw-form-error-list"
    />
  );
}
