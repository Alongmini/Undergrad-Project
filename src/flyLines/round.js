import * as Cesium from "cesium/Cesium";

function round(i) {
    return new Cesium.GroundPrimitive({
        geometryInstances: new Cesium.GeometryInstance({
            geometry: new Cesium.EllipseGeometry({
                center: Cesium.Cartesian3.fromDegrees(i[2], i[3]),
                semiMajorAxis: 30000.0,
                semiMinorAxis: 30000.0,
            }),
            attributes: {
                color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.WHITE)
            }
        }),
        appearance: new Cesium.MaterialAppearance({
            vertexShaderSource: `
          `,
            material: new Cesium.Material({
                fabric: {
                    type: 'dynamics point',
                    uniforms: {
                        color: new Cesium.Color(1, 1, 0, 0.7),
                        speed: 12.0,
                        count: 2,
                        gradient: 0.2,
                    },
                    source: /* glsl */ `
                uniform vec4 color;
                uniform float speed;
                uniform float count;
                uniform float gradient;
                czm_material czm_getMaterial(czm_materialInput materialInput)
                {
                czm_material material = czm_getDefaultMaterial(materialInput);
                material.diffuse = 1.5 * color.rgb;
                vec2 st = materialInput.st;
                float dis = distance(st, vec2(0.5, 0.5));
                float per = fract(czm_frameNumber * speed / 1000.0);
                if(count == 1.0){
                    if(dis > per * 0.5){
                    discard;
                    }else {
                    material.alpha = color.a  * dis / per / 2.0;
                    }
                } else {
                    vec3 str = materialInput.str;
                    if(abs(str.z)  > 0.001){
                      discard;
                    }
                    if(dis > 0.5){
                      discard;
                    } else {
                    float perDis = 0.5 / count;
                    float disNum;
                    float bl = 0.0;
                    float i = 0.0;
                    for(i; i <= 5; i++){
                        if(float(i) <= count) {
                          disNum = perDis * float(i) - dis + per / count;
                          if(disNum > 0.0) {
                              if(disNum < perDis){
                                bl = 1.0 - disNum / perDis;
                              }
                              else if(disNum - perDis < perDis){
                                bl = 1.0 - abs(1.0 - disNum / perDis);
                              }
                              material.alpha = pow(bl,(1.0 + 10.0 * (1.0 - gradient)));
                          }
                        }
                    }
                  }
                }
                return material;
                }
              `
                },
            }),

        })
    })
}


export {round}