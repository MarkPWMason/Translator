import { getSoundMappings } from './Translator';

test('String Mappings is returned', () => {
  const stringMappings = getSoundMappings();
  expect(Object.keys(stringMappings).length).toBeGreaterThan(0);
});
