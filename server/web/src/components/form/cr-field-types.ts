import { RegisterOptions } from '@redwoodjs/forms';

export type EmptyAsValue = null | 'undefined' | 0 | '';

export interface RedwoodRegisterOptions extends RegisterOptions {
  valueAsBoolean?: boolean;
  valueAsJSON?: boolean;
}

export interface CrFieldProps<Element> {
  name: string;
  id?: string;
  emptyAs?: EmptyAsValue;
  // errorClassName?: string;
  // errorStyle?: React.CSSProperties;
  validation?: RedwoodRegisterOptions;
  type?: string;
  onBlur?: React.FocusEventHandler<Element>;
  onChange?: React.ChangeEventHandler<Element>;
  // Wrapper props
  bare?: boolean;
}
