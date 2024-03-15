<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import projects from '../../project-data.json'

    export async function get() {
   
      return {
        status: 200,
        body: {
            projects
        }
      }

    }


    onMount(() => {
        let test = get();
        console.log($page.url)


        $: console.log($page.params);

        let projectSlug = $page.params.project;
    })
    let test = get();
    console.log(test)


    $: console.log($page.params);

    let projectSlug = $page.params.project;



</script>

<div
    class="container m-auto w-3/5 md:w-full m:w-full sm:w-full grid grid-cols-12 md:grid-cols-4 lg:grid-cols-12 gap-4"
>
    <div class="tile col-span-4">
        <h1>Aleph Mood Reel</h1>
        <h2>
            Real time coding using TouchDesigner to explore AI generated
            moodboards
        </h2>

        <h1>{projectSlug}</h1>
        <div>
       
        </div>

        <div class="underLine"></div>
        <h2>Info</h2>
        <p></p>
        <div class="">
            .
            <div>
                <h2>Tags</h2>
                <ul>
                    <li>Creative Direction</li>
                    <li>UX Design</li>
                    ≥
                    <li>Moodboards</li>
                    <li>Web Developement</li>
                </ul>
            </div>
            <div>
                <h2>Credits</h2>
                <ul>
                    <li>Jason Herring - Creative Director</li>
                    <li>Sony Maharjan- UX Designer</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="tile col-span-6">
        <img src="/aleph/peaceout.jpg" alt="collage" />
        <h5>
            Numerous collages mixing Midjounery generated images and traditonal
            design elements were developed during my leadership at Aleph.
        </h5>
        <iframe
            width="100%"
            height="600px"
            src="https://www.youtube.com/embed/FFpdC3Qbggg"
            title="Random Stuff on my Figma Boards"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe>
        <h5>
            Overview of the product photography we art directed and had
            photographed.
        </h5>
    </div>
</div>
