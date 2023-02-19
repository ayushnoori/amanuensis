import {
  Container,
  Heading,
  Stack,
  useBreakpointValue,
  Text,
  HStack,
  Button,
} from '@chakra-ui/react';

import { Link, navigate } from '@redwoodjs/router';
import { Toaster } from '@redwoodjs/web/toast';

export type BaseModelNavigationLayoutProps = {
  headingText?: string;
  newButtonText?: string;
  headingRoute?: string;
  subheadingText?: string;
  newModelRoute?: string;
  children?: React.ReactNode;
};

const BaseModelNavigationLayout = ({
  headingText,
  newButtonText,
  headingRoute,
  subheadingText,
  newModelRoute,
  children,
}: BaseModelNavigationLayoutProps) => {
  const navigateToNewModel = () => {
    navigate(newModelRoute);
  };

  const headingSize = useBreakpointValue({ base: 'xs', lg: 'sm' });

  return (
    <>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <Container
        pt={{ base: '4', md: '8' }}
        pb={{ base: '12', md: '24' }}
        px={{ base: '0', md: '8' }}
        maxWidth="unset"
        flex="1"
      >
        <Stack spacing={{ base: '8', lg: '6' }}>
          <Stack
            spacing="4"
            direction={{ base: 'column', lg: 'row' }}
            justify="space-between"
            align={{ base: 'start', lg: 'center' }}
            px={{ base: '4', md: '0' }}
          >
            <Stack spacing="1">
              {headingText && (
                <>
                  <Heading size={headingSize} fontWeight="medium">
                    <Link to={headingRoute}>
                      {headingText ?? 'HEADING TEXT'}
                    </Link>
                  </Heading>
                  {subheadingText && (
                    <Text color="muted">{subheadingText}</Text>
                  )}
                </>
              )}
            </Stack>
            <HStack spacing="3">
              {newButtonText && newModelRoute && (
                <Button variant="primary" onClick={navigateToNewModel}>
                  + New {newButtonText ?? 'BUTTON TEXT'}
                </Button>
              )}
            </HStack>
          </Stack>
          <Stack spacing={{ base: '5', lg: '6' }} paddingBottom="4">
            {children}
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default BaseModelNavigationLayout;
