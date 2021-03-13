import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '../../foundation/Text';
import { Box } from '../../foundation/layout/Container';
import { Grid } from '../../foundation/layout/Grid';
import { Menu } from '../../commons/Menu';
import { Footer } from '../../commons/Footer';
import { Modal } from '../../commons/Modal';
import { FormRegister } from '../../pattern/FormRegister';

export default function FAQScreen({ faqCategories }) {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <Box
      flex="1"
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
              Como podemos te ajudar?
            </Text>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row
          flex={1}
          justifyContent="center"
          alignItems="flex-start"
        >
          {
            faqCategories && faqCategories.map((category) => (
              <Grid.Col
                value={{ xs: 12, md: 3 }}
                flex={1}
                key={category.title}
              >
                <Box
                  width="100%"
                >
                  <Text
                    variant="subTitle"
                    tag="h2"
                    color="tertiary.main"
                    marginBottom="26px"
                  >
                    {category.title}
                  </Text>

                  <Box
                    as="ul"
                    padding="0"
                    listStyle="none"
                  >
                    {category.questions.map((question) => (
                      <li key={question.title}>
                        <Text
                          href={`/faq/${question.slug}`}
                          variant="paragraph1"
                          tag="h2"
                          color="tertiary.light"
                        >
                          {question.title}
                        </Text>
                      </li>
                    ))}
                  </Box>
                </Box>
              </Grid.Col>
            ))
          }
        </Grid.Row>
      </Grid.Container>

      <Footer />

    </Box>
  );
}

FAQScreen.propTypes = {
  faqCategories: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
    questions: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
      description: PropTypes.string,
    })),
  })).isRequired,
};
