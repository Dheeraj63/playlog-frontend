import { titleTemplate } from '~/plugins/helpers/meta'

describe('plugins/helpers/meta', () => {
  test('result equals `Playlog` when titleChunk is empty', () => {
    expect(titleTemplate()).toBe('Playlog')
  });

  test('result equals `[titleChunk] | Playlog` when titleChunk does not end with "Playlog"', () => {
    expect(titleTemplate('Test Page')).toBe('Test Page | Playlog');
  });

  test('result equals `[titleChunk]` when titleChunk ends with "Playlog"', () => {
    expect(titleTemplate('Why Playlog')).toBe('Why Playlog');
  });

  test('result equals `[titleChunk] | Playlog` when titleChunk contains but does not end with "Playlog"', () => {
    expect(titleTemplate('Why Playlog Test Test')).toBe('Why Playlog Test Test | Playlog');
  });

  test('result equals `[titleChunk]` when titleChunk contains pipe "|" character', () => {
    expect(titleTemplate('Why Playlog | How We\'re Changing the Game')).toBe('Why Playlog | How We\'re Changing the Game');
  });
});
