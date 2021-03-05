import React, { useState } from 'react';

import { Button } from '../../commons/Button';

import { Text } from '../../foundation/Text';
import { Box } from '../../foundation/layout/Container';
import { Grid } from '../../foundation/layout/Grid';

import { TextField } from '../../forms/TextField';

function FormContent() {
  const [userInfo, setUserInfo] = useState({ email: '', user: '' });

  function handleInputChange(e) {
    const fieldName = e.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: e.target.value,
    });
  }

  const isFormInValid = userInfo.email.length === 0 || userInfo.user.length === 0;

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
    }}
    >
      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Pronto para saber da vida dos outros?
      </Text>

      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está
        rolando no bairro, complete seu cadastro agora!
      </Text>


      <div>
        <TextField
          placeholder="E-mail"
          name="email"
          value={userInfo.email}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <TextField
          placeholder="Usuário"
          name="user"
          value={userInfo.user}
          onChange={handleInputChange}
        />
      </div>

      <Button
        variant="primary.main"
        type="submit"
        disabled={isFormInValid}
        fullWidth
      >
        Cadastrar
      </Button>
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export function FormRegister({ props }) {
  return (
    <Grid.Row
      flex={1}
      marginLeft={0}
      marginRight={0}
      justifyContent="flex-end"
    >
      <Grid.Col
        flex={1}
        display="flex"
        paddingRight={{ md: '0' }}
        value={{ xs: 12, md: 5, lg: 4 }}
      >

        <Box
          flex={1}
          display="flex"
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          flexDirection="column"
          justifyContent="center"
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        >
          <FormContent />
        </Box>

      </Grid.Col>
    </Grid.Row>
  );
}
