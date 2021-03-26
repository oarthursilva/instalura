import React from 'react';
import { websitePageHOC } from '../../src/components/wrapper/WebsitePage/hoc';
import FAQQuestionScreen from '../../src/components/screen/FAQQuestionScreen';

function FAQDynamicScreen({ category, question }) {
  return (
    <FAQQuestionScreen
      question={question}
      category={category}
    />
  );
}

FAQDynamicScreen.propTypes = FAQQuestionScreen.propTypes;

export default websitePageHOC(FAQDynamicScreen);

export async function getStaticProps({ params }) {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then(async (res) => {
      const response = await res.json();
      return response.data;
    });

  const data = faqCategories.reduce((accumulate, faqCategory) => {
    const foundQuestion = faqCategory.questions.find((question) => {
      if (question.slug === params.slug) {
        return true;
      }
      return false;
    });

    if (foundQuestion) {
      return {
        ...accumulate,
        category: faqCategory,
        question: foundQuestion,
      };
    }
    return accumulate;
  }, {});

  return {
    props: {
      category: data.category,
      question: data.question,
      pageWrapperProps: {
        seoProps: {
          headTitle: data.question.title,
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then(async (res) => {
      const response = await res.json();
      return response;
    });

  const paths = faqCategories.data.reduce((accumulate, faqCategory) => {
    const questionPaths = faqCategory.questions.map((question) => (
      { params: { slug: question.slug } }));
    return [
      ...accumulate,
      ...questionPaths,
    ];
  }, []);

  return {
    paths,
    fallback: false,
  };
}
