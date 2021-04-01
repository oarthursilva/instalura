import React from 'react';
import { useRouter } from 'next/router';

import { Button } from '../../commons/Button';
import { TextField } from '../../forms/TextField';
import { useForm } from '../../../infra/hooks/forms/useForm';
import { loginService } from '../../../services/login/loginService';

export function FormLogin() {
  const router = useRouter();
  const initialValues = {
    username: '',
    password: '',
  };
  const form = useForm({
    initialValues,
    onSubmit: async (values) => {
      await loginService.login({
        username: values.username,
        password: values.password,
      })
        .then(() => {
          router.push('/app/profile/');
        });
    },
  });

  return (
    <form id="formRegister" onSubmit={form.handleSubmit}>
      <TextField
        placeholder="Usuário"
        name="username"
        value={form.values.username}
        onChange={form.handleChange}
      />

      <TextField
        placeholder="Palavra chave"
        name="password"
        type="password"
        value={form.values.password}
        onChange={form.handleChange}
      />

      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
      >
        Entrar
      </Button>
    </form>
  );
}
