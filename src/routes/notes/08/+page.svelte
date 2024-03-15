<script>
    import axios from "axios";

    let audioRecorder = null;
    let audioChunks = [];
    let isRecording = false;
    let audioBlob = null;
    let transcript = "";

    async function startRecording() {
        if (navigator.mediaDevices) {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
            });
            audioRecorder = new MediaRecorder(stream);
            audioRecorder.start();

            audioRecorder.ondataavailable = (e) => {
                audioChunks.push(e.data);
            };

            audioRecorder.onstop = () => {
                audioBlob = new Blob(audioChunks, { type: "audio/webm" }); // Adjust type if needed
                transcribeAudio();
                audioChunks = []; // Reset for new recordings
            };

            isRecording = true;
        } else {
            alert("Microphone access unsupported in this browser.");
        }
    }

    function stopRecording() {
        if (audioRecorder) {
            audioRecorder.stop();
            isRecording = false;
        }
    }

    async function transcribeAudio() {
        const formData = new FormData();
        formData.append("file", audioBlob);

        const response = await axios.post(
            "https://api.openai.com/v1/audio/transcriptions",
            formData,
            {
                headers: {
                    Authorization: `Bearer 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`,
                    Accept: "application/json",
                },
            },
        );

        transcript = response.data.text;
    }
</script>

<main class="container mx-auto p-8">
    <h1>Voice Recorder & Transcription</h1>

    <div class="flex gap-4">
        <button
            class="rounded-md bg-blue-500 px-4 py-2 text-white"
            on:click={startRecording}
            disabled={isRecording}>Start Recording</button
        >
        <button
            class="rounded-md bg-red-500 px-4 py-2 text-white"
            on:click={stopRecording}
            disabled={!isRecording}>Stop Recording</button
        >
    </div>

    <div class="mt-6">
        <h2>Transcript</h2>
        <p class="text-gray-700">{transcript}</p>
    </div>
</main>
