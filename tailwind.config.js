import { generateColumnWidths, generateSizes } from './plugins/_tailwindcss/generate-sizes.js'

const baseScreenSize = 375 // target base screen size
const minScaledScreenSize = 240
const maxScaledScreenSize = 640

const remScale = 16 // number of pixels in 1rem

const minScreenSize = `${minScaledScreenSize / remScale}rem` // min screen size in rems
const maxScreenSize = `${maxScaledScreenSize / remScale}rem` // max screen size in rems

const containerSizes = {
  lg: `${928 / remScale}rem` // 888px + 20px padding each side
}

// Object.fromEntries(new Map(Array(Math.ceil((end - start + 1) / step)).fill(start).map((x, y) => [ x + y * step, fluidSize(x + y * step) ])))

const sizes = generateSizes({ end: baseScreenSize });
const negativeSizes = generateSizes({ start: -baseScreenSize + 1, end: -2 })

const grid = {
  ...generateColumnWidths(12),
  ...generateColumnWidths(8),
  ...generateColumnWidths(6),
  ...generateColumnWidths(5),
  ...generateColumnWidths(4),
  ...generateColumnWidths(3),
  ...generateColumnWidths(2),
}

export default {
  // corePlugins: {
  //   preflight: false,
  // },

  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1280px',
      xl: '1536px',
    },
    backdropBlur: {
      ...generateSizes({ start: 30, end: 30 }),
    },
    extend: {
      colors: {
        'black-opacity-10': 'rgba(0, 0, 0, 0.1)',
        'black-opacity-30': 'rgba(0, 0, 0, 0.3)',
        'black-opacity-50': 'rgba(0, 0, 0, 0.5)',
        'white-opacity-20': 'rgba(255, 255, 255, 0.2)',
        'white-opacity-30': 'rgba(255, 255, 255, 0.3)',
        'backdrop-opacity-33': 'rgba(33, 33, 33, 0.33)',
        'backdrop-opacity-53': 'rgba(33, 33, 33, 0.53)',
        gray: {
          playlog: '#212121',
          inactive: '#ADACAC',
          100: '#6B6B6B',
          200: '#7C7C7C',
          300: '#CECECE',
          400: '#B9B9B9',
          500: '#0f0',
          600: '#0f0',
          700: '#c4c4c4',
          800: '#E9ECEF',
          900: '#0f0',
          border: '#E9ECEF',
          'border-dark': '#888888',
        },
        indigo: {
          playlog: '#4C57FF',
        },
        yellow: {
          playlog: '#EEDAB4',
        },
      },
      backgroundImage: {
        'profile-header': "url('/images/backgrounds/profile-header.svg')",
      },
      zIndex: {
        '-1': '-1',
      },
   },
    borderRadius: {
      full: '99999px',
      ...generateSizes({ start: 1, end: 48, step: 1 }),
    },
    borderWidth: {
      ...generateSizes({ start: 0.5, end: 1.5, step: 1 }),
      ...generateSizes({ start: 1, end: 12, step: 1 }),
    },
    boxShadow: {
      avatar: '0px 4px 30px rgba(50, 50, 93, 0.25);',
      button: '0px 4px 6px rgba(50, 50, 93, 0.11), 0px 1px 3px rgba(0, 0, 0, 0.08)',
    },
    fontSize: generateSizes({ start: 0, end: 48, step: 2 }),
    height: {
      full: '100%',
      screen: '100vh',
      ...sizes,
    },
    lineHeight: {
      ...sizes,
    },
    margin: {
      'auto': 'auto',
      ...negativeSizes,
      ...sizes,
    },
    maxHeight: {
      full: '100%',
      screen: '100vh',
      ...sizes
    },
    minHeight: {
      min: minScreenSize,
      max: maxScreenSize,
      ...containerSizes,
      full: '100%',
      screen: '100vw',
      ...sizes,
      ...generateSizes({ start: 404, end: 404 }),
      ...generateSizes({ baseScreenSize: 9999, start: 646, end: 646 }),
    },
    maxWidth: {
      min: minScreenSize,
      max: maxScreenSize,
      ...containerSizes,
      full: '100%',
      screen: '100vw',
      ...sizes
    },
    minWidth: {
      min: minScreenSize,
      max: maxScreenSize,
      ...containerSizes,
      full: '100%',
      screen: '100vw',
      ...sizes
    },
    padding: {
      full: '100%',
      ...sizes,
    },
    width: {
      min: minScreenSize,
      max: maxScreenSize,
      ...containerSizes,
      full: '100%',
      screen: '100vw',
      ...grid,
      ...sizes
    },
  },
}
