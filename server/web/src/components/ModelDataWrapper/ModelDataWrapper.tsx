import { PropsWithChildren } from 'react';

import { Box, Stack, Text, Divider } from '@chakra-ui/react';

import Card from 'src/components/Card/Card';

export type ModelDataWrapperProps = PropsWithChildren<{
  title: string;
  subtitle?: string;
}>;
export default function ModelDataWrapper({
  title,
  subtitle,
  children,
}: ModelDataWrapperProps) {
  return (
    <Card py={{ base: '5', md: '6' }}>
      <Stack spacing="5">
        <Box px={{ base: '4', md: '6' }}>
          <Text fontSize="lg" fontWeight="medium">
            {title}
          </Text>
          <Text color="muted" fontSize="sm">
            {subtitle}
          </Text>
        </Box>
        <Divider />
        {children}
      </Stack>
    </Card>
  );
}
