import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Link } from '../../commons/Link';
import { WebsitePageContext } from '../../wrapper/WebsitePage/context';

import { TextBase } from './styles';

export { TextBase } from './styles';

export function Text({
  tag, variant, href, cmsKey, children, ...props
}) {
  const componentTag = href ? Link : tag;
  const websitePageContext = useContext(WebsitePageContext);
  const componentContent = cmsKey
    ? websitePageContext.getCMSContent(cmsKey)
    : children;

  // refactoring expected
  if (!cmsKey) {
    return (
      <TextBase
        as={componentTag}
        href={href}
        variant={variant}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {componentContent}
      </TextBase>
    );
  }
  return (
    <TextBase
      as={componentTag}
      href={href}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      dangerouslySetInnerHTML={{
        __html: componentContent,
      }}
    />
  );
}

Text.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
  variant: PropTypes.oneOf(['title', 'subTitle', 'paragraph1', 'paragraph2', 'smallestException']),
  href: PropTypes.string,
  cmsKey: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  href: undefined,
  cmsKey: '',
  children: null,
};
