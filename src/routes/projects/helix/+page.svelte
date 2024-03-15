<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import projects from "../../project-data.json";
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    // or only core styles
    import "@splidejs/svelte-splide/css";

    let projectSlug = $page.params.project;
</script>

<div class="container fixed m-0 w-32 bg-gray-100 px-4">
    <div class="container w-1/2">
        <h1 class="font-bold">Helix</h1>
    </div>
</div>
<div class="container m-auto w-3/4">
    <Splide
        class="py-16 "
        options={{
            rewind: true,
            type: "loop",
            gap: "1rem",
        }}
        aria-label="My Favorite Images"
    >
        <SplideSlide class="">
            <img src="/helix/ads/Hero.png" alt="collage" class="draggable" />
        </SplideSlide>
        <SplideSlide>
            <img src="/helix/ads/Hero-1.png" alt="collage" class="draggable" />
        </SplideSlide>
        <SplideSlide>
            <img src="/helix/ads/Hero-2.png" alt="collage" class="draggable" />
        </SplideSlide>
    </Splide>

    <div class="h-full w-1/2 columns-3 max-sm:m-auto md:mx-8 md:w-full">
        <h2>
            Real time coding using TouchDesigner to explore AI generated
            moodboards
        </h2>

        <p class="w-96 py-4">
            At a time of exponential innovation in biotechnology, a focus on
            leveraging genomics at the scale of populations made Helix a vital
            repository of data and information during the COVID-19 pandemic.
        </p>

        <p class="w-96 py-4">
            As Helix refined its approach to messaging and other aspects of
            their brand, the technology they used for publishing content was
            fragmented and tough to use. Aleph engaged in an ambitious effort to
            shape a new visual presence around their existing identity, and to
            deliver a stable-but-malleable content platform to meet a diverse
            set of requirements with enterprise-level confidence.
        </p>

        <p class="  py-4">
            This migration presented us with a few major challenges from the
            word “go”. We were tasked with refining the online presentation of
            Helix’s identity and messaging through a comprehensive design
            process. In addition, we needed to conceptualize and build a tech
            platform that would modernize their publishing workflows while
            deftly handling several years of legacy content.
        </p>

        <p>
            Aleph dsdelivered on a purposeful project plan, including the
            migration of content from multiple legacy platforms, a broad
            approach to content strategy and management, and a complete
            interactive design system featuring well-documented processes, usage
            and development recommendations. We’re proud to support Helix in
            their mission to innovate with population genomics, and excited to
            see what’s next.
        </p>
    </div>
    <div class="my-32 sm:my-8 md:my-16">
        <iframe
            title="Helix Globe Experiment"
            class="aspect-video w-full overflow-hidden"
            src="https://helix-glober.vercel.app/"
        ></iframe>

        <h5>
            Numerous collages mixing Midjounery generated images and traditonal
            design elements were developed during my leadership at Aleph.
        </h5>
    </div>
</div>

<style>
    .draggable {
        cursor: move; /* fallback: no `url()` support or images disabled */
        cursor: url(images/grab.cur); /* fallback: Chrome 1-21, Firefox 1.5-26, Safari 4+, IE, Edge 12-14, Android 2.1-4.4.4 */
        cursor: grab; /* W3C standards syntax, all modern browser */
    }

    .draggable:active {
        cursor: url(images/grabbing.cur);
        cursor: grabbing;
    }
</style>
