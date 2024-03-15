<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import projects from "../../project-data.json";
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    // or only core styles
    import '@splidejs/svelte-splide/css';
    import Youtube from "svelte-youtube-embed";


    
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
</script>


<div class="container m-auto w-3/4">
    
      <div class="m-auto lg:w-3/4 md:w-full md:mx-8">
        <h2 class="text-xl font-bold">
            Deep COVID explorations of an intentionally under-trained StyleGAN
        </h2>

        <p class="py-4">
            I am often drawn to the edges of technology and rather than chase perfection by letting AI create reality, I like to see where it drifts and use the glitches find beauty. In this session, I convined both my wife and so to let take a 1 minute video. I used the exported images to then train a StyleGAN. 
        </p>

        <p class="py-4">
            By exploring the latest space in the new dataset, we can see the users drifts in and out of reality. In fact, all the video is made/dreamt but the AI and not real video was used. The dataset of images is only used to measure how close the genrated images are the initial training images. 
        </p>

        <p class="py-4">
           Creepy. Cool. I may be the only person that like these half formed dreams but at the time, it was magical. 
        </p>

       \
      </div>
      <div class="my-32 md:my-16 sm:my-8">
        <Youtube
        id="XW_8Rr1q1A0"
        altThumb="{true}"
        --overlay-bg-color="hsla(0, 0%, 0%, 0.3)"
        --overlay-transition="all 100ms linear"
      />
 
       
        
     </div>
    <div class="my-32 md:my-16 sm:my-8">
        <Youtube
        id="9TTWpg4pKhI&"
        --overlay-bg-color="hsla(0, 0%, 0%, 0.3)"
        --overlay-transition="all 100ms linear"
      />
 
       
        
     </div>
     <div class="my-32 md:my-16 sm:my-8">
        <Youtube
        id="sVIk_SQ0BAQ"
        --overlay-bg-color="hsla(0, 0%, 0%, 0.3)"
        --overlay-transition="all 100ms linear"
      />
 
       
        
     </div>
   
     
</div>
