import { normalizeURL, joinURL } from 'ufo'

const defaultSize = 1080;
const defaultConfig = {
  height: null,
  width: null,
  size: null,
  fit: 'fit',
  format: 'jpg',
  includeExtension: false
};

export const isValidDimension = (value) => {
  return typeof value === 'number' && value > 0
}

export const getSize = ({ height, width, size }) => {
  if (isValidDimension(size)) {
    return size.toString()
  } else if (isValidDimension(height) && isValidDimension(width)) {
    return height === width ? height.toString() : joinURL(width.toString(), height.toString())
  }

  return defaultSize.toString()
}

export const getRemoteImageUrl = (baseUrl = '/', config = {}) => {
  const { height, width, size, fit, format, includeExtension  } = {
    ...defaultConfig,
    ...config
  };

  const ext = includeExtension && format ? `.${format}` : '';

  const paramSize = getSize({ height, width, size }).toString()

  return normalizeURL([joinURL(
    baseUrl,
    fit,
    paramSize,
  ), ext].join(''));
}

export default {
  getRemoteImageUrl,
  getSize,
  isValidDimension
};
