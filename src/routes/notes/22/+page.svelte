<script>
    import { onMount } from "svelte";

    let pathLength = 0;
    let dashArray = "0, 1000";

    onMount(() => {
        const path = document.querySelector("path");
        pathLength = path.getTotalLength();
        dashArray = `${pathLength}, ${pathLength}`;
    });
</script>

<svg viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="90" fill="#004c7d" />

    <g>
        <path
            d="M 50,100 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0"
            fill="none"
            stroke="#e1aa00"
            stroke-width="8"
            stroke-dasharray={dashArray}
            stroke-dashoffset={pathLength}
        >
            <animate
                attributeName="stroke-dashoffset"
                from={pathLength}
                to="0"
                dur="3s"
                repeatCount="indefinite"
            />
        </path>

        <circle cx="100" cy="60" r="20" fill="#f0e5c2">
            <animate
                attributeName="r"
                values="20; 25; 20"
                dur="1.5s"
                repeatCount="indefinite"
            />
        </circle>
    </g>

    <g>
        <line
            x1="40"
            y1="100"
            x2="160"
            y2="100"
            stroke="#d50000"
            stroke-width="4"
        >
            <animate
                attributeName="x1"
                values="40; 60; 40"
                dur="2s"
                repeatCount="indefinite"
            />
            <animate
                attributeName="x2"
                values="160; 140; 160"
                dur="2s"
                repeatCount="indefinite"
            />
        </line>

        <line
            x1="100"
            y1="40"
            x2="100"
            y2="160"
            stroke="#d50000"
            stroke-width="4"
        >
            <animate
                attributeName="y1"
                values="40; 60; 40"
                dur="2s"
                repeatCount="indefinite"
            />
            <animate
                attributeName="y2"
                values="160; 140; 160"
                dur="2s"
                repeatCount="indefinite"
            />
        </line>
    </g>

    <circle cx="60" cy="60" r="15" fill="#f0e5c2" />
    <circle cx="140" cy="60" r="15" fill="#f0e5c2" />
    <circle cx="60" cy="140" r="15" fill="#f0e5c2" />
    <circle cx="140" cy="140" r="15" fill="#f0e5c2" />
</svg>

<style>
    svg {
        width: 100%;
        height: auto;
        max-width: 400px;
        margin: 0 auto;
        display: block;
    }
</style>
