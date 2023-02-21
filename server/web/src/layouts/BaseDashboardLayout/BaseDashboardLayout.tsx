import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';

import Navbar from 'src/components/navigation/Navbar/Navbar';
import Sidebar, { SidebarProps } from 'src/components/Sidebar/Sidebar';

export type BaseDashboardLayoutProps = {
  sidebarProps?: SidebarProps;
  children?: React.ReactNode;
};

export default function BaseDashboardLayout({
  sidebarProps,
  children,
}: BaseDashboardLayoutProps) {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Flex
      as="section"
      direction={{ base: 'column', lg: 'row' }}
      height="100vh"
      bg="bg-canvas"
      overflowY="auto"
    >
      {sidebarProps &&
        (isDesktop ? (
          <Sidebar {...sidebarProps} />
        ) : (
          <Navbar {...sidebarProps} />
        ))}
      <Box width="full" height="full" overflowY="scroll">
        {children}
      </Box>
    </Flex>
  );
}
