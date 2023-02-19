import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react';

import GoogleIcon from '../GoogleIcon/GoogleIcon';

const providers = [
  {
    providerId: 'google.com',
    name: 'Google',
    icon: <GoogleIcon boxSize="5" />,
  },
];

export type OAuthButtonGroupProps = {
  disabled?: boolean;
  loginWithProvider: (providerId: string) => void;
};

const OAuthButtonGroup = ({
  disabled,
  loginWithProvider,
}: OAuthButtonGroupProps) => (
  <ButtonGroup variant="outline" spacing="4" width="full">
    {providers.map(({ providerId, name, icon }) => (
      <Button
        key={name}
        width="full"
        disabled={disabled}
        onClick={() => loginWithProvider(providerId)}
      >
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))}
  </ButtonGroup>
);

export default OAuthButtonGroup;
