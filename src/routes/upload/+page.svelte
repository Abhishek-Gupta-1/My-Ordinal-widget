<script>
  import { Button } from 'flowbite-svelte';
  import { Tabs, TabItem } from 'flowbite-svelte';
  import { Modal, Label, Input, Checkbox } from 'flowbite-svelte';
  import { Textarea } from 'flowbite-svelte';
  import {getAuthToken} from "../../services/authService";
  import {firebaseConfig} from "../../services/firebase";
  import {getWalletId} from "../../services/WalletService";

  let text = {
    id: 'Text',
    name: 'message',
    label: 'Your message',
    rows: 10,
    placeholder: 'Enter the Text',
  };

  let formModal = false;

  async function handleUploadClick() {
    const fileInput = document.getElementById('fileInput');
    let firebaseUrl = 'https://firebasestorage.googleapis.com/v0/b/ordinal-widget.appspot.com/o/'
    if (fileInput && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const firebaseResponse = await uploadToFirebase(file);
      firebaseUrl = firebaseUrl + file.name  + '?alt=media';
      await sendRequestToAPI(firebaseUrl);
    }
  }

  async function uploadToFirebase(file) {
    const firebaseStorageURL = `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o`;
    const uploadType = 'media';
    const uploadURL = `${firebaseStorageURL}/${encodeURIComponent(file.name)}?alt=${uploadType}`;

    try {
      const storageResponse = await fetch(uploadURL, {
        method: 'POST',
        body: file
      });

      if (storageResponse.ok) {
        console.log(storageResponse);
        return storageResponse;
      } else {
        throw new Error('Failed to upload file to Firebase Storage.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }


  async function sendRequestToAPI(firebaseUrl) {
    const apiUrl = 'https://api.neucron.io/tx/file?walletID=' + await getWalletId();
    const requestBody = {
      url: firebaseUrl
    };
    const apiResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Authorization': getAuthToken(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    return apiResponse.json();
  }

  function closeModal() {
    formModal = false;
  }

  async function postData() {
    try {
      const walletID =  await getWalletId();
      const message = text.value;

      const response = await fetch(`https://api.neucron.io/tx/postdata?walletID=${walletID}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': getAuthToken(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      });

      if (response.ok) {
        console.log('Data posted successfully:', await response.json());
        closeModal();
      } else {
        console.error('Error posting data:', await response.text());
      }
    } catch (error) {
      console.error('An error occurred:', error);
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
        <input id="fileInput" type="file" class="hidden" />
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
</div>
