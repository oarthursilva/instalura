import React, { useState } from 'react';
import { Lottie } from '@crello/react-lottie';

import { Button } from '../../commons/Button';

import { Text } from '../../foundation/Text';
import { Box } from '../../foundation/layout/Container';
import { Grid } from '../../foundation/layout/Grid';

import { TextField } from '../../forms/TextField';

import successAnimation from '../animations/success.json';
import errorAnimation from '../animations/error.json';

const formState = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [userInfo, setUserInfo] = useState({ name: '', user: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(formState.DEFAULT);

  function handleInputChange(e) {
    const fieldName = e.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: e.target.value,
    });
  }

  const isFormInValid = userInfo.name.length === 0 || userInfo.user.length === 0;

  return (
    <form onSubmit={(e) => {
      e.preventDefault();

      setIsFormSubmitted(true);
      setSubmitStatus(formState.DEFAULT);

      // DTO
      const userDTO = {
        username: userInfo.user,
        name: userInfo.name,
      };

      fetch('https://instalura-api.vercel.app/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDTO),
      })
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response);
          if (response.ok) {
            return response.json();
          }
          throw new Error('Server not reachable');
        })
        .then((data) => {
          setSubmitStatus(formState.DONE);
          // eslint-disable-next-line no-console
          console.log('response from server:', data);
        })
        .catch((error) => {
          setSubmitStatus(formState.ERROR);
          // eslint-disable-next-line no-console
          console.error(error);
        });
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
          placeholder="Nome"
          name="name"
          value={userInfo.name}
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

      {isFormSubmitted && submitStatus === formState.DONE && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic"
            config={{ animationData: successAnimation, loop: false, autoplay: true }}
          />
        </Box>
      )}

      {isFormSubmitted && submitStatus === formState.ERROR && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic"
            config={{ animationData: errorAnimation, loop: false, autoplay: true }}
          />
        </Box>
      )}
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
