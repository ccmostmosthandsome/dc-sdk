/*
 * @Author: Caven
 * @Date: 2020-01-07 09:00:32
 * @Last Modified by: Caven
 * @Last Modified time: 2020-04-11 11:53:40
 */
import Cesium from '@/namespace'

DC.T = class {
  /**
   *
   *卡迪尔坐标转84坐标
   * @param {*} cartesian
   *
   */
  static transformCartesianToWSG84(cartesian) {
    if (cartesian) {
      let ellipsoid = Cesium.Ellipsoid.WGS84
      let cartographic = ellipsoid.cartesianToCartographic(cartesian)
      return new DC.Position(
        Cesium.Math.toDegrees(cartographic.longitude),
        Cesium.Math.toDegrees(cartographic.latitude),
        cartographic.height
      )
    }
    return new DC.Position(0, 0)
  }

  /**
   *
   * 84坐标转卡迪尔坐标
   * @param {*} position
   *
   */
  static transformWSG84ToCartesian(position) {
    return position
      ? Cesium.Cartesian3.fromDegrees(
          position.lng,
          position.lat,
          position.alt,
          Cesium.Ellipsoid.WGS84
        )
      : Cesium.Cartesian3.ZERO
  }

  /**
   *
   * 84坐标转制图坐标
   * @param {*} position
   *
   */
  static transformWSG84ToCartographic(position) {
    return position
      ? Cesium.Cartographic.fromDegrees(
          position.lng,
          position.lat,
          position.alt
        )
      : Cesium.Cartographic.ZERO
  }

  /**
   *
   * 卡迪尔坐标数组转84坐标数组
   * @param {*} cartesianArr
   *
   */
  static transformCartesianArrayToWSG84Array(cartesianArr) {
    return cartesianArr
      ? cartesianArr.map(item => DC.T.transformCartesianToWSG84(item))
      : []
  }

  /**
   *
   * 84坐标数组转卡迪尔坐标数组
   * @param {*} WSG84Arr
   *
   */
  static transformWSG84ArrayToCartesianArray(WSG84Arr) {
    return WSG84Arr
      ? WSG84Arr.map(item => DC.T.transformWSG84ToCartesian(item))
      : []
  }
}
