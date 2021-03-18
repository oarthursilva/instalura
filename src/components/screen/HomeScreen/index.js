import React, { useContext } from 'react';
import { Button } from '../../commons/Button';
import { Box } from '../../foundation/layout/Container';
import { Grid } from '../../foundation/layout/Grid';
import { Text } from '../../foundation/Text';

import { WebsitePageContext } from '../../wrapper/WebsitePage';

export default function HomeScreen() {
  const { toggleModalRegister } = useContext(WebsitePageContext);

  return (
    <Box
      flex={1}
      display="flex"
      flexDirection="column"
    >
      <Grid.Container
        marginTop={{
          xs: '32px',
          md: 'auto',
        }}
      >
        <Grid.Row>
          <Grid.Col
            offset={{ xs: 0, md: 0 }}
            value={{ xs: 12, md: 6 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>

            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
            </Text>

            <Button
              variant="primary.main"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              onClick={toggleModalRegister}
            >
              Cadastrar
            </Button>
          </Grid.Col>

          <Grid.Col
            value={{ xs: 12, md: 6 }}
            marginTop={{
              xs: '32px',
              md: 'auto',
            }}
          >
            <img
              alt="Imagem de celular com perfil de Nicolas Cage."
              style={{ display: 'block', margin: 'auto' }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}
