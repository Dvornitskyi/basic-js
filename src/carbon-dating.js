import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *1 = 
 */
export default function dateSample(sampleActivity) {
  const floatNumber = parseFloat(sampleActivity);
  if(typeof sampleActivity !== 'string' || floatNumber <= 0 || floatNumber > MODERN_ACTIVITY || isNaN(floatNumber)){
    return false;
  }
  const years = Math.ceil(Math.log(MODERN_ACTIVITY / floatNumber) / (0.693 / HALF_LIFE_PERIOD));
  return years;
}
