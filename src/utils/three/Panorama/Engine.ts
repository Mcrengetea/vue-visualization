import { Object3D, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export class Engine {
    private dom: HTMLElement;
    private renderer: WebGLRenderer;
    private scene: Scene;
    private camera: PerspectiveCamera;

    constructor(dom: HTMLElement) {
        // 获取引擎渲染节点
        this.dom = dom;

        // 初始化渲染器
        this.renderer = new WebGLRenderer({ antialias: true });
        this.renderer.shadowMap.enabled = true;
        this.renderer.setSize(this.dom.offsetWidth, this.dom.offsetHeight, true);

        // 初始化场景
        this.scene = new Scene();

        // 初始化相机
        this.camera = new PerspectiveCamera(45, this.dom.offsetWidth / this.dom.offsetHeight, 1, 1000);
        this.camera.position.set(0.9, 0.9, 0.9);
        this.camera.lookAt(new Vector3(0, 0, 0));
        this.camera.up = new Vector3(0, 1, 0);

        // 初始化轨道控制器
        const orbitControls: OrbitControls = new OrbitControls(this.camera, this.renderer.domElement);
        orbitControls.enableDamping = true;
        orbitControls.enableZoom = false;
        orbitControls.enablePan = false;

        // 渲染动画帧
        const animate = () => {
            orbitControls.update();
            this.renderer.render(this.scene, this.camera);
            // stats.update();
            requestAnimationFrame(animate);
        }
        animate();

        // 挂载引擎渲染节点
        dom.appendChild(this.renderer.domElement);
    }

    // 批量导入场景对象
    addObject(...object: Object3D[]) {
        object.forEach(item => {
            this.scene.add(item);
        });
    }

    // 重置渲染画布和相机
    resize() {
        this.renderer.setSize(this.dom.offsetWidth, this.dom.offsetHeight, true);
        this.camera.aspect = this.dom.offsetWidth / this.dom.offsetHeight;
        this.camera.updateProjectionMatrix();
    }
}