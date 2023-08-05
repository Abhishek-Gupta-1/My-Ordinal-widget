<script>
  import { Button } from 'flowbite-svelte';
  import { Tabs, TabItem } from 'flowbite-svelte';
  import { Modal, Label, Input, Checkbox } from 'flowbite-svelte';
  import { Textarea } from 'flowbite-svelte';

  let code = {
    id: 'code',
    name: 'message',
    label: 'Your message',
    rows: 10,
    placeholder: 'Enter the Code',
  };

  let text = {
    id: 'Text',
    name: 'message',
    label: 'Your message',
    rows: 10,
    placeholder: 'Enter the Text',
  };

  let formModal = false;

  const items = Array(3);

  const openAll = () => items.fill(true);
  const closeAll = () => items.fill(false);

  function handleUploadClick() {
    formModal = true;
  }

  function closeModal() {
    formModal = false;
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
      <Button size="xl" on:click={handleUploadClick}>Upload</Button>
    </TabItem>

    <TabItem class="w-full">
      <span slot="title">Text</span>
      <Textarea {...text} />
      <Button size="xl" on:click={handleUploadClick}>Upload</Button>
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
