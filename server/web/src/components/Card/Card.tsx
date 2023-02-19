import {
  Box,
  BoxProps,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function Card(props: BoxProps) {
  return (
    <Box
      minH="3xs"
      bg={{ base: 'transparent', md: 'bg-surface' }}
      boxShadow={{ base: 'none', md: useColorModeValue('sm', 'sm-dark') }}
      borderRadius={useBreakpointValue({ base: 'none', md: 'lg' })}
      {...props}
    />
  );
}
