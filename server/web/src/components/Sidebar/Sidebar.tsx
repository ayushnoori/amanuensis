import { Fragment, useEffect, useState } from 'react';

import {
  Divider,
  Flex,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

// import { useAuth } from '@redwoodjs/auth';

import Logo from './SidebarLogo/SidebarLogo';
import NavButton, { NavButtonProps } from './SidebarNavButton/SidebarNavButton';
import UserProfile from './SidebarUserProfile/SidebarUserProfile';
import { useParams } from '@redwoodjs/router';

export type SidebarLink = NavButtonProps;

export type SidebarGroup = {
  id: string;
  name?: string;
  links: SidebarLink[];
};

export type SidebarProps = {
  organizationName?: string;
  groups: SidebarGroup[];
  bottomGroups?: SidebarGroup[];
};

export default function Sidebar({
  organizationName,
  groups,
  bottomGroups,
}: SidebarProps) {
  const { userId } = useParams();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (userId) {

      const patientUser = {
        name: 'José Rodriguez',
        email: 'jc.rodriguez@gmail.com',
        globalRoles: {
          patient: true,
        },
      };
      setCurrentUser(patientUser);
    } else {
      const doctorUser = {
        name: 'Paul Tang',
        photoUrl:
          'https://scottsdaleinstitute.org/wp-content/uploads/Tang-Paul.jpg',
        email: 'paultang@stanford.edu',
        globalRoles: {
          doctor: true,
        },
      };
      setCurrentUser(doctorUser);
    }
  }, []);

  return (
    <Flex as="section" minH="100vh" bg="bg-canvas">
      <Flex
        flex="1"
        bg="bg-surface"
        zIndex="10"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
        maxW={{ base: 'full', sm: 'xs' }}
        py={{ base: '6', sm: '8' }}
        px={{ base: '4', sm: '6' }}
      >
        <Stack justify="space-between" spacing="1">
          <Stack spacing={{ base: '5', sm: '6' }} shouldWrapChildren>
            <Stack spacing="1" alignItems="flex-start">
              <Logo />
              {organizationName && (
                <Text color="muted" fontWeight="semibold">
                  {organizationName}
                </Text>
              )}
            </Stack>
            {/* <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FiSearch} color="muted" boxSize="5" />
              </InputLeftElement>
              <Input placeholder="Search" />
            </InputGroup> */}
            {groups.map(({ id, name, links }) => (
              <Fragment key={id}>
                {name ? (
                  <Stack>
                    <Text fontSize="sm" color="subtle" fontWeight="medium">
                      {name}
                    </Text>
                    <Stack spacing="1">
                      {links.map((link) => (
                        <NavButton key={link.to} {...link} />
                      ))}
                    </Stack>
                  </Stack>
                ) : (
                  <Stack spacing="1">
                    {links.map((link) => (
                      <NavButton key={link.to} {...link} />
                    ))}
                  </Stack>
                )}
              </Fragment>
            ))}
          </Stack>
          <Stack spacing={{ base: '5', sm: '6' }}>
            {bottomGroups.map(({ id, name, links }) => (
              <Fragment key={id}>
                {name ? (
                  <Stack>
                    <Text fontSize="sm" color="subtle" fontWeight="medium">
                      {name}
                    </Text>
                    <Stack spacing="1">
                      {links.map((link) => (
                        <NavButton key={link.to} {...link} />
                      ))}
                    </Stack>
                  </Stack>
                ) : (
                  <Stack spacing="1">
                    {links.map((link) => (
                      <NavButton key={link.to} {...link} />
                    ))}
                  </Stack>
                )}
              </Fragment>
            ))}
            <Divider />
            {currentUser ? (
              <UserProfile user={currentUser} />
            ) : (
              <Skeleton isLoaded={currentUser} height="4em" />
            )}
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
}
