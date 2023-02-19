import { useErrorStyles } from '@redwoodjs/forms';

export default function useFieldError(name: string): boolean {
  const { className } = useErrorStyles({ name, errorClassName: 'error' });
  return className === 'error';
}
