import React from 'react';
import { useUserService } from '../../../infra/hooks/services/useUserService';
import { Box } from '../../foundation/layout/Container';
import { Grid } from '../../foundation/layout/Grid';

export default function ProfileScreen() {
  const { getProfilePage } = useUserService();
  const profile = getProfilePage();

  return (
    <Grid.Container
      flex={1}
      display="flex"
      alignItems="center"
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
          value={{ xs: 12, md: 6, lg: 4 }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            marginTop="37px"
            marginBottom="37px"
          >
            Página de Profile!

            {/* <pre>
              {JSON.stringify(props, null, 4)}
            </pre> */}
            {profile.loading && (
              <p>loading</p>)}
            {!profile.loading && !profile.error && (
              <p>Data loaded</p>
            )}

            <img
              src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif"
              alt="Nicolas Cage"
            />
          </Box>
        </Grid.Col>

      </Grid.Row>
    </Grid.Container>
  );
}
