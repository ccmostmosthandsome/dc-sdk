/*
 * @Author: Caven
 * @Date: 2020-04-18 19:36:03
 * @Last Modified by: Caven
 * @Last Modified time: 2020-04-18 19:36:28
 */
;(function() {
  let initialized = false
  if (!DC) {
    console.error('DC.Analysis: Missing DC Sdk')
  }
  DC.init(() => {
    initialized = true
  })
})()
