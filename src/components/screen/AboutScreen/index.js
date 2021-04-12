import React from 'react';

import { Text } from '../../foundation/Text';
import { Grid } from '../../foundation/layout/Grid';
import { Box } from '../../foundation/layout/Container';

export { getContent } from './getContent';

export default function AboutScreen() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex={1}
    >
      <Grid.Container>
        <Grid.Row
          marginTop={{ xs: '32px', md: '120px' }}
          flex="1"
        >
          <Grid.Col
            value={{ xs: 12, md: 6, lg: 6 }}
            offset={{ md: 2 }}
            flex={1}
          >
            <Text
              variant="title"
              tag="h2"
              color="tertiary.main"
              cmsKey="pageAbout.pageTitle"
            />

            <Text
              variant="paragraph1"
              color="tertiary.main"
              cmsKey="pageAbout.pageDescription"
            />

          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}
