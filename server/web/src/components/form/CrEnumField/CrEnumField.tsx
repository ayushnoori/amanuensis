import { ElementType, ReactNode } from 'react';

import { Box, HStack, Stack, Text } from '@chakra-ui/react';

type CrEnumFieldItemProps = {
  componentType: ElementType;
  id: string;
  name: string;
  defaultValue: string;
  text: string;
  textColor?: string;
  children?: ReactNode;
  [key: string]: unknown;
};

function CrEnumFieldItem({
  componentType: ComponentType,
  id,
  name,
  defaultValue,
  text,
  textColor,
  children,
  ...restOfProps
}: CrEnumFieldItemProps) {
  return children ? (
    <ComponentType
      id={id}
      name={name}
      defaultValue={defaultValue}
      {...restOfProps}
    >
      {children}
    </ComponentType>
  ) : (
    <HStack>
      <ComponentType
        id={id}
        name={name}
        defaultValue={defaultValue}
        {...restOfProps}
      />
      <Box>
        <Text color={textColor}>{text}</Text>
      </Box>
    </HStack>
  );
}

export type CrEnumFieldProps = {
  componentType: ElementType;
  options: Omit<CrEnumFieldItemProps, 'componentType'>[];
};

export default function CrEnumField({
  componentType: ComponentType,
  options,
}: CrEnumFieldProps) {
  return (
    <Stack>
      {options.map((option) => (
        <CrEnumFieldItem
          key={option.id as string}
          componentType={ComponentType}
          id={option.id as string}
          name={option.name as string}
          defaultValue={option.defaultValue as string}
          text={option.text as string}
          {...option}
        />
      ))}
    </Stack>
  );
}
