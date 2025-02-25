import * as Cesium from "cesium/Cesium";


function parabola(twoPoints) {
    let s = [];
    let startPoint = [twoPoints[0], twoPoints[1], 0];
    s = s.concat(startPoint);
    let step = 40;//把起点和终点之间的距离均分为了step段
    let heightProportion = 0.205;//起点终2点之间的差值与最高值点之间的比
    let dLon = (twoPoints[2] - startPoint[0]) / step;//均分了step段，每一段的经度差
    let dLat = (twoPoints[3] - startPoint[1]) / step;//均分了step段，每一段的纬度差
    let deltaLon = dLon * Math.abs(111000 * Math.cos(twoPoints[1]));//换算成按米计的距离
    let deltaLat = dLat * 111000;//换算成按米计的距离
    let endPoint = [0, 0, 0];
    let heigh = step * Math.sqrt(Math.abs(deltaLon * deltaLon + deltaLat * deltaLat)) * heightProportion;//计算整个区域内的最高点
    // let x2 = Math.sqrt(Math.abs(dLon * dLat + dLat * dLat));
    // let x2 = 1;
    // let heigh = step * Math.sqrt(deltaLon * deltaLon + deltaLat * deltaLat) * heightProportion * 2;
    // let x2 = 10000 * Math.sqrt(dLon * dLat + dLat * dLat);
    // let a = heigh / (x2 * x2);

    function y(x) { 
      return heigh - heigh * x * x; 
    }

    for (var i = 1; i <= step; i++) {
      endPoint[0] = startPoint[0] + dLon;
      endPoint[1] = startPoint[1] + dLat;
      let x = 2 * i / step - 1;//这一步是为了确定每一段的x的位置，从而计算后一点的高度值，-1是后算的值，如果i正好是中间点的化，这个值就是0，所以这个点就是最大值
      // console.log(x)
      endPoint[2] = y(x)*1;
      s = s.concat(endPoint);

      startPoint[0] = endPoint[0];
      startPoint[1] = endPoint[1];
      startPoint[2] = endPoint[2];
    }
    return Cesium.Cartesian3.fromDegreesArrayHeights(s);
  }

// function parabola(
//     startPosition,
//     endPosition,
//     height=500000,
//     count = 50
// ) {
//     //方程 y=-(4h/L^2)*x^2+h h:顶点高度 L：横纵间距较大者
//     let result = []
//     height = Math.max(+height, 100)
//     count = Math.max(+count, 50)
//     let diffLon = Math.abs(startPosition[0] - endPosition[0])
//     let diffLat = Math.abs(startPosition[1] - endPosition[1])
//     let L = Math.max(diffLon, diffLat)
//     let dlt = L / count
//     if (diffLon > diffLat) {
//         //base on lon
//         let delLat = (endPosition[1] - startPosition[1]) / count
//         if (startPosition[0] - endPosition[0] > 0) {
//             dlt = -dlt
//         }
//         for (let i = 0; i < count; i++) {
//             let h =
//                 height -
//                 (Math.pow(-0.5 * L + Math.abs(dlt) * i, 2) * 4 * height) /
//                 Math.pow(L, 2)
//             let lon = startPosition[0] + dlt * i
//             let lat = startPosition[1] + delLat * i
//             let point = new Cesium.Cartesian3.fromDegrees(lon, lat, h);
//             result.push(point);
//         }
//     } else {
//         //base on lat
//         let delLon = (endPosition[0] - startPosition[0]) / count
//         if (startPosition[1] - endPosition[1] > 0) {
//             dlt = -dlt
//         }
//         for (let i = 0; i < count; i++) {
//             let h =
//                 height -
//                 (Math.pow(-0.5 * L + Math.abs(dlt) * i, 2) * 4 * height) /
//                 Math.pow(L, 2)
//             let lon = startPosition[0] + delLon * i
//             let lat = startPosition[1] + dlt * i
//             let point = new Cesium.Cartesian3.fromDegrees(lon, lat, h);
//             result.push(point);
//         }
//     }
//     return result
// }


export { parabola }