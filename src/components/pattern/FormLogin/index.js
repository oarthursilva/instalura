/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import * as yup from 'yup';

import { Button } from '../../commons/Button';
import { TextField } from '../../forms/TextField';
import { useForm } from '../../../infra/hooks/forms/useForm';
import { loginService } from '../../../services/login/loginService';

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Preencha ao menos 3 caracteres')
    .required('"Usuário" é obrigatório'),
  password: yup
    .string()
    .min(8, 'Você precisa fornecer uma senha de pelo o menos 8 caracteres')
    .required('"Senha" é obrigatório'),
});

export function FormLogin({ onSubmit }) {
  const router = useRouter();
  const initialValues = {
    username: '',
    password: '',
  };
  const form = useForm({
    initialValues,
    onSubmit: async (values) => {
      form.setIsFormDisabled(true);
      await loginService.login({
        username: values.username,
        password: values.password,
      })
        .then(() => {
          router.push('/app/profile/');
        })
        .catch((err) => {
          // challenge, display as a popup
          console.error(err);
        })
        .finally(() => {
          form.setIsFormDisabled(false);
        });
    },
    async validateSchema(values) {
      return loginSchema.validate(values, { abortEarly: false });
    },
  });

  return (
    <form id="formRegister" onSubmit={onSubmit || form.handleSubmit}>
      <TextField
        placeholder="Usuário"
        name="username"
        value={form.values.username}
        error={form.errors.username}
        isTouched={form.touchedFields.username}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <TextField
        placeholder="Palavra chave"
        name="password"
        type="password"
        value={form.values.password}
        error={form.errors.password}
        isTouched={form.touchedFields.password}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
        disabled={form.isFormDisabled}
      >
        Entrar
      </Button>
    </form>
  );
}

FormLogin.propTypes = {
  onSubmit: PropTypes.func,
};

FormLogin.defaultProps = {
  onSubmit: undefined,
};
