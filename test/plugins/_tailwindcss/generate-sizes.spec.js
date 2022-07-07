import { generateSizes, generateColumnWidths, getFluidSize, getFixedSize, getKey } from '~/plugins/_tailwindcss/generate-sizes'

describe('getKey returns expected result when provided `key` has no value', () => {
  test('result is "" when `size` is greater than zero', () => {
    expect(getKey('', 1)).toBe("")
  })

  test('result is "" when `size` is equal to zero', () => {
    expect(getKey('', 0)).toBe("")
  })

  test('result is "" when `size` is less than zero', () => {
    expect(getKey('', -1)).toBe("")
  })
})

describe('getKey returns expected result when provided `key` has value "mykey"', () => {
  test('result is "mykey-" when `size` is greater than zero', () => {
    expect(getKey('mykey', 1)).toBe("mykey-")
  })

  test('result is "mykey-" when `size` is equal to zero', () => {
    expect(getKey('mykey', 0)).toBe("mykey-")
  })

  test('result is "-mykey" when `size` is less than zero', () => {
    expect(getKey('mykey', -1)).toBe("-mykey")
  })
})

describe('getFixedSize returns expected result when no `remScale` is provided', () => {
  test('result is "1rem" when `size` is equal to 16', () => {
    expect(getFixedSize(16)).toBe("1rem")
  })

  test('result is "0.5rem" when `size` is equal to 8', () => {
    expect(getFixedSize(8)).toBe("0.5rem")
  })

  test('result is "1.5rem" when `size` is equal to 24', () => {
    expect(getFixedSize(24)).toBe("1.5rem")
  })

  test('result is "2rem" when `size` is equal to 32', () => {
    expect(getFixedSize(32)).toBe("2rem")
  })
})

describe('getFixedSize returns expected result when custom `remScale` is provided', () => {
  test('result is "1rem" when `size` is equal to 8 and `remScale` is equal to 8', () => {
    expect(getFixedSize(8, 8)).toBe("1rem")
  })

  test('result is "1rem" when `size` is equal to 2 and `remScale` is equal to 4', () => {
    expect(getFixedSize(2, 4)).toBe("0.5rem")
  })

  test('result is "1.5rem" when `size` is equal to 96 and `remScale` is equal to 64', () => {
    expect(getFixedSize(96, 64)).toBe("1.5rem")
  })

  test('result is "2rem" when `size` is equal to 24 and `remScale` is equal to 12', () => {
    expect(getFixedSize(24, 12)).toBe("2rem")
  })
})

describe('getFluidSize returns expected result when baseScreenSize is equal to 100, minScale is equal to 0.5 and maxScale is equal to 2', () => {
  test('result is "clamp(0rem, 0vw, 0rem)" when `size` is equal to 0', () => {
    expect(getFluidSize(0, 100, 0.5, 2)).toBe("clamp(0rem, 0vw, 0rem)")
  })

  test('result is "clamp(12.5rem, 25vw, 50rem)" when `size` is equal to 25', () => {
    expect(getFluidSize(25, 100, 0.5, 2)).toBe("clamp(12.5rem, 25vw, 50rem)")
  })

  test('result is "clamp(25rem, 50vw, 100rem)" when `size` is equal to 50', () => {
    expect(getFluidSize(50, 100, 0.5, 2)).toBe("clamp(25rem, 50vw, 100rem)")
  })

  test('result is "clamp(37.5rem, 75vw, 150rem)" when `size` is equal to 75', () => {
    expect(getFluidSize(75, 100, 0.5, 2)).toBe("clamp(37.5rem, 75vw, 150rem)")
  })

  test('result is "clamp(50rem, 100vw, 200rem)" when `size` is equal to 100', () => {
    expect(getFluidSize(100, 100, 0.5, 2)).toBe("clamp(50rem, 100vw, 200rem)")
  })
})

describe('generateColumnWidths returns expected result', () => {
  test('result is `{}` when `columns` is equal to 1', () => {
    expect(generateColumnWidths(1)).toStrictEqual({})
  })

  test('result is `{1/2: 50%}` when `columns` is equal to 1', () => {
    expect(generateColumnWidths(2)).toStrictEqual({ '1/2': '50%' })
  })

  test('result is `{1/4: 25%, 2/4: 50%, 3/4: 75%}` when `columns` is equal to 4', () => {
    expect(generateColumnWidths(4)).toStrictEqual({
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%'
    });
  })
})

