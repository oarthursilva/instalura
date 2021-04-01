import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import { FormLogin } from '../../pattern/FormLogin';
import { Grid } from '../../foundation/layout/Grid';
import { Text } from '../../foundation/Text';
import { Link } from '../../commons/Link';

import { WebsitePageContext } from '../../wrapper/WebsitePage';
import { Logo } from '../../../theme/Logo';
import { Box } from '../../foundation/layout/Container';

export default function LoginScreen() {
  const websitePageContext = useContext(WebsitePageContext);

  return (
    <Grid.Container
      flex={1}
      display="flex"
      alignItems="center"
      as={motion.div}
      transition={{ delay: 0, duration: 0.5 }}
      variants={{
        show: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      animate="show"
    >

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

          <FormLogin />

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

    </Grid.Container>
  );
}
