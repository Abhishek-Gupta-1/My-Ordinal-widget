<script>

    import {setDetails} from "../../services/visitingCard";

    let image1;
    let image2;
    let overlayImage;
    let previewImage1;
    let previewImage2;
    let isProcessing = false;
    let aboutMe;

    let formData = {
        firstName: '',
        lastName: '',
        designation: '',
        company: '',
        phoneNumber: '',
        location: '',
        areaOfInterest: '',
        websiteUrl: '',
        email: ''
    };




    function handleSubmit() {
        // Handle form submission here using formData
        console.log(formData);
    }

    function handleImageChange(event, imageNumber) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (imageNumber === 1) previewImage1 = e.target.result;
                else previewImage2 = e.target.result;
            };
            reader.readAsDataURL(file);
            if (imageNumber === 1) image1 = file;
            else image2 = file;
        }
    }

    async function handleOverlay() {
        if (image1 && image2) {
            isProcessing = true;
            overlayImage = await setDetails(formData.designation,aboutMe,image2,image1,formData.company, formData.email, formData.websiteUrl, formData.phoneNumber, formData.location, formData.areaOfInterest);
            isProcessing = false;
        }
        const a = document.createElement('a');
        a.href = overlayImage;
        a.download = 'overlayedImage.png';
        a.click();
    }

    function handleDownload() {

    }
</script>

<style>
    .form-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
    }

    .form-field {
        flex: 1;
        min-width: 250px;
    }

    label {
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
    }

    input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        margin-top: 15px;
        padding: 8px 12px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }

    .overlay-preview {
        max-width: 200px;
        margin-top: 2rem;
    }

    img {
        max-width: 100%;
    }

    .preview {
        max-width: 100px;
        margin-top: 1rem;
    }
</style>

<div class="form-container">
    <div class="form-field">
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" bind:value={formData.firstName} />
    </div>

    <div class="form-field">
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" bind:value={formData.lastName} />
    </div>

    <div class="form-field">
        <label for="designation">Designation:</label>
        <input type="text" id="designation" bind:value={formData.designation} />
    </div>

    <div class="form-field">
        <label for="company">Company:</label>
        <input type="text" id="company" bind:value={formData.company} />
    </div>

    <div class="form-field">
        <label for="phoneNumber">Phone Number:</label>
        <input type="text" id="phoneNumber" bind:value={formData.phoneNumber} />
    </div>

    <div class="form-field">
        <label for="location">Location:</label>
        <input type="text" id="location" bind:value={formData.location} />
    </div>

    <div class="form-field">
        <label for="areaOfInterest">Area of Interest:</label>
        <input type="text" id="areaOfInterest" bind:value={formData.areaOfInterest} />
    </div>

    <div class="form-field">
        <label for="websiteUrl">Website URL:</label>
        <input type="text" id="websiteUrl" bind:value={formData.websiteUrl} />
    </div>

    <div class="form-field">
        <label for="email">Email:</label>
        <input type="email" id="email" bind:value={formData.email} />
    </div>

        <div class="form-field">
            <label for="email"> Profile Image </label>
            <input type="file" accept="image/*" on:change={(e) => handleImageChange(e, 1)} />
            {#if previewImage1}
                <img class="preview" src={previewImage1} alt="Image 1 Preview" />
            {/if}
        </div>

        <div class="form-field">
            <label for="email"> Template Image </label>
            <input type="file" accept="image/*" on:change={(e) => handleImageChange(e, 2)} />
            {#if previewImage2}
                <img class="preview" src={previewImage2} alt="Image 2 Preview" />
            {/if}
        </div>

    <div class="form-field">
        <label class="form-label">About Me</label>
        <textarea class="form-field" bind:value={aboutMe} rows="4" required></textarea>
    </div>

    <button class="overlay-button" on:click={handleOverlay} disabled={isProcessing}>
        {#if isProcessing}
            Processing...
        {:else}
            Create Visiting Card
        {/if}
    </button>

    {#if overlayImage}
        <div class="output-section">
            <img class="overlay-preview" src={overlayImage} alt="Overlayed Image Preview" />
            <button class="download-button" on:click={handleDownload}>
                {overlayImage ? 'Download Overlayed Image' : ''}
            </button>
        </div>
    {/if}
</div>
