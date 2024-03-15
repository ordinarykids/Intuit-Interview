<!-- App.svelte -->
<script>
    let messages = [];
    let isBot1Turn = true;

    function addMessage(message, isBot1) {
        messages = [...messages, { text: message, isBot1 }];
    }

    function simulateConversation() {
        const bot1Responses = [
            "Hello, I'm Bot 1. How can I assist you today?",
            "Glad to help! What else can I do for you?",
            "That's an interesting question. Let me think about it...",
            "I'm afraid I don't have a definitive answer for that.",
            "Thank you for the conversation. It's been a pleasure chatting with you.",
        ];

        const bot2Responses = [
            "Hi there, I'm Bot 2. Nice to meet you!",
            "I appreciate your input. Here's my perspective:",
            "Hmm, that's a tricky one. Have you considered this angle?",
            "You raise a valid point. Let me offer a counterargument.",
            "Well, it seems we'll have to agree to disagree on this one.",
        ];

        const getRandomResponse = (isBot1) => {
            const responses = isBot1 ? bot1Responses : bot2Responses;
            return responses[Math.floor(Math.random() * responses.length)];
        };

        const sendMessage = () => {
            const message = getRandomResponse(isBot1Turn);
            addMessage(message, isBot1Turn);
            isBot1Turn = !isBot1Turn;
        };

        sendMessage();
        const interval = setInterval(sendMessage, 5000);

        // Stop the conversation after 10 messages
        setTimeout(() => clearInterval(interval), 50000);
    }

    simulateConversation();
</script>

<main>
    <h1>AI Chatbox</h1>
    <div class="chatbox">
        {#each messages as message}
            <div class="message" class:bot1={message.isBot1}>
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

    .bot1 {
        background-color: #e6f7ff;
    }

    .bot2 {
        background-color: #ffebee;
    }
</style>
