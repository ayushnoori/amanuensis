import { forwardRef, Button, ButtonProps } from '@chakra-ui/react';

const CrSubmit = forwardRef<Omit<ButtonProps, 'type'>, typeof Button>(
  (props, ref) => <Button ref={ref} type="submit" {...props} />,
);

export default CrSubmit;
