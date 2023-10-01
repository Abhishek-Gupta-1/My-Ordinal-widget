<script>
  import { Button } from 'flowbite-svelte';
  import { Tabs, TabItem } from 'flowbite-svelte';
  import { Modal, Label, Input, Checkbox } from 'flowbite-svelte';
  import { Textarea } from 'flowbite-svelte';
  import {getAuthToken} from "../../services/authService";
  import {firebaseConfig} from "../../services/firebase";
  import {getWalletId} from "../../services/WalletService";
  import { requireAuth } from "../../services/routeGuard";

  export let session; // Get session data from SvelteKit load function



  export async function load() {
    const result = await requireAuth();
    if (result.redirect) {
      return result; // Redirect if not authenticated
    }
  }

  let text = {
    id: 'Text',
    name: 'message',
    label: 'Your message',
    rows: 10,
    placeholder: 'Enter the Text',
  };

  let formModal = false;
  let transactionId = '';
  let isTransactionSuccessfull = false;


  let image;


  function handleImageChange(event, imageNumber) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (imageNumber === 1) image = e.target.result;
        else image = e.target.result;
      };
      reader.readAsDataURL(file);
      if (imageNumber === 1) image = file;
      else image = file;
    }
  }

  async function handleUploadClick() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    const apiUrl = 'https://dev.neucron.io/v1/tx/upload?' + await getWalletId();

    const formData = new FormData();
    formData.append('upfile', file);

    const apiResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': getAuthToken(),
      },
      body: formData
    });
    let apiData = await apiResponse.json();
    transactionId = apiData.data.txid;
    isTransactionSuccessfull = true;

  }


  function closeModal() {
    formModal = false;
  }

  async function postData() {
    try {
      const walletID =  await getWalletId();
      const message = text.value;

      const response = await fetch(`https://dev.neucron.io/v1/tx/postdata?walletID=${walletID}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': getAuthToken(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      });

      if (response.ok) {
        let responseData = await response.json();
        transactionId = responseData.data.txid;
        isTransactionSuccessfull = true;
        image = null;
        closeModal();
      } else {
        console.error('Error posting data:', await response.text());
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  function verifyTransaction() {
    if (transactionId) {
      window.open(`https://whatsonchain.com/tx/${transactionId}`, '_blank');
    }
  }

</script>

<div class="container max-w-5xl mx-auto px-3 mt-10">
  <Tabs style="full: full" defaultClass="flex rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700">

    <TabItem class="w-full" open>
      <span slot="title">Image</span>
      <div class="mt-4 flex flex-col items-center justify-center" style="height: 330px;">
        <label for="fileInput" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded cursor-pointer">
          Select File
        </label>
        <input id="fileInput" type="file" class="hidden" on:change={(e) => handleImageChange(e, 2)}/>
        {#if image}
          <img class="preview" src={image} alt="Image 2 Preview" />
        {/if}
      </div>
      <Button size="xl" on:click={handleUploadClick}>Upload File</Button>
    </TabItem>

    <TabItem class="w-full">
      <span slot="title">Text</span>
      <Textarea bind:value={text.value} {...text} />
      <Button size="xl" on:click={postData}> Upload Text </Button>
    </TabItem>
  </Tabs>

  <Modal bind:open={formModal} size="xs" autoclose={false} class="w-full" on:close={closeModal}>
    <form class="flex flex-col space-y-6" action="#">
      <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
      <Label class="space-y-2">
        <span>Email</span>
        <Input type="email" name="email" placeholder="name@company.com" required />
      </Label>
      <Label class="space-y-2">
        <span>Your password</span>
        <Input type="password" name="password" placeholder="•••••" required />
      </Label>
      <div class="flex items-start">
        <Checkbox>Remember me</Checkbox>
        <a href="/" class="ml-auto text-sm text-primary-700 hover:underline dark:text-primary-500">Lost password?</a>
      </div>

      <Button type="submit" class="w-full">Login to your account</Button>
      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered? <a href="/" class="text-primary-700 hover:underline dark:text-primary-500">Create account</a>
      </div>
    </form>
  </Modal>
  {#if isTransactionSuccessfull}
    <p class="success-message">Data Uploaded Succesfully!</p>
    <div class="transaction-id">
      <button on:click={verifyTransaction} class="verify-button">Verify Transaction</button>
    </div>
  {/if}
</div>

<style>
  .preview {
    max-width: 100px;
    margin-top: 1rem;
  }

  .button:hover {
    background-color: #0056b3;
  }

  .success-message {
    color: #00a000;
    font-weight: bold;
    margin-top: 10px;
  }

  .verify-button {
    background-color: #f0f0f0;
    border: none;
    color: #007bff;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  .verify-button:hover {
    background-color: #e0e0e0;
    color: #0056b3;
  }
</style>
