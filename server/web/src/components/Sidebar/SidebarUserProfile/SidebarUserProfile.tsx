import { useRef } from 'react';

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Avatar,
  Box,
  Button,
  HStack,
  Text,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import humanize from 'humanize-string';

import { CurrentUser } from '@redwoodjs/auth';

export type UserProfileProps = {
  user: CurrentUser & {
    name: string;
    photoUrl: string;
    email: string;
    globalRoles: Record<string, boolean>;
  };
};

export default function SidebarUserProfile({
  user: { name, photoUrl, email, globalRoles },
}: UserProfileProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const logOut = () => console.log('Logged Out');

  const globalRolesString = globalRoles
    ? Object.entries(globalRoles)
        .filter(([_role, allowed]) => allowed)
        .map(([role]) => humanize(role))
        .join(', ')
    : '';

  return (
    <>
      <Tooltip hasArrow label="Click here to log out" placement="top">
        <HStack spacing="3" ps="2" onClick={onOpen}>
          <Avatar name={name} src={photoUrl} boxSize="10" />
          <Box>
            <Text fontWeight="medium" fontSize="sm">
              {name}
            </Text>
            <Text color="muted" fontSize="sm">
              {email}
            </Text>
            {globalRolesString.length > 0 && (
              <Text color="subtle" fontSize="sm">
                {globalRolesString}
              </Text>
            )}
          </Box>
        </HStack>
      </Tooltip>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Log Out Confirmation
            </AlertDialogHeader>

            <AlertDialogBody>Are you sure you want to log out?</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={logOut} ml={3}>
                Log Out
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
