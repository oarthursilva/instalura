import React from 'react';

import { Text } from '../../foundation/Text';
import { Grid } from '../../foundation/layout/Grid';

export default function AboutScreen() {
  return (
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
  );
}
