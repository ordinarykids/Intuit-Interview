<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import projects from "./project-data.json";
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    // or only core styles
    import "@splidejs/svelte-splide/css";

    let mySlider;
    let currentSlide = 0;

    function handleMove(event) {
        currentSlide = event.detail.index;
        console.log("Current slide:", currentSlide);
        // Perform any logic based on the current slide
    }

    export async function get() {
        return {
            status: 200,
            body: {
                projects,
            },
        };
    }

    onMount(() => {
        let test = get();
        console.log($page.url);

        $: console.log($page.params);

        let projectSlug = $page.params.project;
    });
    let test = get();
    console.log(test);

    $: console.log($page.params);

    let projectSlug = $page.params.project;

    import { fade, fly } from "svelte/transition";
    let visible = true;
</script>

<div class="flex min-h-screen w-full items-center justify-center">
    <div class="aspect-w-16 aspect-h-9 max-h-screen w-full max-w-screen-2xl">
        <!-- Your content goes here -->

        <Splide
            class="m-auto"
            bind:this={mySlider}
            on:move={handleMove}
            options={{
                type: "loop",
                rewind: true,
                autoplay: true,
                arrows: false,
                gap: "0",
                keyboard: true,
            }}
            aria-label="My Favorite Images"
        >
            <SplideSlide class="aspect-video max-h-max w-full bg-cyan-100">
                <img src="/kqed-1/kqed-slide3.png" alt="collage" />
            </SplideSlide>
            <SplideSlide class="aspect-video max-h-max w-full bg-cyan-100">
                <div class="flex h-full flex-col bg-sky-800 md:flex-row">
                    <div class="w-full p-8 md:w-1/2">
                        <h2 class="mb-4 text-3xl font-bold">Header</h2>
                        <p class="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam at metus vel velit bibendum pharetra.
                            Sed euismod, sapien vel bibendum malesuada, velit
                            velit malesuada sapien, vel bibendum sapien velit
                            vel sapien.
                        </p>
                    </div>
                    <div class="relative w-full md:w-1/2">
                        <video class="h-full w-full" controls>
                            <source
                                src="/fade-glitch-720.mov"
                                type="video/mp4"
                            />
                        </video>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide class="aspect-video max-h-max w-full bg-cyan-300">
                {#if currentSlide == 2}
                    <div
                        class="flex h-full flex-col md:flex-row"
                        in:fade={{ delay: 600, x: 200, duration: 1000 }}
                        out:fade
                    >
                        <div class="w-full p-8 md:w-1/2">
                            <h2 class="mb-4 text-3xl font-bold">Header</h2>
                            <p class="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam at metus vel velit
                                bibendum pharetra. Sed euismod, sapien vel
                                bibendum malesuada, velit velit malesuada
                                sapien, vel bibendum sapien velit vel sapien.
                            </p>
                        </div>
                        <div
                            class="relative w-full md:w-1/2"
                            in:fade={{ delay: 900, y: 200, duration: 500 }}
                            out:fade
                        >
                            <img
                                src="/kqed-1/kqed-slide3.png"
                                alt="Your Image"
                                class="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>
                {/if}
            </SplideSlide>
            <!-- <SplideSlide>
                <img src="/helix/ads/Hero-1.png" alt="collage" />
            </SplideSlide>
            <SplideSlide>
                <img src="/helix/ads/Hero-2.png" alt="collage" />
            </SplideSlide> -->
        </Splide>
    </div>
</div>
