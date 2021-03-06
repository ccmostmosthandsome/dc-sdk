/*
 * @Author: Caven
 * @Date: 2020-03-31 20:58:06
 * @Last Modified by: Caven
 * @Last Modified time: 2020-04-15 20:33:39
 */

export default function isBetween(value, min, max) {
  value = parseFloat(value || 0.0)
  return value >= parseFloat(min) && value <= parseFloat(max)
}
