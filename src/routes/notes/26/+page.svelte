<script>
    import { onMount } from "svelte";

    let svgWidth = 800;
    let svgHeight = 600;
    let lineCount = 900;
    let lineWidth = 0.8;
    let lineSpacing = 4;
    let rotationSpeed = 0.003;
    let zoomSpeed = 0.005;
    let color1 = "#000000";
    let color2 = "#FFFFFF";
    let time = 0;

    let animationFrame;

    const animate = () => {
        time += 1;
        animationFrame = requestAnimationFrame(animate);
    };

    onMount(() => {
        animate();

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    });
</script>

<svg width={svgWidth} height={svgHeight}>
    {#each Array(lineCount) as _, i}
        {@const angle = (i / lineCount) * Math.PI * 2}
        {@const radius = Math.min(svgWidth * 6, svgHeight * 6) * 0.4}
        {@const centerX = svgWidth / 2}
        {@const centerY = svgHeight / 2}
        {@const x1 =
            centerX +
            Math.cos(angle + time * rotationSpeed) *
                radius *
                Math.sin(time * zoomSpeed)}
        {@const y1 =
            centerY +
            Math.sin(angle + time * rotationSpeed) *
                radius *
                Math.sin(time * zoomSpeed)}
        {@const x2 =
            centerX +
            Math.cos(angle + Math.PI + time * rotationSpeed) *
                radius *
                Math.sin(time * zoomSpeed)}
        {@const y2 =
            centerY +
            Math.sin(angle + Math.PI + time * rotationSpeed) *
                radius *
                Math.sin(time * zoomSpeed)}
        {@const color = i % 2 === 0 ? color1 : color2}

        <line {x1} {y1} {x2} {y2} stroke={color} stroke-width={lineWidth} />
    {/each}
</svg>

<style>
    svg {
        display: block;
        margin: 0 auto;
        background-color: #f0f0f0;
    }
</style>
