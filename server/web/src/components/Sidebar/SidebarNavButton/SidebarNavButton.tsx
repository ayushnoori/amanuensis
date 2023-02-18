import { As, Button, ButtonProps, HStack, Icon, Text } from '@chakra-ui/react';

import { navigate, useMatch } from '@redwoodjs/router';

export type NavButtonProps = ButtonProps & {
  icon: As;
  label: string;
  to: string;
};

export default function SidebarNavButton({
  icon,
  label,
  to,
  ...buttonProps
}: NavButtonProps) {
  const matchInfo = useMatch(to);

  const onClick = () => {
    navigate(to);
  };

  return (
    <Button
      variant="ghost"
      justifyContent="start"
      onClick={onClick}
      aria-current={matchInfo.match ? 'page' : undefined}
      {...buttonProps}
    >
      <HStack spacing="3">
        <Icon as={icon} boxSize="6" color="subtle" />
        <Text>{label}</Text>
      </HStack>
    </Button>
  );
}
