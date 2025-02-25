import * as Cesium from "cesium/Cesium";

export function getFlylineMaterial1() {
    return new Cesium.PolylineMaterialAppearance({
      material: new Cesium.Material({
        fabric: {
          type: 'test',
          uniforms: {
            speed: 20,
            repeat: 1, 
            color: Cesium.Color.fromCssColorString('rgba(90,237,142,1)'), // 线段颜色
            flowColor: Cesium.Color.fromCssColorString('rgba(250,122,218, 1)'), // 流光颜色
            flowSpeed: 0.01, // 流光速度
            flowIntensity: 1.0, // 流光强度
            startTime: Math.random()
          },
          source: /* glsl */ `
          uniform vec4 color;
          uniform vec4 flowColor;
          uniform float speed;
          uniform float repeat;
          uniform float startTime;
          czm_material czm_getMaterial(czm_materialInput materialInput)
            {
              czm_material material = czm_getDefaultMaterial(materialInput);
  
              //st.s纵向 st.t横向
              vec2 st = materialInput.st;
              float time = fract(czm_frameNumber * speed / 1000.0 + startTime);
              float offset = fract(st.s*repeat - time);
              //mix混合 smoothstep样条插值
              vec4 ackColor = mix(color, flowColor, smoothstep(1.0 - offset, 1.0 + offset, st.s));
              material.diffuse = ackColor.rgb;
              material.alpha = ackColor.a;
              material.emission = ackColor.rgb * 0.5;
              return material;
            }
          `
        }
      })
    })
  }
  

//   export {getFlylineMaterial1}