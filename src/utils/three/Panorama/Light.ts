import { Object3D, PointLight } from 'three';

export const lightList: Object3D[] = [];

// 点光源
export const pointLight: PointLight = new PointLight(0xffffff);
pointLight.position.set(10, 10, 10);
pointLight.castShadow = true;
lightList.push(pointLight);