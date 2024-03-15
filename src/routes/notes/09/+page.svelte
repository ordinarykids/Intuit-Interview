<script>
    // import Conversation from "./Conversation.svelte";
    //import { openai } from "./openai";

    let conversation = [];
    let initialResponse = " ";
    async function generateConversation() {
        try {
            // Initial Prompt
            initialResponse = await openai.getAIResponse(
                "Discuss the potential of AI to transform the process of design.",
            );
            console.log("Initial response:", initialResponse);
            return initialResponse;
        } catch (error) {
            console.error("Error fetching AI responses:", error);
        }
    }

    // Call the conversation generation on start
    generateConversation();
</script>

<p>{initialResponse}</p>
<!-- <Conversation {conversation} /> -->
