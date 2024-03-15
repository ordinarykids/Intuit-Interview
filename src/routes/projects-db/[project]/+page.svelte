<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    // import { Wiper } from "../../lib/wiper.svelte";
    import projects from "../../project-data.json";
    export let data;

    $: currentProject = projects.data.find(
        (project) => project.attributes.slug === data.project,
    );
</script>

<div class="container mx-auto max-w-screen-lg">
    <div class="mx-4 grid gap-4 md:grid-cols-1 lg:mx-0 lg:grid-cols-1">
        <div>
            <!-- Content for first column -->
            <div class="w-full">
                <p>
                    <img
                        class="w-full"
                        alt="feature project image "
                        src={currentProject.attributes.featuredImage.data
                            .attributes.url}
                    />
                </p>
                <h1 class="py-4 text-6xl font-black">
                    {currentProject.attributes.title}
                </h1>

                <h2 class="font-this text-xl">
                    {@html currentProject.attributes.shortdescription}
                </h2>
                <div class="columns-2">
                    {@html currentProject.attributes.longdescription}
                </div>

                <div class="underLine"></div>
                <h2>Info</h2>
            </div>
        </div>
        <div>
            <!-- Content for second column -->
            <div class="tile col-span-12">
                {#if currentProject.attributes.specialsauce}
                    <div class="mx-0 mb-8 w-full">
                        {@html currentProject.attributes.specialsauce}
                    </div>
                {/if}

                {#each currentProject.attributes.projectImages.data as projectImage, i}
                    <div>
                        <img
                            class="w-full pb-4"
                            src={projectImage.attributes.url}
                            alt="portilio images"
                        />

                        {#if projectImage.attributes.caption}
                            <p class="mb-8 w-full p-4">
                                {projectImage.attributes.caption}
                            </p>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    @font-face {
        font-family: "Geist-Medium";

        src: url("/fonts/Geist/Geist-Medium.woff2") format("woff2");
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: "Geist-Medium", serif, HelveticaNeue, "Inter", sans-serif;
    }
</style>
