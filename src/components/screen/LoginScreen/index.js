import React from 'react';
import { motion } from 'framer-motion';

import { FormLogin } from '../../pattern/FormLogin';
import { Grid } from '../../foundation/layout/Grid';

export default function LoginScreen() {
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
      <FormLogin />

    </Grid.Container>
  );
}
