<script>
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    // or only core styles
    import "@splidejs/svelte-splide/css";
    import { onMount } from "svelte";

    export let slideshowImages = {}

    console.log(slideshowImages)
</script>


{imageData}
<Splide aria-label="My Favorite Images">
    <SplideSlide>
        <img
            src="/aleph/peaceout.jpg"
            alt="collage"
            class="draggable"
        />
    </SplideSlide>
    <SplideSlide>
        <img
            src="/aleph/peaceout.jpg"
            alt="collage2"
            class="draggable"
        />
    </SplideSlide>
</Splide>