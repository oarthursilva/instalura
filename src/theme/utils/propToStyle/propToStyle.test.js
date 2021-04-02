import { propToStyle } from './index';

describe('propToStype()', () => {
  describe('when propToStyle receives an sample argument', () => {
    test('and it is a string, should convert to style', () => {
      const propToStyleResult = propToStyle('textAlign');
      // <Text textAlign="center" />
      const componentProps = { textAlign: 'center' }; // string
      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toEqual({ textAlign: 'center' });
    });

    test('and it is a number, should convert to style', () => {
      const propToStyleResult = propToStyle('flex');
      // <Box flex={1} />
      const componentProps = { flex: 1 }; // number
      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toEqual({ flex: 1 });
    });
  });

  describe('when propToStyle receives an argument with breakpoint', () => {
    test('render only a single small breakpoint resolution', () => {
      const propToStyleResult = propToStyle('textAlign');
      // <Text textAlign={{ xs: 'center' }}" />
      const componentProps = { textAlign: { xs: 'center' } }; // object
      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toMatchSnapshot();
    });

    test('render only a single large breakpoint resolution', () => {
      const propToStyleResult = propToStyle('textAlign');
      // <Text textAlign={{ xl: 'center' }}" />
      const componentProps = { textAlign: { xl: 'center' } }; // object
      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toMatchSnapshot();
    });
  });

  describe('when propToStyle receives an argument with breakpoints', () => {
    test('render multiple breakpoints resolutions', () => {
      const propToStyleResult = propToStyle('textAlign');
      // <Text textAlign={{ sm: 'center', md: 'center', lg: 'center' }}" />
      const componentProps = { textAlign: { sm: 'center', md: 'left', lg: 'center' } }; // object
      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toMatchSnapshot();
    });
  });
});