describe('generateSizes returns expected results at default base/min/max screen size and default rem scale', () => {
  test('result contains even-number scaled and fixed values from 0 to 32 when no config provided', () => {
    expect(generateSizes({})).toStrictEqual({
      '0': 'clamp(0rem, 0vw, 0rem)',
      '2': 'clamp(0.08rem, 0.5333333333333333vw, 0.21333333333333335rem)',
      '4': 'clamp(0.16rem, 1.0666666666666667vw, 0.4266666666666667rem)',
      '6': 'clamp(0.24rem, 1.6vw, 0.64rem)',
      '8': 'clamp(0.32rem, 2.1333333333333333vw, 0.8533333333333334rem)',
      '10': 'clamp(0.4rem, 2.666666666666667vw, 1.0666666666666667rem)',
      '12': 'clamp(0.48rem, 3.2vw, 1.28rem)',
      '14': 'clamp(0.56rem, 3.733333333333334vw, 1.4933333333333334rem)',
      '16': 'clamp(0.64rem, 4.266666666666667vw, 1.7066666666666668rem)',
      '18': 'clamp(0.72rem, 4.8vw, 1.92rem)',
      '20': 'clamp(0.8rem, 5.333333333333334vw, 2.1333333333333333rem)',
      '22': 'clamp(0.88rem, 5.866666666666666vw, 2.3466666666666667rem)',
      '24': 'clamp(0.96rem, 6.4vw, 2.56rem)',
      '26': 'clamp(1.04rem, 6.933333333333333vw, 2.7733333333333334rem)',
      '28': 'clamp(1.12rem, 7.466666666666668vw, 2.986666666666667rem)',
      '30': 'clamp(1.2rem, 8vw, 3.2rem)',
      '32': 'clamp(1.28rem, 8.533333333333333vw, 3.4133333333333336rem)',
      'f-0': '0rem',
      'f-2': '0.125rem',
      'f-4': '0.25rem',
      'f-6': '0.375rem',
      'f-8': '0.5rem',
      'f-10': '0.625rem',
      'f-12': '0.75rem',
      'f-14': '0.875rem',
      'f-16': '1rem',
      'f-18': '1.125rem',
      'f-20': '1.25rem',
      'f-22': '1.375rem',
      'f-24': '1.5rem',
      'f-26': '1.625rem',
      'f-28': '1.75rem',
      'f-30': '1.875rem',
      'f-32': '2rem'
    })
  })

  test('result contains all numerical scaled and fixed values from 0 to 32 when value `step` is 1', () => {
    expect(generateSizes({ step: 1 })).toStrictEqual({
      '0': 'clamp(0rem, 0vw, 0rem)',
      '1': 'clamp(0.04rem, 0.26666666666666666vw, 0.10666666666666667rem)',
      '2': 'clamp(0.08rem, 0.5333333333333333vw, 0.21333333333333335rem)',
      '3': 'clamp(0.12rem, 0.8vw, 0.32rem)',
      '4': 'clamp(0.16rem, 1.0666666666666667vw, 0.4266666666666667rem)',
      '5': 'clamp(0.2rem, 1.3333333333333335vw, 0.5333333333333333rem)',
      '6': 'clamp(0.24rem, 1.6vw, 0.64rem)',
      '7': 'clamp(0.28rem, 1.866666666666667vw, 0.7466666666666667rem)',
      '8': 'clamp(0.32rem, 2.1333333333333333vw, 0.8533333333333334rem)',
      '9': 'clamp(0.36rem, 2.4vw, 0.96rem)',
      '10': 'clamp(0.4rem, 2.666666666666667vw, 1.0666666666666667rem)',
      '11': 'clamp(0.44rem, 2.933333333333333vw, 1.1733333333333333rem)',
      '12': 'clamp(0.48rem, 3.2vw, 1.28rem)',
      '13': 'clamp(0.52rem, 3.4666666666666663vw, 1.3866666666666667rem)',
      '14': 'clamp(0.56rem, 3.733333333333334vw, 1.4933333333333334rem)',
      '15': 'clamp(0.6rem, 4vw, 1.6rem)',
      '16': 'clamp(0.64rem, 4.266666666666667vw, 1.7066666666666668rem)',
      '17': 'clamp(0.68rem, 4.533333333333333vw, 1.8133333333333332rem)',
      '18': 'clamp(0.72rem, 4.8vw, 1.92rem)',
      '19': 'clamp(0.76rem, 5.066666666666666vw, 2.026666666666667rem)',
      '20': 'clamp(0.8rem, 5.333333333333334vw, 2.1333333333333333rem)',
      '21': 'clamp(0.84rem, 5.6000000000000005vw, 2.24rem)',
      '22': 'clamp(0.88rem, 5.866666666666666vw, 2.3466666666666667rem)',
      '23': 'clamp(0.92rem, 6.133333333333333vw, 2.453333333333333rem)',
      '24': 'clamp(0.96rem, 6.4vw, 2.56rem)',
      '25': 'clamp(1rem, 6.666666666666667vw, 2.6666666666666665rem)',
      '26': 'clamp(1.04rem, 6.933333333333333vw, 2.7733333333333334rem)',
      '27': 'clamp(1.08rem, 7.199999999999999vw, 2.88rem)',
      '28': 'clamp(1.12rem, 7.466666666666668vw, 2.986666666666667rem)',
      '29': 'clamp(1.16rem, 7.733333333333333vw, 3.0933333333333333rem)',
      '30': 'clamp(1.2rem, 8vw, 3.2rem)',
      '31': 'clamp(1.24rem, 8.266666666666666vw, 3.3066666666666666rem)',
      '32': 'clamp(1.28rem, 8.533333333333333vw, 3.4133333333333336rem)',
      'f-0': '0rem',
      'f-1': '0.0625rem',
      'f-2': '0.125rem',
      'f-3': '0.1875rem',
      'f-4': '0.25rem',
      'f-5': '0.3125rem',
      'f-6': '0.375rem',
      'f-7': '0.4375rem',
      'f-8': '0.5rem',
      'f-9': '0.5625rem',
      'f-10': '0.625rem',
      'f-11': '0.6875rem',
      'f-12': '0.75rem',
      'f-13': '0.8125rem',
      'f-14': '0.875rem',
      'f-15': '0.9375rem',
      'f-16': '1rem',
      'f-17': '1.0625rem',
      'f-18': '1.125rem',
      'f-19': '1.1875rem',
      'f-20': '1.25rem',
      'f-21': '1.3125rem',
      'f-22': '1.375rem',
      'f-23': '1.4375rem',
      'f-24': '1.5rem',
      'f-25': '1.5625rem',
      'f-26': '1.625rem',
      'f-27': '1.6875rem',
      'f-28': '1.75rem',
      'f-29': '1.8125rem',
      'f-30': '1.875rem',
      'f-31': '1.9375rem',
      'f-32': '2rem'
    })
  })

  test('result contains multiples of 4 scaled and fixed values from 0 to 32 when value `step` is 4', () => {
    expect(generateSizes({ step: 4 })).toStrictEqual({
      '0': 'clamp(0rem, 0vw, 0rem)',
      '4': 'clamp(0.16rem, 1.0666666666666667vw, 0.4266666666666667rem)',
      '8': 'clamp(0.32rem, 2.1333333333333333vw, 0.8533333333333334rem)',
      '12': 'clamp(0.48rem, 3.2vw, 1.28rem)',
      '16': 'clamp(0.64rem, 4.266666666666667vw, 1.7066666666666668rem)',
      '20': 'clamp(0.8rem, 5.333333333333334vw, 2.1333333333333333rem)',
      '24': 'clamp(0.96rem, 6.4vw, 2.56rem)',
      '28': 'clamp(1.12rem, 7.466666666666668vw, 2.986666666666667rem)',
      '32': 'clamp(1.28rem, 8.533333333333333vw, 3.4133333333333336rem)',
      'f-0': '0rem',
      'f-4': '0.25rem',
      'f-8': '0.5rem',
      'f-12': '0.75rem',
      'f-16': '1rem',
      'f-20': '1.25rem',
      'f-24': '1.5rem',
      'f-28': '1.75rem',
      'f-32': '2rem'
    })
  })

  test('result does not contain scaled values when `scaled` value is false', () => {
    expect(generateSizes({ scaled: false })).toStrictEqual({
      'f-0': '0rem',
      'f-2': '0.125rem',
      'f-4': '0.25rem',
      'f-6': '0.375rem',
      'f-8': '0.5rem',
      'f-10': '0.625rem',
      'f-12': '0.75rem',
      'f-14': '0.875rem',
      'f-16': '1rem',
      'f-18': '1.125rem',
      'f-20': '1.25rem',
      'f-22': '1.375rem',
      'f-24': '1.5rem',
      'f-26': '1.625rem',
      'f-28': '1.75rem',
      'f-30': '1.875rem',
      'f-32': '2rem'
    })
  })

  test('result does not contain fixed values when `fixed` value is false', () => {
    expect(generateSizes({ fixed: false })).toStrictEqual({
      '0': 'clamp(0rem, 0vw, 0rem)',
      '2': 'clamp(0.08rem, 0.5333333333333333vw, 0.21333333333333335rem)',
      '4': 'clamp(0.16rem, 1.0666666666666667vw, 0.4266666666666667rem)',
      '6': 'clamp(0.24rem, 1.6vw, 0.64rem)',
      '8': 'clamp(0.32rem, 2.1333333333333333vw, 0.8533333333333334rem)',
      '10': 'clamp(0.4rem, 2.666666666666667vw, 1.0666666666666667rem)',
      '12': 'clamp(0.48rem, 3.2vw, 1.28rem)',
      '14': 'clamp(0.56rem, 3.733333333333334vw, 1.4933333333333334rem)',
      '16': 'clamp(0.64rem, 4.266666666666667vw, 1.7066666666666668rem)',
      '18': 'clamp(0.72rem, 4.8vw, 1.92rem)',
      '20': 'clamp(0.8rem, 5.333333333333334vw, 2.1333333333333333rem)',
      '22': 'clamp(0.88rem, 5.866666666666666vw, 2.3466666666666667rem)',
      '24': 'clamp(0.96rem, 6.4vw, 2.56rem)',
      '26': 'clamp(1.04rem, 6.933333333333333vw, 2.7733333333333334rem)',
      '28': 'clamp(1.12rem, 7.466666666666668vw, 2.986666666666667rem)',
      '30': 'clamp(1.2rem, 8vw, 3.2rem)',
      '32': 'clamp(1.28rem, 8.533333333333333vw, 3.4133333333333336rem)',
    })
  })

  test('result prefixed when custom scaled & fixed keys are provided', () => {
    expect(generateSizes({ key: 'scaled', fixedKey: 'fixed' })).toStrictEqual({
      'scaled-0': 'clamp(0rem, 0vw, 0rem)',
      'scaled-2': 'clamp(0.08rem, 0.5333333333333333vw, 0.21333333333333335rem)',
      'scaled-4': 'clamp(0.16rem, 1.0666666666666667vw, 0.4266666666666667rem)',
      'scaled-6': 'clamp(0.24rem, 1.6vw, 0.64rem)',
      'scaled-8': 'clamp(0.32rem, 2.1333333333333333vw, 0.8533333333333334rem)',
      'scaled-10': 'clamp(0.4rem, 2.666666666666667vw, 1.0666666666666667rem)',
      'scaled-12': 'clamp(0.48rem, 3.2vw, 1.28rem)',
      'scaled-14': 'clamp(0.56rem, 3.733333333333334vw, 1.4933333333333334rem)',
      'scaled-16': 'clamp(0.64rem, 4.266666666666667vw, 1.7066666666666668rem)',
      'scaled-18': 'clamp(0.72rem, 4.8vw, 1.92rem)',
      'scaled-20': 'clamp(0.8rem, 5.333333333333334vw, 2.1333333333333333rem)',
      'scaled-22': 'clamp(0.88rem, 5.866666666666666vw, 2.3466666666666667rem)',
      'scaled-24': 'clamp(0.96rem, 6.4vw, 2.56rem)',
      'scaled-26': 'clamp(1.04rem, 6.933333333333333vw, 2.7733333333333334rem)',
      'scaled-28': 'clamp(1.12rem, 7.466666666666668vw, 2.986666666666667rem)',
      'scaled-30': 'clamp(1.2rem, 8vw, 3.2rem)',
      'scaled-32': 'clamp(1.28rem, 8.533333333333333vw, 3.4133333333333336rem)',
      'fixed-0': '0rem',
      'fixed-2': '0.125rem',
      'fixed-4': '0.25rem',
      'fixed-6': '0.375rem',
      'fixed-8': '0.5rem',
      'fixed-10': '0.625rem',
      'fixed-12': '0.75rem',
      'fixed-14': '0.875rem',
      'fixed-16': '1rem',
      'fixed-18': '1.125rem',
      'fixed-20': '1.25rem',
      'fixed-22': '1.375rem',
      'fixed-24': '1.5rem',
      'fixed-26': '1.625rem',
      'fixed-28': '1.75rem',
      'fixed-30': '1.875rem',
      'fixed-32': '2rem'
    })
  })

  test('result contains positive and negative fixed & scaled values from -32 to 16 when start is -32 and end is 16', () => {
    expect(generateSizes({ start: -32, end: 16 })).toStrictEqual({
      '0': 'clamp(0rem, 0vw, 0rem)',
      '2': 'clamp(0.08rem, 0.5333333333333333vw, 0.21333333333333335rem)',
      '4': 'clamp(0.16rem, 1.0666666666666667vw, 0.4266666666666667rem)',
      '6': 'clamp(0.24rem, 1.6vw, 0.64rem)',
      '8': 'clamp(0.32rem, 2.1333333333333333vw, 0.8533333333333334rem)',
      '10': 'clamp(0.4rem, 2.666666666666667vw, 1.0666666666666667rem)',
      '12': 'clamp(0.48rem, 3.2vw, 1.28rem)',
      '14': 'clamp(0.56rem, 3.733333333333334vw, 1.4933333333333334rem)',
      '16': 'clamp(0.64rem, 4.266666666666667vw, 1.7066666666666668rem)',
      '-32': 'clamp(-3.4133333333333336rem, -8.533333333333333vw, -1.28rem)',
      '-f-32': '-2rem',
      '-30': 'clamp(-3.2rem, -8vw, -1.2rem)',
      '-f-30': '-1.875rem',
      '-28': 'clamp(-2.986666666666667rem, -7.466666666666668vw, -1.12rem)',
      '-f-28': '-1.75rem',
      '-26': 'clamp(-2.7733333333333334rem, -6.933333333333333vw, -1.04rem)',
      '-f-26': '-1.625rem',
      '-24': 'clamp(-2.56rem, -6.4vw, -0.96rem)',
      '-f-24': '-1.5rem',
      '-22': 'clamp(-2.3466666666666667rem, -5.866666666666666vw, -0.88rem)',
      '-f-22': '-1.375rem',
      '-20': 'clamp(-2.1333333333333333rem, -5.333333333333334vw, -0.8rem)',
      '-f-20': '-1.25rem',
      '-18': 'clamp(-1.92rem, -4.8vw, -0.72rem)',
      '-f-18': '-1.125rem',
      '-16': 'clamp(-1.7066666666666668rem, -4.266666666666667vw, -0.64rem)',
      '-f-16': '-1rem',
      '-14': 'clamp(-1.4933333333333334rem, -3.733333333333334vw, -0.56rem)',
      '-f-14': '-0.875rem',
      '-12': 'clamp(-1.28rem, -3.2vw, -0.48rem)',
      '-f-12': '-0.75rem',
      '-10': 'clamp(-1.0666666666666667rem, -2.666666666666667vw, -0.4rem)',
      '-f-10': '-0.625rem',
      '-8': 'clamp(-0.8533333333333334rem, -2.1333333333333333vw, -0.32rem)',
      '-f-8': '-0.5rem',
      '-6': 'clamp(-0.64rem, -1.6vw, -0.24rem)',
      '-f-6': '-0.375rem',
      '-4': 'clamp(-0.4266666666666667rem, -1.0666666666666667vw, -0.16rem)',
      '-f-4': '-0.25rem',
      '-2': 'clamp(-0.21333333333333335rem, -0.5333333333333333vw, -0.08rem)',
      '-f-2': '-0.125rem',
      'f-0': '0rem',
      'f-2': '0.125rem',
      'f-4': '0.25rem',
      'f-6': '0.375rem',
      'f-8': '0.5rem',
      'f-10': '0.625rem',
      'f-12': '0.75rem',
      'f-14': '0.875rem',
      'f-16': '1rem'
    })
  })
})

