<script>
  import { onMount } from 'svelte';
  import { getAuthToken } from '../../services/authService';
  import {getWalletId} from "../../services/WalletService";

  let accessToken;
  $: balance = {
    confirmed: 0,
    unconfirmed: 0,
    summary: 0,
    count: 0,
  };

  let generatedAddress = '';

  async function getBalance() {
    try {
      const response = await fetch(`https://api.neucron.io/wallet/balance?walletID=` + await getWalletId(), {
        headers: {
          Authorization: accessToken,
        },
      });
      const data = await response.json();
      balance = data.data.balance;
    } catch (error) {
      console.error('Error occurred:', error);
    }
  }

  async function generateAddress() {
    try {
      const response = await fetch(`https://api.neucron.io/wallet/address?walletID=` + await getWalletId(), {
        headers: {
          Authorization: accessToken,
        },
      });
      const data = await response.json();
      generatedAddress = data.data.addresses[0];
    } catch (error) {
      console.error('Error occurred:', error);
    }
  }

  onMount(async () => {
    await getBalance();
  });
</script>

<main style="width: 90%; margin:auto; margin-top: 16px; height: 75vh;">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <div class="p-4 bg-white rounded-lg shadow-md">
    <div class="flex items-center justify-between">
      <div>
        <h3 class="text-lg font-medium mb-2">Current Balance</h3>
        <p class="text-4xl font-bold text-indigo-600">{balance.confirmed}</p>
      </div>
      <button class="text-gray-500 hover:text-indigo-600 transition" on:click={getBalance}>
        <span class="material-symbols-outlined">
          refresh
          </span>
      </button>
    </div>

    <div class="mt-4">
      <p class="text-gray-600">Unconfirmed: {balance.unconfirmed}</p>
      <p class="text-gray-600">Transactions Count: {balance.count}</p>
    </div>

    <div class="mt-6">
      <button class="block w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white" on:click={generateAddress}>
        Get Fundable Address
      </button>
    </div>

    {#if generatedAddress}
    <div class="mt-6">
      <p class="text-gray-600">Generated Address: {generatedAddress}</p>
    </div>
    {/if}

    <div class="mt-4">
      <a href="https://relysia.com/" target="_blank" class="text-indigo-600 hover:underline">
        Fund Using Relysia
      </a>
    </div>
  </div>
</main>

<style>
  .material-symbols-outlined {
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
  }
</style>
