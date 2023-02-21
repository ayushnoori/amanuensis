import { useState, useEffect } from 'react';

import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';

import {
  FieldError,
  Form,
  TextField,
  Label,
  Submit,
  useForm,
  SubmitHandler,
} from '@redwoodjs/forms';
import { navigate, routes, useLocation } from '@redwoodjs/router';

import Logo from '../../Logo/Logo';

import OAuthButtonGroup from './OAuthButtonGroup/OAuthButtonGroup';
import PasswordField from './PasswordField/PasswordField';

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginCard = () => {
  const { search } = useLocation();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const formMethods = useForm<LoginFormValues>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      setLoading(true);
      //! BEGIN Manually redirect to appropriate page
      if (data.email === 'paultang@stanford.edu') {
        return navigate(routes.workflowPrompts());
      }

      const emailIdMap = {
        'jc.rodriguez@gmail.com': '0491d6ac-a5b5-281e-f447-6372eafa8a3d',
        'cordie.kutch@gmail.com': '069b5064-ff05-2225-3995-f32685518bc6',
        'royal.waters@gmail.com': '142c3868-45fa-e837-0a35-9aaa250b99b1',
      };

      if (emailIdMap[data.email]) {
        return navigate(
          routes.patientQuestions({ userId: emailIdMap[data.email] }),
        );
      }

      const newError = new Error();
      newError.code = 'auth/wrong-password';
      throw newError;
      //! END Manually redirect to appropriate page
      // navigate(); // TODO Process route
    } catch (err) {
      if (err.code === 'auth/wrong-password') {
        formMethods.setError('password', { message: 'Invalid password.' });
      } else {
        toast({
          title:
            'An error ocurred while trying to authenticate you. Please try again.',
          status: 'error',
          isClosable: true,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async () => {
    const email = formMethods.getValues().email;
    if (!email) {
      formMethods.setError('email', { message: 'Please enter an email.' });
      return;
    }
    if (formMethods.formState.errors.email) {
      return;
    }
    try {
      // await sendPasswordResetEmail(auth, email);
      toast({
        title: `Password reset email sent to ${email}`,
        status: 'success',
        isClosable: true,
      });
    } catch (err) {
      console.error(err);
      toast({
        title:
          'An error ocurred while trying to send the password reset email. Please try again later.',
        status: 'error',
        isClosable: true,
      });
    }
  };

  const loginWithProvider = async (providerId: string) => {
    // await logIn({
    //   providerId,
    //   scopes: [
    //     'https://www.googleapis.com/auth/userinfo.email',
    //     'https://www.googleapis.com/auth/userinfo.profile',
    //   ],
    // });
  };

  const headingSize = useBreakpointValue({ base: 'xs', md: 'sm' });
  const boxBackground = useBreakpointValue({
    base: 'transparent',
    sm: 'bg-surface',
  });
  const boxBoxShadowSmall = useColorModeValue('md', 'md-dark');

  // if (isAuthenticated) {
  //   const searchParams = new URLSearchParams(search);
  //   return (
  //     <Redirect
  //       to={searchParams.get('redirectTo') ?? routes.chooseOrganization()}
  //     />
  //   );
  // }

  return (
    <Stack spacing="8">
      <Stack spacing="6">
        <Logo />
        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
          <Heading size={headingSize}>Log in to your account</Heading>
          {/* TODO Add signup later */}
          {/* <HStack spacing="1" justify="center">
            <Text color="muted">Don&apos;t have an account?</Text>
            <Button variant="link" colorScheme="blue">
              Sign up
            </Button>
          </HStack> */}
        </Stack>
      </Stack>
      <Box
        py={{ base: '0', sm: '8' }}
        px={{ base: '4', sm: '10' }}
        bg={boxBackground}
        boxShadow={{ base: 'none', sm: boxBoxShadowSmall }}
        borderRadius={{ base: 'none', sm: 'xl' }}
      >
        <Form onSubmit={onSubmit} formMethods={formMethods}>
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl isInvalid={!!formMethods.formState.errors.email}>
                <FormLabel name="email" as={Label}>
                  Email
                </FormLabel>
                <Input
                  as={TextField}
                  name="email"
                  validation={{
                    required: true,
                    pattern: {
                      value: /^[^@]+@[^.]+\..+$/,
                      message: 'Please enter a valid email address',
                    },
                  }}
                />
                <FormErrorMessage>
                  <FieldError name="email" />
                </FormErrorMessage>
              </FormControl>
              <PasswordField
                isInvalid={!!formMethods.formState.errors.password}
              />
            </Stack>
            <HStack justify="space-between">
              <Button
                variant="link"
                colorScheme="blue"
                size="sm"
                onClick={resetPassword}
              >
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button
                as={Submit}
                type="submit"
                disabled={loading}
                variant="primary"
              >
                Sign in
              </Button>
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup
                disabled={loading}
                loginWithProvider={loginWithProvider}
              />
            </Stack>
          </Stack>
        </Form>
      </Box>
    </Stack>
  );
};

export default LoginCard;
