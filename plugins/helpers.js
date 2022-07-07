import Vue from 'vue'

import { getRemoteImageUrl } from './helpers/image';

Vue.mixin({
  methods:{
    getRemoteImageUrl,

    capitalizeWord: string => string.length > 1 ? string[0].toUpperCase() + string.slice(1) : string.toUpperCase(),
    isNumber: value => typeof value === 'number',
    truncateCount(value, allowZero = true){
      if (!this.isNumber(value) || value <= 0) return allowZero ? 0 : ''

      let divisor = 1
      let rounder = 1
      let suffix = ''

      switch(true) {
        case value >= 1000000000:
          return '1B+'

        case value >= 100000000:
          divisor = 1000000
          rounder = 1
          suffix = 'M'
          break

        case value >= 1000000:
          divisor = 100000
          rounder = 10
          suffix = 'M'
          break

        case value >= 100000:
          divisor = 1000
          suffix = 'K'
          break

        case value >= 1000:
          divisor = 100
          rounder = 10
          suffix = 'K'
          break

        default:
          break
      }

      return `${(Math.floor(value / divisor) / rounder)}${suffix}`
    }
  }
})
