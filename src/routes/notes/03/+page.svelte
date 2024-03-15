<script>
    import { onMount, onDestroy } from 'svelte';
    let imageUrl = ''; // Initial image URL
    let intervalId;
  
    // Function to fetch image URL from API
    async function fetchImageUrl() {
      try {
        const response = await fetch('YOUR_API_ENDPOINT');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        imageUrl = data.url; // Assuming the API returns an object with a url property
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }
  
    onMount(() => {
      fetchImageUrl(); // Fetch the initial image when the component mounts
      intervalId = setInterval(fetchImageUrl, 5000); // Set up an interval to fetch the image every 5 seconds
    });
  
    onDestroy(() => {
      clearInterval(intervalId); // Clear the interval when the component is destroyed to prevent memory leaks
    });
  </script>
  
  <img src={imageUrl} alt="Dynamic Image" />
  