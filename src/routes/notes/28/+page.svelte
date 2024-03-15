<script>
    import { onMount } from "svelte";

    let position = 0;
    let direction = 1;
    let walkInterval;

    const startWalking = () => {
        console.log("startWalking");
        walkInterval = setInterval(() => {
            position += direction;
            // console.log("walking");
            if (position >= window.innerWidth - 50 || position <= 0) {
                direction *= -1;
                console.log("walking");
            }
        }, 100);
    };

    const stopWalking = () => {
        clearInterval(walkInterval);
    };

    onMount(() => {
        startWalking();
        return () => {
            stopWalking();
        };
    });
</script>

<div class="relative h-screen">
    <div
        class="absolute bottom-0 text-2xl"
        style="left: {position}px; transition: left 0.1s linear;"
    >
        {#if direction === 1}
            <pre class="scale-x-[-1] transform">
        o
       /|\
       / \
      </pre>
        {:else}
            <pre>
        o
       /|\
       / \
      </pre>
        {/if}
    </div>
</div>
