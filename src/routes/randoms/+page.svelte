<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import projects from "../randoms-data.json";
    export let data;
    let currentProject = "";

    onMount(() => {
        console.log("the component has mounted");
        $: currentProject =
            projects.data[Math.floor(Math.random() * projects.data.length)];
    });
    function reloadPage() {
        console.log(window.location);
        window.location.href = "/randoms/";
        window.location.reload();
    }
    //  console.log(currentProject);
</script>

<div class="container mx-auto max-w-screen-lg">
    <div class="mx-4 grid gap-4 md:grid-cols-1 lg:mx-0 lg:grid-cols-1">
        <div>
            <button
                class="bg-slate-300 p-4 hover:bg-sky-100"
                on:click={reloadPage}>Load Random Project</button
            >
        </div>
        {#if currentProject}
            <div>
                <!-- Content for first column -->
                <div class="w-full">
                    <!-- <p>
                    <img
                        class="w-full"
                        alt="feature project image "
                        src={currentProject.attributes.featuredImage.data
                            .attributes.url}
                    />
                </p> -->
                    <h1 class="py-4 text-6xl font-black">
                        {currentProject.attributes.title}
                    </h1>

                    <div class="underLine"></div>
                    {#if currentProject.attributes.description}
                        <h2>INFO</h2>
                        <div class="mx-0 mb-8 w-full">
                            {@html currentProject.attributes.description}
                        </div>
                    {/if}
                </div>
            </div>
            <div>
                <!-- Content for second column -->

                <div class="tile col-span-12">
                    <!-- {#if currentProject.attributes.specialsauce}
                    <div class="mx-0 mb-8 w-full">
                        {@html currentProject.attributes.specialsauce}
                    </div>
                {/if} -->

                    {#each currentProject.attributes.image.data as projectImage, i}
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
        {/if}
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
