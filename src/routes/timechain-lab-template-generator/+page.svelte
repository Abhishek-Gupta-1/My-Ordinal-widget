<script>
    import { onMount } from 'svelte';
    let image1Path = 'avatar.jpeg'; // Path to image1
    let image2;
    let userInput = '';
    let text = [];
    const image2Dimensions = [200, 200]; // Dimensions for image2
    const image1Dimensions = [800, 600]; // Dimensions for image1
    const textFont = 'Arial';
    const fontSize = 24;
    const textDimensions = [50, 100];
    const textFontType = 'bold';
    const textColor = 'red';

    function handleImageUpload(event) {
        image2 = event.target.files[0];
    }

    function handleSubmit() {
        if (!image2 || !userInput) {
            alert('Please upload an image and enter text.');
            return;
        }

        text = userInput.split(' ');

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const image = new Image();

        canvas.width = image1Dimensions[0];
        canvas.height = image1Dimensions[1];

        image.onload = function () {
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

            const image2Image = new Image();
            const reader = new FileReader();

            reader.onload = function (e) {
                image2Image.src = e.target.result;
                image2Image.onload = function () {
                    ctx.drawImage(image2Image, 50, 100, image2Dimensions[0], image2Dimensions[1]);

                    ctx.font = `${fontSize}px ${textFontType}`;
                    ctx.fillStyle = textColor;
                    ctx.textAlign = 'left';
                    ctx.textBaseline = 'top';

                    let x = textDimensions[0];
                    let y = textDimensions[1];

                    for (const word of text) {
                        const wordWidth = ctx.measureText(word).width;
                        if (x + wordWidth > canvas.width) {
                            y += fontSize + 5; // Move to the next line
                            x = textDimensions[0];
                        }

                        ctx.fillText(word, x, y);
                        x += wordWidth + 10; // Add some padding between words
                    }

                    const resultImage = canvas.toDataURL('image/jpeg');
                    const link = document.createElement('a');
                    link.href = resultImage;
                    link.download = 'output_image.jpg';
                    link.click();
                };
            };

            reader.readAsDataURL(image2);
        };

        image.src = image1Path;
    }
</script>

<main>
    <h1>Svelte Image Overlay App</h1>
    <input type="file" accept="image/*" on:change={handleImageUpload} />
    <input type="text" bind:value={userInput} placeholder="Enter text" />
    <button on:click={handleSubmit}>Generate Overlay</button>
</main>

<style>
    main {
        text-align: center;
        padding: 2em;
    }
    h1 {
        font-size: 2em;
        margin-bottom: 1em;
    }
    input {
        margin: 0.5em;
        padding: 0.5em;
    }
    button {
        padding: 0.5em 1em;
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
    }
</style>
