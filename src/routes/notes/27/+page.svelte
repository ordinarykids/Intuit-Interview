<script>
    import { onMount } from "svelte";

    let topStories = [];

    async function fetchTopStories() {
        try {
            const response = await fetch(
                "https://hacker-news.firebaseio.com/v0/topstories.json",
            );
            const storyIds = await response.json();
            const topTenStoryIds = storyIds.slice(0, 10);

            const storyPromises = topTenStoryIds.map(async (storyId) => {
                const storyResponse = await fetch(
                    `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`,
                );
                return await storyResponse.json();
            });

            topStories = await Promise.all(storyPromises);
        } catch (error) {
            console.error("Error fetching top stories:", error);
        }
    }

    async function summarizeStory(story) {
        //  const apiKey = "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";
        const apiUrl = "/api/chat";

        const prompt = `Please provide a brief summary of the following Hacker News story:\n\nTitle: ${story.title}\nURL: ${story.url}\n\nSummary:`;

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    prompt: prompt,
                    max_tokens: 100,
                    n: 1,
                    stop: null,
                    temperature: 0.7,
                }),
            });

            const data = await response.json();
            console.log(data);
            return data.choices[0];
        } catch (error) {
            console.error("Error summarizing story:", error);
            return "Failed to summarize the story.";
        }
    }

    onMount(fetchTopStories);
</script>

<div>
    <h1>Top Stories from Hacker News</h1>
    {#each topStories as story}
        <div class="story">
            <h2><a href={story.url} target="_blank">{story.title}</a></h2>
            {#await summarizeStory(story)}
                <p>Summarizing the story...</p>
            {:then summary}
                <p>{summary}</p>
            {:catch error}
                <p>Failed to summarize the story.</p>
            {/await}
        </div>
    {/each}
</div>
