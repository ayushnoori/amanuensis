import { forwardRef } from 'react';

import pascalcase from 'pascalcase';

import { InputFieldProps } from '@redwoodjs/forms';

import CrInputField, {
  CrInputFieldProps,
  INPUT_TYPES,
} from './CrInputField/CrInputField';

export { default as CrCheckboxField } from './CrCheckboxField/CrCheckboxField';
export { default as CrRadioField } from './CrRadioField/CrRadioField';

const InputComponents: Record<
  string,
  React.ForwardRefExoticComponent<Omit<CrInputFieldProps, 'type'>>
> = {};

INPUT_TYPES.forEach((type) => {
  InputComponents[`Cr${pascalcase(type)}Field`] = forwardRef<
    HTMLInputElement,
    Omit<InputFieldProps, 'type'>
  >((props, ref) => <CrInputField ref={ref} type={type} {...props} />);
});

export const {
  CrButtonField,
  CrColorField,
  CrDateField,
  CrDatetimeLocalField,
  CrEmailField,
  CrFileField,
  CrHiddenField,
  CrImageField,
  CrMonthField,
  CrNumberField,
  CrPasswordField,
  CrRangeField,
  CrResetField,
  CrSearchField,
  CrSubmitField,
  CrTelField,
  CrTextField,
  CrTimeField,
  CrUrlField,
  CrWeekField,
} = InputComponents;
