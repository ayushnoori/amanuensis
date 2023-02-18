import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import Logo from 'src/components/Logo/Logo';
import Sidebar, { SidebarProps } from 'src/components/Sidebar/Sidebar';

import NavbarToggleButton from './NavbarToggleButton/NavbarToggleButton';

export type NavbarProps = SidebarProps;

export default function Navbar(props: NavbarProps) {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Box
      width="full"
      py="4"
      px={{ base: '4', md: '8' }}
      bg="bg-surface"
      boxShadow={useColorModeValue('sm', 'sm-dark')}
    >
      <Flex justify="space-between">
        <Logo />
        <NavbarToggleButton
          isOpen={isOpen}
          aria-label="Open Menu"
          onClick={onToggle}
        />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          isFullHeight
          preserveScrollBarGap
          // Only disabled for showcase
          trapFocus={false}
        >
          <DrawerOverlay />
          <DrawerContent>
            <Sidebar {...props} />
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
}
