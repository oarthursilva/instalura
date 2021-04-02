import { propToStyle } from './index';

describe('propToStype()', () => {
  describe('when propToStyle receives an sample argument', () => {
    test('and it is a string, should convert to style', () => {
      const propToStyleResult = propToStyle('textAlign');
      const componentProps = { textAlign: 'center' };
      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toEqual({ textAlign: 'center' });
    });

    test('and it is a number, should convert to style', () => {
      const propToStyleResult = propToStyle('flex');
      const componentProps = { flex: 1 };
      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toEqual({ flex: 1 });
    });
  });

  describe('when propToStyle receives an argument with breakpoint', () => {
    test('', () => {

    });
  });
});
