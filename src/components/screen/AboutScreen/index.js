import React, { useState } from 'react';

import { Box } from '../../foundation/layout/Container';
import { Text } from '../../foundation/Text';
import { Grid } from '../../foundation/layout/Grid';
import { Footer } from '../../commons/Footer';
import { Menu } from '../../commons/Menu';
import { Modal } from '../../commons/Modal';
import { FormRegister } from '../../pattern/FormRegister';

export default function AboutScreen() {
  const [isModalOpen, setModalState] = useState(false);

  return (
    <Box
      flex={1}
      display="flex"
      flexDirection="column"
    >
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        {(props) => (
          <FormRegister props={props} />
        )}
      </Modal>

      <Menu
        onRegisterClick={() => setModalState(true)}
      />

      <Grid.Container
        flex={1}
      >
        <Grid.Row
          marginTop={{ xs: '32px', md: '100px' }}
          marginBottom={{ xs: '32px', md: '100px' }}
          justifyContent="center"
        >
          <Grid.Col
            flex={1}
            value={{ xs: 12, md: 12 }}
          >
            <Text
              variant="title"
              tag="h2"
              color="tertiary.main"
              textAlign="center"
            >
              Sobre nós
            </Text>
          </Grid.Col>
        </Grid.Row>

      </Grid.Container>

      <Footer />
    </Box>
  );
}
