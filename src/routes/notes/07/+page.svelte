<script>
    import { onMount, onDestroy } from "svelte";
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import "@splidejs/splide/dist/css/splide.min.css";
    import { slide } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    function handleMouse() {
        console.log("mouse");
    }
</script>

<div
    transition:slide={{
        delay: 1050,
        duration: 300,
        easing: quintOut,
        axis: "x",
    }}
>
    slides in and out horizontally
</div>

<div
    class="home-grid m-auto grid w-full grid-cols-1 gap-1 bg-red-300 sm:w-full md:w-1/2"
>
    <div>
        <Splide
            class="h-full w-full"
            options={{
                rewind: true,
                type: "loop",
                perPage: 2,
                arrows: false,
            }}
        >
            <SplideSlide data-splide-interval="100">
                <img src="/art/1.jpg" alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
                <p class="h-full p-4 align-middle">
                    "I began my professional journey in the 1990s, initially
                    exploring the Internet via the card catalog system at the
                    library while pursuing a degree in English Literature at the
                    University of South Florida. After leaving university, I
                    seized an opportunity to join either a burgeoning small
                    design studio or a prominent advertising agency named IXL.
                    This role ignited my passion for web design, affording me
                    the invaluable experience of working with esteemed clients
                    such as AOL and Andersen Consulting. As the millennium
                    turned, I faced the tumultuous period known as the dot-com
                    bubble burst in 2000. This challenging time led me to
                    establish my own venture, Ordinary Kids, marking a
                    significant pivot in my career."
                </p>
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
</div>
<div class="container m-auto w-3/4"></div>

<style>
    img {
        -webkit-filter: grayscale(80%); /* Safari 6.0 - 9.0 */
        filter: grayscale(80%);
    }
</style>
