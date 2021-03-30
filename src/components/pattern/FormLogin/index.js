import React, { useContext, useState } from 'react';

import { Button } from '../../commons/Button';
import { Link } from '../../commons/Link';
import { Box } from '../../foundation/layout/Container';
import { Grid } from '../../foundation/layout/Grid';
import { Text } from '../../foundation/Text';

import { TextField } from '../../forms/TextField';
import { Logo } from '../../../theme/Logo';

import { WebsitePageContext } from '../../wrapper/WebsitePage/index';

function FormContent() {
  const [userLogin, setUserLogin] = useState({ user: '', password: '' });
  function handleInputChange(e) {
    const fieldName = e.target.getAttribute('name');
    setUserLogin({
      ...userLogin,
      [fieldName]: e.target.value,
    });
  }

  return (
    <form id="formRegister" action="/app/profile">
      <TextField
        placeholder="Usuário"
        name="user"
        value={userLogin.user}
        onChange={handleInputChange}
      />

      <TextField
        placeholder="Palavra chave"
        name="password"
        type="password"
        value={userLogin.password}
        onChange={handleInputChange}
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

export function FormLogin() {
  const websitePageContext = useContext(WebsitePageContext);

  return (
    <Grid.Row
      flex={1}
      alignItems="center"
      justifyContent="center"
    >
      <Grid.Col
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        offset={{ lg: 2 }}
        value={{ xs: 12, md: 6, lg: 4 }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginTop="37px"
          marginBottom="37px"
        >
          <Link
            href="/"
            color="secondary.main"
          >
            <Logo size="large" />
          </Link>
        </Box>

        <FormContent />

        <Text
          variant="paragraph1"
          tag="p"
          color="tertiary.light"
          textAlign="center"
        >
          {'Não têm uma conta? '}
          <Link
            href="/"
            color="secondary.main"
            onClick={(event) => {
              event.preventDefault();
              websitePageContext.toggleModalRegister();
            }}
          >
            Cadastre-se
          </Link>
        </Text>

      </Grid.Col>

      <Grid.Col
        value={{ xs: 12, md: 6 }}
      >
        <Box
          display="flex"
          justifyContent="center"
        >
          <img
            align="center"
            src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            alt="Phones displaying application screens"
          />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
