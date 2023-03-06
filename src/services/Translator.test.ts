import { getStringMappings } from './Translator';

test('String Mappings is returned', () => {
  const stringMappings = getStringMappings();
  expect(Object.keys(stringMappings).length).toBeGreaterThan(0);
});
