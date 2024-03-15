<!-- NavLink.svelte -->
<script>
    export let href;
    export let title;

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    function handleClick() {
        dispatch("navigate", {
            title,
            href,
        });
    }
</script>

<a {href}>{title} </a> /

<style>
    a {
        text-decoration: none;
        color: #333;
        /* display: block; */
    }

    a:hover {
        text-decoration: underline;
    }
</style>
