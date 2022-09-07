import { AmbientLight, Object3D, PointLight, SpotLight } from 'three';

export const lightList: Object3D[] = [];

// 环境光源
export const ambientLight: AmbientLight = new AmbientLight(0xffffff, 0.2);

// 点光源
export const pointLight: PointLight = new PointLight(0xffffff, 0.2, 200, 0.1);
pointLight.position.set(-50, 20, 0);
pointLight.castShadow = true;

// 聚光灯光源
export const spotLight: SpotLight = new SpotLight(0xffffff, 1, 200, Math.PI / 6, 0, 0);
spotLight.position.set(-50, 20, -30);
spotLight.castShadow = true;

lightList.push(ambientLight, pointLight, spotLight);