import React from 'react';
import TextField from '@mui/material/TextField';
import { UseFormRegisterReturn } from 'react-hook-form/dist/types';

export type TextProps = {
  /**
   * 필드의 화면 이름을 나타냅니다.
   * @default Label
   */
  label: string;
  /**
   * Field Type (text, password )
   * @default text
   */
  type: 'email' | 'tel' | 'text' | 'url' | 'password';
  /**
   * Theme color
   * @default "primary"
   */
  color?: 'primary' | 'secondary' | 'info' | 'success';
  rest?: any;
  /**
   * React-Hooks-form을 위한 Attribute
   */
  register?: UseFormRegisterReturn;
  error?: string;
};
const TextInput = ({
  color = 'primary',
  label,
  type,
  register,
  error,
  ...rest
}: TextProps) => {
  return (
    <div style={{ padding: '10px' }}>
      <TextField
        color={color}
        label={label}
        type={type}
        error={Boolean(error)}
        helperText={error}
        {...rest}
        {...register}
      />
    </div>
  );
};

export default React.memo(TextInput);
