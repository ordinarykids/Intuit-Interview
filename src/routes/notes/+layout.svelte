<script>
    let selected = "google"; // Default selection

    const options = [
        { value: "google", label: "KQED", url: "https://www.google.com" },
        {
            value: "duckduckgo",
            label: "NIKE Free",
            url: "https://duckduckgo.com",
        },
        { value: "bing", label: "Aleph", url: "https://www.bing.com" },
    ];

    function handleSelectChange(event) {
        selected = event.detail.value;
        console.log(event);
    }
</script>

<!-- <select bind:value={selected} on:change={handleSelectChange}>
    {#each options as option}
        <option value={option.value}>
            {option.label}
        </option>
    {/each}
</select>
<div class="container m-auto w-3/4">
    <slot />
</div> -->
<slot />
