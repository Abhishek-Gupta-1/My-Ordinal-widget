<script>
    import { auto } from '@popperjs/core';
    import {AccordionItem, Accordion, Button} from 'flowbite-svelte';
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
  
    const open_all = () => items.forEach((_,i)=> items[i] = true)
    const close_all= () => items.forEach((_,i)=> items[i] = false)
  </script>

  <!-- <Button on:click={open_all}>Open all</Button>
  <Button on:click={close_all}>Close all</Button> -->

  <div class="container max-w-5xl mx-auto px-3 mt-10">
    <!-- <Accordion multiple>
      <AccordionItem bind:open={items[0]}>
        <span slot="header">How to Upload Image ?? </span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
      </AccordionItem>
      <AccordionItem bind:open={items[1]}>
        <div slot="header">How to Upload Text ??</div>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      </AccordionItem>
      <AccordionItem bind:open={items[2]}>
        <div slot="header">How to Upload Code ??</div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda officia neque nobis aut praesentium reprehenderit aperiam temporibus, ratione dolor exercitationem, necessitatibus molestias earum libero aspernatur adipisci eligendi odit nam cupiditate</p>
      </AccordionItem>
    </Accordion>  -->
  
  <Tabs style="full" defaultClass="flex rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700">
      <!-- <TabItem class="w-full" open>
        <span slot="title">Image</span>  
      </TabItem> -->
      <!-- <TabItem class="w-full" open>
        <span slot="title">Image</span>
        <div class="mt-4" style="height: 330px;">
          <label for="fileInput" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer">
            Select File
          </label>
          <input id="fileInput" type="file" class="hidden" />
        </div>
      </TabItem> -->

      <TabItem class="w-full" open>
        <span slot="title">Image</span>
        <div class="mt-4 flex flex-col items-center justify-center" style="height: 330px;">
          <label for="fileInput" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded cursor-pointer">
            Select File
          </label>
          <input id="fileInput" type="file" class="hidden" />
        </div>
      </TabItem>
      
      
  
      <TabItem class="w-full">
        <span slot="title">Code</span>
        <Textarea {...code} />
        <Button size="xl" on:click = {() => formModal = true}>Extra large</Button>
      </TabItem>
  
      <TabItem class="w-full">
        <span slot="title">Text</span>
        <Textarea {...text}/>
        <Button size="xl" on:click = {() => formModal = true}>Extra large</Button>
      </TabItem>
      <TabItem class="w-full">
        <span slot="title">BSV-20</span>
        <p class="text-sm text-gray-500 dark:text-gray-400"><b>Users:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </TabItem>
    </Tabs>
  
    <Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
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
  
      <Button type="submit" class="w-full1">Login to your account</Button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered? <a href="/" class="text-primary-700 hover:underline dark:text-primary-500">Create account</a>
        </div>
    </form>
  </Modal>
  </div>