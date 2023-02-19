import { Stack } from '@chakra-ui/react';
import OpeningHours from 'opening_hours';
import ReactHours from 'react-hours';

import { useFormContext, useWatch } from '@redwoodjs/forms';

import { CrInputFieldProps } from '../CrInputField/CrInputField';
import { CrTextField } from '../input-fields';

export type CrOpeningHoursField = CrInputFieldProps;

export default function CrOpeningHoursField({
  validation,
  ...props
}: CrOpeningHoursField) {
  const { setValue, control } = useFormContext(); // retrieve all hook methods
  const openingHoursString = useWatch({ control, name: props.name });

  const isValidOpeningHours = (str: string) => {
    try {
      const _oh = new OpeningHours(str);
      return true;
    } catch (_err) {
      return false;
    }
  };

  return (
    <Stack>
      <CrTextField
        validation={{
          validate: isValidOpeningHours,
          ...validation,
        }}
        {...props}
      />
      <ReactHours
        value={openingHoursString}
        onChange={(newOpeningHoursString: string) =>
          setValue(props.name, newOpeningHoursString)
        }
      />
    </Stack>
  );
}
