import { getSize, getRemoteImageUrl } from '~/plugins/helpers/image'

describe('getSize returns expected result', () => {
  test('result is default (1080) when no size, height or width provided', () => {
    expect(getSize({})).toBe("1080")
  })

  test('result is size value as string when only size values provided', () => {
    expect(getSize({ size: 120 })).toBe("120")
  })

  test('result is width and height joined with "/" when height and width are different values', () => {
    expect(getSize({ height: 180, width: 120 })).toBe("120/180")
  })

  test('result is value of height as string when both height and width are the same value', () => {
    expect(getSize({ height: 120, width: 120 })).toBe("120")
  })

  test('result is size value as string when all of size, height and width values are provided', () => {
    expect(getSize({ size: 120, height: 9999, width: 2344 })).toBe("120")
  })
})

describe('getRemoteImage returns expected result', () => {
  const baseUrl = 'http://localhost/';

  test('result equals /fit/1080 when no baseUrl and no config provided', () => {
    expect(getRemoteImageUrl()).toBe('/fit/1080');
  })

  test(`result equals ${baseUrl}fit/1080 when no config provided`, () => {
    expect(getRemoteImageUrl(baseUrl, {})).toBe(`${baseUrl}fit/1080`);
  })

  test(`result equals ${baseUrl}fit/[size] when size value provided`, () => {
    expect(getRemoteImageUrl(baseUrl, { size: 120 })).toBe(`${baseUrl}fit/120`);
  })

  test(`result equals ${baseUrl}fit/[width]/[height] when height and width are different values`, () => {
    expect(getRemoteImageUrl(baseUrl, { height: 120, width: 240 })).toBe(`${baseUrl}fit/240/120`);
  })

  test(`result equals ${baseUrl}fit/[width]/[height] when height and width are different values`, () => {
    expect(getRemoteImageUrl(baseUrl, { height: 120, width: 120 })).toBe(`${baseUrl}fit/120`);
  })

  test(`result equals ${baseUrl}fit/[height] when height and width are the same value`, () => {
    expect(getRemoteImageUrl(baseUrl, { height: 120, width: 120 })).toBe(`${baseUrl}fit/120`);
  })

  test(`result equals ${baseUrl}fit/[size] when height, width and size values are all provided`, () => {
    expect(getRemoteImageUrl(baseUrl, { height: 120, width: 120, size: 960 })).toBe(`${baseUrl}fit/960`);
  })

  test(`result equals ${baseUrl}contain/1080 when only fit value is provided`, () => {
    expect(getRemoteImageUrl(baseUrl, { fit: 'contain' })).toBe(`${baseUrl}contain/1080`);
  })

  test(`result equals ${baseUrl}fit/1080.jpg when only includeExtension value is provided and set to true`, () => {
    expect(getRemoteImageUrl(baseUrl, { includeExtension: true })).toBe(`${baseUrl}fit/1080.jpg`);
  })

  test(`result equals ${baseUrl}fit/1080 when only format value is provided`, () => {
    expect(getRemoteImageUrl(baseUrl, { format: 'webp' })).toBe(`${baseUrl}fit/1080`);
  })

  test(`result equals ${baseUrl}fit/1080.webp when format value is provided as 'webp' and includeExtension is true`, () => {
    expect(getRemoteImageUrl(baseUrl, { format: 'webp', includeExtension: true })).toBe(`${baseUrl}fit/1080.webp`);
  })

  test(`result equals ${baseUrl}[fit]/[width]/[height].[format] when all params except size are provided, and height and width are different values`, () => {
    expect(getRemoteImageUrl(baseUrl, {
      height: 1024,
      width: 720,
      fit: 'contain',
      format: 'webp',
      includeExtension: true
    })).toBe(`${baseUrl}contain/720/1024.webp`);
  })

  test(`result equals ${baseUrl}[fit]/[height].[format] when all params except size provided, and height and width are the same value`, () => {
    expect(getRemoteImageUrl(baseUrl, {
      height: 1024,
      width: 1024,
      fit: 'contain',
      format: 'webp',
      includeExtension: true
    })).toBe(`${baseUrl}contain/1024.webp`);
  })


  test(`result equals ${baseUrl}[fit]/[size].[format] when all params including size are provided, and height and width are different values`, () => {
    expect(getRemoteImageUrl(baseUrl, {
      height: 1024,
      width: 720,
      size: 240,
      fit: 'contain',
      format: 'webp',
      includeExtension: true
    })).toBe(`${baseUrl}contain/240.webp`);
  })
})
