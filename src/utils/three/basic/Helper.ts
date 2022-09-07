import { AxesHelper, GridHelper, Object3D, PointLightHelper, SpotLightHelper } from 'three';
import { pointLight, spotLight } from './Light';

export const helperList: Object3D[] = [];

// 初始化坐标轴辅助对象
const axesHelper: AxesHelper = new AxesHelper(500);

// 初始化网格辅助对象
const gridHelper: GridHelper = new GridHelper(500, 10, 'rgb(200, 200, 200)', 'rgb(100, 100, 100)');

// 初始化点光源辅助对象
const pointLightHelper: PointLightHelper = new PointLightHelper(pointLight, pointLight.distance, pointLight.color);

// 初始化聚光灯光源辅助对象
const spotLightHelper: SpotLightHelper = new SpotLightHelper(spotLight, spotLight.color);

helperList.push(axesHelper, gridHelper, pointLightHelper, spotLightHelper);