const defaultSizes = {
  baseScreenSize: 375,
  minScreenSize: 240,
  maxScreenSize: 640,
  start: 0,
  end: 32,
  step: 2,
  scaled: true,
  key: '',
  fixed: true,
  fixedKey: 'f',
  remScale: 16,
}

export const getKey = (key, size) => {
  if (size < 0) {
    return `${key ? `-${key}` : ''}`
  }

  return `${key ? `${key}-` : ''}`
}

export const getFluidSize = (size, baseScreenSize, minScale, maxScale) => {
  const min = size / minScale
  const max = size / maxScale
  const preferred = (size / baseScreenSize) * 100

  return `clamp(${Math.min(min, max)}rem, ${preferred}vw, ${Math.max(max, min)}rem)`
}

export const getFixedSize = (size, remScale = defaultSizes.remScale) => {
  return `${size / remScale}rem`
}

export const generateSizes = (config) => {
  const { baseScreenSize, minScreenSize, maxScreenSize, start, end, step, scaled, key, fixed, fixedKey, remScale } = {
    ...defaultSizes,
    ...config,
  }

  const minScale = remScale / (minScreenSize / baseScreenSize) // multiplier of how much smaller screen is at min size
  const maxScale = remScale / (maxScreenSize / baseScreenSize) // multiplier of how much bigger screen is at max size

  const sizes = {}

  for (let size = start; size <= end; size += step) {
    if (scaled && typeof key === 'string') {
      sizes[`${getKey(key, size)}${size}`] = getFluidSize(size, baseScreenSize, minScale, maxScale, remScale)
    }

    if (fixed && typeof fixedKey === 'string') {
      sizes[`${getKey(fixedKey, size)}${size}`] = getFixedSize(size, remScale)
    }
  }

  return sizes
}

export const generateColumnWidths = (columns) => {
  const widths = {}

  for (let i = 1; i < columns; i += 1) {
    widths[`${i}/${columns}`] = `${i / columns * 100}%`
  }

  return widths
}

export default { generateSizes, generateColumnWidths, getFluidSize, getFixedSize, getKey }
