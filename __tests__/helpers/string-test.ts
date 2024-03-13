import { CompareStrings } from '../../src/helpers/string';

it('addition should return 4', () => {
  const a = 2;
  const b = 2;
  const xpto = new CompareStrings();
  expect(xpto.normalizeStrings('não')).toBe('nao');
});