describe('generateSizes returns expected results at baseScreenSize 1024, minScreenSize 640 and maxScreenSize 1280', () => {
  test('result contains scaled and fixed values from 0 to 32 when no additional config provided', () => {
    expect(generateSizes({ baseScreenSize: 1024, minScreenSize: 640, maxScreenSize: 1200 })).toStrictEqual({
      '0': 'clamp(0rem, 0vw, 0rem)',
      '2': 'clamp(0.078125rem, 0.1953125vw, 0.146484375rem)',
      '4': 'clamp(0.15625rem, 0.390625vw, 0.29296875rem)',
      '6': 'clamp(0.234375rem, 0.5859375vw, 0.43945312499999994rem)',
      '8': 'clamp(0.3125rem, 0.78125vw, 0.5859375rem)',
      '10': 'clamp(0.390625rem, 0.9765625vw, 0.732421875rem)',
      '12': 'clamp(0.46875rem, 1.171875vw, 0.8789062499999999rem)',
      '14': 'clamp(0.546875rem, 1.3671875vw, 1.025390625rem)',
      '16': 'clamp(0.625rem, 1.5625vw, 1.171875rem)',
      '18': 'clamp(0.703125rem, 1.7578125vw, 1.318359375rem)',
      '20': 'clamp(0.78125rem, 1.953125vw, 1.46484375rem)',
      '22': 'clamp(0.859375rem, 2.1484375vw, 1.611328125rem)',
      '24': 'clamp(0.9375rem, 2.34375vw, 1.7578124999999998rem)',
      '26': 'clamp(1.015625rem, 2.5390625vw, 1.9042968749999998rem)',
      '28': 'clamp(1.09375rem, 2.734375vw, 2.05078125rem)',
      '30': 'clamp(1.171875rem, 2.9296875vw, 2.197265625rem)',
      '32': 'clamp(1.25rem, 3.125vw, 2.34375rem)',
      'f-0': '0rem',
      'f-2': '0.125rem',
      'f-4': '0.25rem',
      'f-6': '0.375rem',
      'f-8': '0.5rem',
      'f-10': '0.625rem',
      'f-12': '0.75rem',
      'f-14': '0.875rem',
      'f-16': '1rem',
      'f-18': '1.125rem',
      'f-20': '1.25rem',
      'f-22': '1.375rem',
      'f-24': '1.5rem',
      'f-26': '1.625rem',
      'f-28': '1.75rem',
      'f-30': '1.875rem',
      'f-32': '2rem'
    })
  })

  test('result contains expected scaled and fixed values from 0 to 32 when remScale is 32', () => {
    expect(generateSizes({ baseScreenSize: 1024, minScreenSize: 640, maxScreenSize: 1200, remScale: 32 })).toStrictEqual({
      '0': 'clamp(0rem, 0vw, 0rem)',
      '2': 'clamp(0.0390625rem, 0.1953125vw, 0.0732421875rem)',
      '4': 'clamp(0.078125rem, 0.390625vw, 0.146484375rem)',
      '6': 'clamp(0.1171875rem, 0.5859375vw, 0.21972656249999997rem)',
      '8': 'clamp(0.15625rem, 0.78125vw, 0.29296875rem)',
      '10': 'clamp(0.1953125rem, 0.9765625vw, 0.3662109375rem)',
      '12': 'clamp(0.234375rem, 1.171875vw, 0.43945312499999994rem)',
      '14': 'clamp(0.2734375rem, 1.3671875vw, 0.5126953125rem)',
      '16': 'clamp(0.3125rem, 1.5625vw, 0.5859375rem)',
      '18': 'clamp(0.3515625rem, 1.7578125vw, 0.6591796875rem)',
      '20': 'clamp(0.390625rem, 1.953125vw, 0.732421875rem)',
      '22': 'clamp(0.4296875rem, 2.1484375vw, 0.8056640625rem)',
      '24': 'clamp(0.46875rem, 2.34375vw, 0.8789062499999999rem)',
      '26': 'clamp(0.5078125rem, 2.5390625vw, 0.9521484374999999rem)',
      '28': 'clamp(0.546875rem, 2.734375vw, 1.025390625rem)',
      '30': 'clamp(0.5859375rem, 2.9296875vw, 1.0986328125rem)',
      '32': 'clamp(0.625rem, 3.125vw, 1.171875rem)',
      'f-0': '0rem',
      'f-2': '0.0625rem',
      'f-4': '0.125rem',
      'f-6': '0.1875rem',
      'f-8': '0.25rem',
      'f-10': '0.3125rem',
      'f-12': '0.375rem',
      'f-14': '0.4375rem',
      'f-16': '0.5rem',
      'f-18': '0.5625rem',
      'f-20': '0.625rem',
      'f-22': '0.6875rem',
      'f-24': '0.75rem',
      'f-26': '0.8125rem',
      'f-28': '0.875rem',
      'f-30': '0.9375rem',
      'f-32': '1rem'
    })
  })

  test('result contains expected scaled and fixed values from 16 to 64 when start is 16 and end is 64', () => {
    expect(generateSizes({ baseScreenSize: 1024, minScreenSize: 640, maxScreenSize: 1200, start: 16, end: 64 })).toStrictEqual({
      '16': 'clamp(0.625rem, 1.5625vw, 1.171875rem)',
      '18': 'clamp(0.703125rem, 1.7578125vw, 1.318359375rem)',
      '20': 'clamp(0.78125rem, 1.953125vw, 1.46484375rem)',
      '22': 'clamp(0.859375rem, 2.1484375vw, 1.611328125rem)',
      '24': 'clamp(0.9375rem, 2.34375vw, 1.7578124999999998rem)',
      '26': 'clamp(1.015625rem, 2.5390625vw, 1.9042968749999998rem)',
      '28': 'clamp(1.09375rem, 2.734375vw, 2.05078125rem)',
      '30': 'clamp(1.171875rem, 2.9296875vw, 2.197265625rem)',
      '32': 'clamp(1.25rem, 3.125vw, 2.34375rem)',
      '34': 'clamp(1.328125rem, 3.3203125vw, 2.490234375rem)',
      '36': 'clamp(1.40625rem, 3.515625vw, 2.63671875rem)',
      '38': 'clamp(1.484375rem, 3.7109375vw, 2.783203125rem)',
      '40': 'clamp(1.5625rem, 3.90625vw, 2.9296875rem)',
      '42': 'clamp(1.640625rem, 4.1015625vw, 3.076171875rem)',
      '44': 'clamp(1.71875rem, 4.296875vw, 3.22265625rem)',
      '46': 'clamp(1.796875rem, 4.4921875vw, 3.369140625rem)',
      '48': 'clamp(1.875rem, 4.6875vw, 3.5156249999999996rem)',
      '50': 'clamp(1.953125rem, 4.8828125vw, 3.6621093749999996rem)',
      '52': 'clamp(2.03125rem, 5.078125vw, 3.8085937499999996rem)',
      '54': 'clamp(2.109375rem, 5.2734375vw, 3.9550781249999996rem)',
      '56': 'clamp(2.1875rem, 5.46875vw, 4.1015625rem)',
      '58': 'clamp(2.265625rem, 5.6640625vw, 4.248046875rem)',
      '60': 'clamp(2.34375rem, 5.859375vw, 4.39453125rem)',
      '62': 'clamp(2.421875rem, 6.0546875vw, 4.541015625rem)',
      '64': 'clamp(2.5rem, 6.25vw, 4.6875rem)',
      'f-16': '1rem',
      'f-18': '1.125rem',
      'f-20': '1.25rem',
      'f-22': '1.375rem',
      'f-24': '1.5rem',
      'f-26': '1.625rem',
      'f-28': '1.75rem',
      'f-30': '1.875rem',
      'f-32': '2rem',
      'f-34': '2.125rem',
      'f-36': '2.25rem',
      'f-38': '2.375rem',
      'f-40': '2.5rem',
      'f-42': '2.625rem',
      'f-44': '2.75rem',
      'f-46': '2.875rem',
      'f-48': '3rem',
      'f-50': '3.125rem',
      'f-52': '3.25rem',
      'f-54': '3.375rem',
      'f-56': '3.5rem',
      'f-58': '3.625rem',
      'f-60': '3.75rem',
      'f-62': '3.875rem',
      'f-64': '4rem'
    })
  })
})
