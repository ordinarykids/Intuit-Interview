<!-- <script>
  import { onMount } from 'svelte';
  import { env } from '$env/dynamic/public';

  let data = null;
  let error = null;
  let isLoading = false;

  async function fetchData() {
      isLoading = true; 
      error = null;
      const apiKey = env.STABILITY_API_KEY;
      const apiHost = 'https://api.stability.ai'

      const engineId = 'stable-diffusion-v1-6';
      try {
         // const response = await fetch('https://api.example.com/data');

          const response = await fetch(
            `${apiHost}/v1/generation/${engineId}/text-to-image`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${apiKey}`,
              },
              body: JSON.stringify({
                text_prompts: [
                  {
                    text: 'A lighthouse on a cliff',
                  },
                ],
                cfg_scale: 7,
                height: 1024,
                width: 1024,
                steps: 30,
                samples: 1,
              }),
            }
          )


          console.log(response)
          if (!response.ok) {
              throw new Error('Failed to fetch data');
          }

          data = await response.json();
      } catch (err) {
          error = err.message; 
      } finally {
          isLoading = false;
      }
  }

  const responseJSON = await response.json()

  console.log(responseJSON)

  // Call the function to fetch data, often on component mount
  onMount(fetchData); 
</script>

{#if isLoading}
  <p>Loading...</p>
{:else if error}
  <p style="color: red">Error: {error}</p>
{:else if data}
  <p>{data.someProperty}</p>
{/if} -->