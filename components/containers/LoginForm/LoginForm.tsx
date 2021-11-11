import React, { useCallback, useState } from 'react';
import Button from '@mui/material/Button';
import TextInput from '@atoms/TextInput/TextInput';
import { Box } from '@mui/system';
import { useForm, SubmitHandler } from 'react-hook-form';

type AuthProps = {
  id: string;
  password: string;
};
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthProps>();
  const [isLogin, setIsLogin] = useState(false);
  const submitHandler: SubmitHandler<AuthProps> = useCallback(data => {
    const { id, password } = data;
    setTimeout(() => {
      setIsLogin(checkAuth({ id, password }));
    }, 1000);
  }, []);

  const checkAuth = useCallback(({ id, password }: AuthProps) => {
    return id === 'jaewon' && password === '1234';
  }, []);

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Box
        sx={{
          borderRadius: '7px',
          boxShadow: '0 0 34px 0 rgba(0,30,30,.5)',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            borderRadius: '7px',
            padding: '1.4rem',
            boxShadow: '0 0 12px 2px rgba(0,0,0,.4) inset',
            color: !isLogin ? 'error.main' : 'success.main',
          }}
        >
          <h1 data-cy="form-title">{isLogin ? 'Login!' : 'Fail'}</h1>
          <TextInput
            label="ID"
            data-cy="id"
            type="text"
            error={errors.id?.message}
            register={register('id', {
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: 'not email',
              },
            })}
          />
          <TextInput
            label="Password"
            data-cy="pw"
            type="password"
            error={errors.password?.message}
            register={register('password')}
          />

          <Button variant="contained" type="submit" data-cy="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default LoginForm;
