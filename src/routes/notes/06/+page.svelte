<script>
    import { onMount, onDestroy } from "svelte";
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import "@splidejs/splide/dist/css/splide.min.css";

    let splide1, splide2, splide3, splide4, splide5;
    let intervalId;

    let superSetter;
    // Function to start the autoplay at random intervals
    function startRandomAutoplay() {
        const changeSlide = () => {
            // Proceed to the next slide
            splide1.go(">");
            splide2.go(">");
            splide3.go(">");
            splide4.go(">");
            splide5.go(">");
        };

        const setRandomInterval = () => {
            // Clear existing interval
            clearInterval(intervalId);

            // Set a new interval with a random time between 1s and 5s
            intervalId = setInterval(changeSlide, Math.random() * 4000 + 1000);
        };
        superSetter = setRandomInterval();
        setRandomInterval();

        // Also set a new random interval after each slide change
    }

    onMount(() => {
        startRandomAutoplay();
    });

    onDestroy(() => {
        clearInterval(intervalId);
    });

    function handleMouse() {
        console.log("mouse");
    }
</script>

<div class="home-grid m-auto grid w-1/2 grid-cols-2 gap-1 sm:w-full md:w-1/2">
    <div on:mouseover={handleMouse}>
        <Splide
            class="h-full w-full"
            bind:this={splide1}
            options={{ rewind: true, type: "loop", arrows: false }}
        >
            <SplideSlide data-splide-interval="100">
                <img src="/art/1.jpg" alt="Image 1" />
            </SplideSlide>
            <SplideSlide data-splide-interval="100">
                <img src="/art/2.jpg" alt="Image 2" />
            </SplideSlide>
            <SplideSlide>
                <img src="/art/3.jpg" alt="Image 2" />
            </SplideSlide>
            <SplideSlide>
                <img src="/art/4.jpg" alt="Image 2" />
            </SplideSlide>
            <SplideSlide>
                <img src="/art/5.jpg" alt="Image 2" />
            </SplideSlide>
            <!-- Add more slides as needed -->
        </Splide>
    </div>

    <Splide
        class="h-full w-full"
        bind:this={splide2}
        options={{ rewind: true, type: "loop", arrows: false }}
    >
        <SplideSlide>
            <img src="/art/6.jpg" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
            <img src="/art/7.jpg" alt="Image 2" />
        </SplideSlide>
        <!-- Add more slides as needed -->
    </Splide>

    <Splide
        class="h-full w-full"
        bind:this={splide3}
        options={{ rewind: true, type: "loop", arrows: false }}
    >
        <SplideSlide>
            <img src="/art/11.jpg" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
            <img src="/art/12.jpg" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
            <img src="/art/13.jpg" alt="Image 2" />
        </SplideSlide>
        <!-- Add more slides as needed -->
    </Splide>

    <Splide
        class="h-full w-full"
        bind:this={splide4}
        options={{ rewind: true, type: "loop", arrows: false }}
    >
        <SplideSlide>
            <img src="/art/9.jpg" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
            <img src="/art/10.jpg" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
            <img src="/art/8.jpg" alt="Image 2" />
        </SplideSlide>
        <!-- Add more slides as needed -->
    </Splide>
</div>
<div class="container m-auto w-3/4"></div>

<style>
    img {
        -webkit-filter: grayscale(80%); /* Safari 6.0 - 9.0 */
        filter: grayscale(80%);
    }
</style>
