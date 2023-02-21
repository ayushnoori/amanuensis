import { Container } from '@chakra-ui/react';

type AuthenticationLayoutProps = {
  children?: React.ReactNode;
};

const AuthenticationLayout = ({ children }: AuthenticationLayoutProps) => {
  return (
    <Container
      maxW="lg"
      py={{ base: '12', md: '24' }}
      px={{ base: '0', sm: '8' }}
    >
      {children}
    </Container>
  );
};

export default AuthenticationLayout;
