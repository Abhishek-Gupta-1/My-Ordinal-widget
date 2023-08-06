<script>
    import { onMount } from "svelte";
    import { getAuthToken } from "../../services/authService";

    /**
     * @type {string | null}
     */
    let accessToken;
    /**
     * @type {any}
     */
    let walletId;
    let balance = {
      confirmed: 0,
      unconfirmed: 0,
      summary: 0,
      count: 0,
    };
    /**
     * @type {string | any[]}
     */
    let addresses = [];
    /**
     * @type {string}
     */
    let generatedAddress = "Click 'Generate Address' to get a random address";

  
    async function getWalletInfo() {
      try {
        // Get the access token
        accessToken = await getAuthToken();
  
        // Call API to get wallet IDs
        const walletListResponse = await fetch("https://api.neucron.io/custom/wallet/list", {
          // @ts-ignore
          headers: {
            Authorization: accessToken,
          },
        });
        const walletListData = await walletListResponse.json();
        walletId = walletListData.data.walletList[0];
        console.log(walletId)
  
        // Call API to get wallet balance
        const balanceResponse = await fetch(
          `https://api.neucron.io/custom/wallet/balance?walletID=${walletId}`,
          {
            // @ts-ignore
            headers: {
              Authorization: accessToken,
            },
          }
        );
        const balanceData = await balanceResponse.json();
        balance = balanceData.data.balance;
  
        // Set initial generated address
      } catch (error) {
        console.error("Error occurred:", error);
      }
    }
  
    async function generateAddress() {
      try {
        // Call API to get addresses
        const addressResponse = await fetch(
          `https://api.neucron.io/custom/wallet/address?walletID=${walletId}`,
          {
            // @ts-ignore
            headers: {
              Authorization: accessToken,
            },
          }
        );
        const addressData = await addressResponse.json();
        addresses = addressData.data.addresses;
  
        // Select a random address from the list
        generatedAddress =
          addresses[Math.floor(Math.random() * addresses.length)];
      } catch (error) {
        console.error("Error occurred:", error);
      }

    }
    
    // onMount(async () => {
      
    // });
  </script>
  
  <main>
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg">
        <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Wallet Details
        </h1>
  
        <div class="mt-6 p-4 rounded-lg border border-gray-300 shadow-lg">
          <p class="text-lg font-medium">Wallet ID: {walletId}</p>
          <p class="text-lg font-medium">Confirmed Balance: {balance.confirmed}</p>
          <p class="text-lg font-medium">Unconfirmed Balance: {balance.unconfirmed}</p>
          <p class="text-lg font-medium">Summary: {balance.summary}</p>
          <p class="text-lg font-medium">Transaction Count: {balance.count}</p>
        </div>
  
        <div class="mt-6">
          <p class="text-lg font-medium">Addresses:</p>
          {#each addresses as address}
            <p>{address}</p>
          {/each}
        </div>
  
        <div class="mt-6">
          <button
            class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            on:click={generateAddress}
          >
            Generate Address
          </button>
        </div>
  
        
        <div class="mt-6">
          <p class="text-lg font-medium">Generated Address:</p>
          <p>{generatedAddress}</p>
        </div>
      </div>
    </div>
  </main>
  