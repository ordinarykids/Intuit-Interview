<script>
    import { onMount } from "svelte";
    import * as THREE from "three";

    let container;
    let camera, scene, renderer;
    let globe;

    onMount(() => {
        init();
        animate();
    });

    function init() {
        camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            1000,
        );
        camera.position.z = 500;

        scene = new THREE.Scene();

        const globeGeometry = new THREE.SphereGeometry(200, 32, 32);
        const globeMaterial = new THREE.MeshBasicMaterial({
            color: 0x000000,
            wireframe: true,
            transparent: true,
            opacity: 0.1,
        });
        globe = new THREE.Mesh(globeGeometry, globeMaterial);
        scene.add(globe);

        const shapes = ["square", "triangle", "circle"];
        const numShapes = 50;

        for (let i = 0; i < numShapes; i++) {
            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            let shapeGeometry;

            if (shape === "square") {
                shapeGeometry = new THREE.BoxGeometry(10, 10, 10);
            } else if (shape === "triangle") {
                shapeGeometry = new THREE.ConeGeometry(7, 14, 3);
            } else if (shape === "circle") {
                shapeGeometry = new THREE.SphereGeometry(7, 16, 16);
            }

            const shapeMaterial = new THREE.MeshBasicMaterial({
                color: Math.random() * 0xffffff,
            });
            const shapeMesh = new THREE.Mesh(shapeGeometry, shapeMaterial);

            const angle = Math.random() * Math.PI * 2;
            const radius = 200;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const z = Math.random() * 400 - 200;

            shapeMesh.position.set(x, y, z);
            scene.add(shapeMesh);
        }

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        window.addEventListener("resize", onWindowResize, false);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
        requestAnimationFrame(animate);
        globe.rotation.x += 0.05;
        globe.rotation.y += 0.05;
        renderer.render(scene, camera);
    }
</script>

<div bind:this={container}></div>

<style>
    div {
        width: 100%;
        height: 100%;
    }
</style>
