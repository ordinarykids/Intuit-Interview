<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import projects from "../../project-data.json";
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    // or only core styles
    import "@splidejs/svelte-splide/css";
</script>

<div class="container m-0 grid w-full grid-cols-2 bg-yellow-100">
    <div class="container m-0 w-full">
        <div class="container m-auto">
            <Splide
                options={{
                    type: "loop",
                    rewind: true,
                    autoplay: true,
                    arrows: false,
                    gap: "1rem",
                }}
                aria-label="My Favorite Images"
            >
                <SplideSlide>
                    <img src="/blush.png" alt="collage" />
                </SplideSlide>
                <SplideSlide>
                    <img src="/blush.png" alt="collage" />
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
    <div class="container m-0 w-full bg-gray-100">
        <div class="container m-auto">
            <Splide
                options={{
                    rewind: true,
                    type: "loop",
                    gap: "24rem",
                }}
                aria-label="My Favorite Images"
            >
                <SplideSlide>
                    <img src="/keithharing.jpg" alt="collage" />
                </SplideSlide>

                <!-- <SplideSlide>
                    <img src="/helix/ads/Hero-1.png" alt="collage" />
                </SplideSlide>
                <SplideSlide>
                    <img src="/helix/ads/Hero-2.png" alt="collage" />
                </SplideSlide> -->
                <div class="splide__arrows hidden" />
            </Splide>
        </div>
    </div>
    <div class="container m-0 w-full">
        <div class="container m-auto">
            <Splide
                options={{
                    type: "loop",
                    rewind: true,
                    autoplay: true,
                    arrows: false,
                    gap: "1rem",
                }}
                aria-label="My Favorite Images"
            >
                <SplideSlide>
                    <img src="/blush.png" alt="collage" />
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
    <div class="container m-0 w-full bg-gray-100">
        <div class="container m-auto">
            <Splide
                options={{
                    rewind: true,
                    type: "loop",
                    gap: "24rem",
                }}
                aria-label="My Favorite Images"
            >
                <SplideSlide>
                    <img src="/keithharing.jpg" alt="collage" />
                </SplideSlide>

                <!-- <SplideSlide>
                    <img src="/helix/ads/Hero-1.png" alt="collage" />
                </SplideSlide>
                <SplideSlide>
                    <img src="/helix/ads/Hero-2.png" alt="collage" />
                </SplideSlide> -->
                <div class="splide__arrows hidden" />
            </Splide>
        </div>
    </div>
    <div class="container m-0 w-full">
        <div class="container m-auto">
            <Splide
                options={{
                    type: "loop",
                    rewind: true,
                    autoplay: true,
                    arrows: false,
                    gap: "1rem",
                }}
                aria-label="My Favorite Images"
            >
                <SplideSlide>
                    <img src="/blush.png" alt="collage" />
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
    <div class="container m-0 w-full bg-gray-100">
        <div class="container m-auto">
            <Splide
                options={{
                    rewind: true,
                    autoplay: true,
                    type: "loop",
                    gap: "24rem",
                }}
                aria-label="My Favorite Images"
            >
                <SplideSlide>
                    <img src="/keithharing.jpg" alt="collage" />
                </SplideSlide>

                <SplideSlide>
                    <img src="/helix/ads/Hero-1.png" alt="collage" />
                </SplideSlide>
                <SplideSlide>
                    <img src="/helix/ads/Hero-2.png" alt="collage" />
                </SplideSlide>
                <div class="splide__arrows hidden" />
            </Splide>
        </div>
    </div>
</div>
