import { Box, chakra, IconButton, IconButtonProps } from '@chakra-ui/react';

const Bar = chakra('span', {
  baseStyle: {
    display: 'block',
    pos: 'absolute',
    w: '1.25rem',
    h: '0.125rem',
    rounded: 'full',
    bg: 'currentcolor',
    mx: 'auto',
    insetStart: '0.125rem',
    transition: 'all 0.12s',
  },
});

function ToggleIcon({ active }: { active: boolean }) {
  return (
    <Box
      className="group"
      data-active={active ? '' : undefined}
      as="span"
      display="block"
      w="1.5rem"
      h="1.5rem"
      pos="relative"
      aria-hidden
      pointerEvents="none"
    >
      <Bar
        top="0.4375rem"
        _groupActive={{ top: '0.6875rem', transform: 'rotate(45deg)' }}
      />
      <Bar
        bottom="0.4375rem"
        _groupActive={{ bottom: '0.6875rem', transform: 'rotate(-45deg)' }}
      />
    </Box>
  );
}

export type ToggleButtonProps = IconButtonProps & {
  isOpen: boolean;
};

export default function NavbarToggleButton({
  isOpen,
  ...iconButtonProps
}: ToggleButtonProps) {
  return (
    <IconButton
      position="relative"
      variant="unstyled"
      size="sm"
      color={isOpen ? 'white' : 'muted'}
      zIndex="skipLink"
      icon={<ToggleIcon active={isOpen} />}
      {...iconButtonProps}
    />
  );
}
