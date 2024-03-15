<script>
    import { onMount } from "svelte";
    import * as THREE from "three";

    let container;
    let camera, scene, renderer;
    let claude, spheres, particles;

    const init = () => {
        camera = new THREE.PerspectiveCamera(
            70,
            window.innerWidth / window.innerHeight,
            0.01,
            20,
        );
        camera.position.z = 10;

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf0e5c2);

        // Claude's abstract form
        const claudeGeometry = new THREE.IcosahedronGeometry(2, 0);
        const claudeMaterial = new THREE.MeshPhongMaterial({
            color: 0x004c7d,
            emissive: 0x002e4a,
            shininess: 10,
            flatShading: true,
            transparent: true,
            opacity: 0.8,
        });
        claude = new THREE.Mesh(claudeGeometry, claudeMaterial);
        scene.add(claude);

        // Orbiting spheres
        spheres = new THREE.Group();
        const sphereGeometry = new THREE.SphereGeometry(0.4, 16, 16);
        const sphereMaterial = new THREE.MeshBasicMaterial({
            color: 0xe1aa00,
            transparent: true,
            opacity: 0.6,
        });
        for (let i = 0; i < 6; i++) {
            const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
            sphere.position.set(
                Math.random() * 6 - 3,
                Math.random() * 6 - 3,
                Math.random() * 6 - 3,
            );
            spheres.add(sphere);
        }
        claude.add(spheres);

        // Particle system
        const particleCount = 2000;
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount * 3; i++) {
            positions[i] = Math.random() * 20 - 10;
        }
        const particleGeometry = new THREE.BufferGeometry();
        particleGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3),
        );
        const particleMaterial = new THREE.PointsMaterial({
            color: 0xd50000,
            size: 0.04,
            sizeAttenuation: true,
        });
        particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        window.addEventListener("resize", onWindowResize, false);
    };

    const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
        requestAnimationFrame(animate);
        claude.rotation.x += 0.005;
        claude.rotation.y += 0.005;
        spheres.rotation.x += 0.01;
        spheres.rotation.y += 0.01;
        particles.rotation.x += 0.0005;
        particles.rotation.y += 0.001;
        renderer.render(scene, camera);
    };

    onMount(() => {
        init();
        animate();
    });
</script>

<div class="container mx-auto max-w-screen-lg">
    <div class="mx-4 grid gap-4 md:grid-cols-1 lg:mx-0 lg:grid-cols-1">
        <div><h1>A self portrait by Claude 3</h1></div>
    </div>
</div>

<div bind:this={container}></div>

<style>
</style>
