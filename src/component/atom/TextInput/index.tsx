import { memo, useMemo } from 'react';
import { TextField } from '@mui/material';
import { UseFormRegisterReturn } from 'react-hook-form';

export type TextInputProps = {
  /**
   * input type
   * @default text
   */
  type?: string;
  /**
   * Field Label
   * @default label
   */
  label?: string;
  /**
   * error Text
   * @default undefined
   */
  error?: string;
  /**
   * variants of style
   * @default outlined
   */
  variant?: 'outlined' | 'standard' | 'filled';
  register?: UseFormRegisterReturn;
};
const TextInput = ({
  type = 'text',
  label = 'label',
  variant = 'outlined',
  register,
  error,
  ...rest
}: TextInputProps) => {
  const isError = useMemo(() => Boolean(error), [error]);
  return (
    <TextField
      type={type}
      label={label}
      variant={variant}
      error={isError}
      helperText={isError && error}
      {...register}
      {...rest}
    />
  );
};

export default memo(TextInput);
