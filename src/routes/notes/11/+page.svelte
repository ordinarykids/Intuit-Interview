<!-- App.svelte -->
<script>
    import { onMount } from "svelte";
    import { OPENAI_API_SECRET_KEY } from "$env/static/public";
    import OpenAI from "openai";

    let messages = [];

    // messages: [
    //     {
    //         role: "user",
    //         content: "Tell me a random story about AI.",
    //     },
    // ],

    let isAgent1Turn = true;

    onMount(async () => {
        const openai = new OpenAI({
            apiKey: OPENAI_API_SECRET_KEY,
            dangerouslyAllowBrowser: true,
        });

        const thread = await openai.beta.threads.create();

        function addMessage(message, isAgent1) {
            messages = [...messages, { text: message, isAgent1 }];
            console.log(messages);
        }

        async function sendMessage() {
            let prompt;
            let response;

            if (isAgent1Turn) {
                prompt = `You are an AI agent named Agent 1 engaged in a discussion about personal financial wealth with another AI agent named Agent 2. The conversation history so far is: ${messages
                    .map((m) => m.text)
                    .join("\n")}

Your turn:`;

                const response = await openai.chat.completions.create({
                    model: "gpt-4-turbo-preview",
                    messages: [
                        {
                            role: "user",
                            content: "Tell me a random story about AI.",
                        },
                    ],
                    max_tokens: 150,
                    temperature: 0.7,
                    top_p: 1,
                    frequency_penalty: 0,
                    presence_penalty: 0,
                });

                console.log(response);
                const agent1Response = response.choices[0].message.content;
                addMessage(agent1Response, true);
            } else {
                prompt = `You are an AI agent named Agent 2 engaged in a discussion about personal financial wealth with another AI agent named Agent 1. The conversation history so far is: ${messages
                    .map((m) => m.text)
                    .join("\n")}

Your turn:`;

                const response = await openai.chat.completions.create({
                    model: "gpt-4-turbo-preview",
                    messages: [
                        {
                            role: "user",
                            content: "Tell me a random story about a cat.",
                        },
                    ],
                    max_tokens: 150,
                    temperature: 0.7,
                    top_p: 1,
                    frequency_penalty: 0,
                    presence_penalty: 0,
                });
                console.log(response);
                const agent2Response = response.choices[0].message.content;
                addMessage(agent2Response, false);
            }

            isAgent1Turn = !isAgent1Turn;
        }

        function simulateConversation() {
            addMessage(
                "Hello, I'm Agent 1. Let's discuss the future of personal financial wealth and how it might be impacted by AI and emerging technologies.",
                true,
            );

            const interval = setInterval(
                sendMessage,
                Math.floor(Math.random() * 3000) + 1000,
            );
        }

        simulateConversation();
    });
</script>

<!-- ... (the rest of the code remains the same) -->

<main>
    <h1>Simulated AI Conversation</h1>
    <div class="chatbox">
        {#each messages as message}
            <div class="message" class:agent1={message.isAgent1}>
                {message.text}
            </div>
        {/each}
    </div>
</main>

<style>
    .chatbox {
        height: 300px;
        border: 1px solid #ccc;
        padding: 10px;
        overflow-y: scroll;
    }

    .message {
        padding: 8px 12px;
        margin-bottom: 8px;
        border-radius: 4px;
    }

    .agent1 {
        background-color: #e6f7ff;
    }

    .agent2 {
        background-color: #ffebee;
    }
</style>
