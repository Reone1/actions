import { ReactNode, useCallback, memo } from 'react';
import { Button, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { TextInput } from '../component/atom';

type AuthFormProps = {
  id: string;
  password: string;
};

const SignUpStyle = memo(({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        margin: theme.spacing(0, 'auto'),
        padding: theme.spacing(2),
        border: '1px solid black',
        width: '50vw',
        maxWidth: '400px',
        borderRadius: '7px',
      }}
    >
      {children}
    </Box>
  );
});

const SignUpContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormProps>();

  const signupSubmit = useCallback(async (data) => {
    const { id, password } = data;
    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      body: JSON.stringify({ id, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => data.json())
      .then((body) => localStorage.setItem('accessToken', body.accessToken))
      .catch(console.log);
    return response;
  }, []);

  return (
    <SignUpStyle>
      <form onSubmit={handleSubmit(signupSubmit)}>
        <Stack spacing={4} justifyContent='space-around' alignItems='center'>
          <TextInput
            label='ID'
            data-cy='id'
            error={errors.id?.message}
            register={register('id', {
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: 'Please Enter Email',
              },
            })}
          />

          <TextInput
            label='Password'
            data-cy='pw'
            type='password'
            register={register('password', {
              pattern: {
                value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g,
                message: 'Please Enter Password',
              },
            })}
            error={errors.password?.message}
          />
          <Button type='submit' variant='contained'>
            Sumbit
          </Button>
        </Stack>
      </form>
    </SignUpStyle>
  );
};

export default SignUpContainer;
