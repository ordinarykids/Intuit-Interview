

<script>
  let isActive = false;

  function toggleClass() {
    isActive = !isActive;
  }

  import { interpolateLab } from 'd3-interpolate';
	import { tweened } from 'svelte/motion';

	const colors = ['rgb(255, 62, 0)', 'rgb(64, 179, 255)', 'rgb(103, 103, 120)'];

	const color = tweened(colors[0], {
		duration: 800,
		interpolate: interpolateLab
	});
</script>

<button on:click={toggleClass} >
  Click Me
</button>
{#each colors as c}
	<button style="background-color: {c}; color: white; border: none;" on:click={(e) => color.set(c)}>
		{c}
	</button>
{/each}

<h1 style="color: {$color}" >{$color}</h1>

<div class="container">
  <div class="black-bar"  class:black-bar-grow={isActive}>
  </div>
</div>



<style>

.active {
    background-color: blue;
    color: white;

  }
  
.container {
  min-height: 100vh; 
  display: flex;
  justify-content: center; 
  align-items: center; 
}

.black-bar {
  width: 50px;          
  height: 2px;          
  background-color: black;
  background-image: url(/keithharing-sm.jpg);


}


.black-bar-grow {
  width: 20vw;          
  height: 0px;          
  background-color: black;
  animation: growAndBounce 0.5s ease-out forwards; /* Add animation */
}

@keyframes growAndBounce {
  0% { 
    height: 0px; 
  }
 
  100% { 
    height: 50vh; 
  } 
}


</style>
  