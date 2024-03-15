<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import SplideShow from "@/Splideshow.svelte";
    import Youtube from "svelte-youtube-embed";

    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    // or only core styles
    import "@splidejs/svelte-splide/css";

    let slideshowImages = ["/aleph/peaceout.jpg", "/art/blush.jpg"];
</script>

<h1>Tracy Chapman</h1>
<div class="container m-auto w-3/4">
    <Splide aria-label="My Favorite Images" imageData={slideshowImages}>
        <SplideSlide>
            <img src="/TracyChapman/1.jpg" alt="collage" class="draggable" />
        </SplideSlide>
    </Splide>
    <!-- <Youtube
        id="UahDOGXumQo&"
        --overlay-bg-color="hsla(0, 0%, 0%, 0.3)"
        --overlay-transition="all 100ms linear"
    /> -->
</div>

<div class="container m-auto w-3/4">
    <div
        class="container m-0 mb-16 mt-8 sm:columns-1 md:columns-2 lg:columns-3"
    >
        <div class="projectHeader mb-4">
            <h1 class=" text-4xl">Nike Free - Gloabl Campaigns</h1>
            <h2 class="font-bold">
                Real time coding using TouchDesigner to explore AI generated
                moodboards
            </h2>
        </div>

        <p class="pb-4">
            At a time of exponential innovation in biotechnology, a focus on
            leveraging genomics at the scale of populations made Helix a vital
            repository of data and information during the COVID-19 pandemic.
        </p>

        <p class="py-4">
            As Helix refined its approach to messaging and other aspects of
            their brand, the technology they used for publishing content was
            fragmented and tough to use. Aleph engaged in an ambitious effort to
            shape a new visual presence around their existing identity, and to
            deliver a stable-but-malleable content platform to meet a diverse
            set of requirements with enterprise-level confidence.
        </p>
        <p class="py-4">
            As Helix refined its approach to messaging and other aspects of
            their brand, the technology they used for publishing content was
            fragmented and tough to use. Aleph engaged in an ambitious effort to
            shape a new visual presence around their existing identity, and to
            deliver a stable-but-malleable content platform to meet a diverse
            set of requirements with enterprise-level confidence.
        </p>
        <p class="py-4">
            As Helix refined its approach to messaging and other aspects of
            their brand, the technology they used for publishing content was
            fragmented and tough to use. Aleph engaged in an ambitious effort to
            shape a new visual presence around their existing identity, and to
            deliver a stable-but-malleable content platform to meet a diverse
            set of requirements with enterprise-level confidence.
        </p>
        <p class="py-4">
            As Helix refined its approach to messaging and other aspects of
            their brand, the technology they used for publishing content was
            fragmented and tough to use. Aleph engaged in an ambitious effort to
            shape a new visual presence around their existing identity, and to
            deliver a stable-but-malleable content platform to meet a diverse
            set of requirements with enterprise-level confidence.
        </p>
        <img src="/scan.jpg" alt="collage2" class="draggable h-64 py-8" />
        <p class="py-4">
            This migration presented us with a few major challenges from the
            word “go”. We were tasked with refining the online presentation of
            Helix’s identity and messaging through a comprehensive design
            process. In addition, we needed to conceptualize and build a tech
            platform that would modernize their publishing workflows while
            deftly handling several years of legacy content.
        </p>

        <p>
            Aleph delivered on a purposeful project plan, including the
            migration of content from multiple legacy platforms, a broad
            approach to content strategy and management, and a complete
            interactive design system featuring well-documented processes, usage
            and development recommendations. We’re proud to support Helix in
            their mission to innovate with population genomics, and excited to
            see what’s next.
        </p>
    </div>

    <div class="tile col-span-7">
        <Splide aria-label="My Favorite Images">
            <SplideSlide>
                <img
                    src="/TracyChapman/1.jpg"
                    alt="collage"
                    class="draggable"
                />
            </SplideSlide>
            <SplideSlide>
                <img
                    src="/TracyChapman/2.jpg"
                    alt="collage"
                    class="draggable"
                />
            </SplideSlide>
            <SplideSlide>
                <img
                    src="/TracyChapman/3.jpg"
                    alt="collage"
                    class="draggable"
                />
            </SplideSlide>
        </Splide>

        <h5>
            Numerous collages mixing Midjounery generated images and traditonal
            design elements were developed during my leadership at Aleph.
        </h5>

        <h5>
            Overview of the product photography we art directed and had
            photographed.
        </h5>
    </div>
</div>
