<script>
    import { onMount, tick } from "svelte";
    import { gsap } from "gsap";

    let gridSize = 8;
    let squares = Array(gridSize * gridSize).fill(null);

    onMount(async () => {
        await tick();

        gsap.to(".square", {
            duration: 1,
            ease: "power1.inOut",
            stagger: {
                each: 0.1,
                repeat: -1,
                yoyo: true,
                grid: [gridSize, gridSize],
                from: gsap.utils.random(0, squares.length - 1),
            },
            x: () => gsap.utils.random(-50, 50),
            y: () => gsap.utils.random(-50, 50),
            scale: () => gsap.utils.random(0.5, 1.5),
            rotation: () => gsap.utils.random(-90, 90),
        });
    });
</script>

<div class="grid">
    {#each squares as _, index}
        <div class="square" />
    {/each}
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-gap: 10px;
        width: 100vh;
        height: 100vh;
        margin: 0 auto;
        background-color: white;
    }

    .square {
        background-color: black;
        border-radius: 4px;
    }
</style>
