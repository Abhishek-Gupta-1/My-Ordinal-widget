<script>
    import { goto } from '$app/navigation';
  import { setAuthToken } from '../../../services/authService';
    import { storeWalletInfo } from '../../../services/database';

    const baseURL = 'https://dev.neucron.io/v1';

  let name = '';
  let email = '';
  let password = '';
  let confirmPassword = '';
  let errorMessage = '';
  let isSignupSuccessful = false;


  // @ts-ignore
  async function handleSubmit(event) {
    event.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      errorMessage = 'Passwords do not match.';
      return;
    }

    try {
      const response = await fetch(`${baseURL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),

      });

      const data = await response.json();

      if (response.ok) {
        await storeWalletInfo(data.data.user_id, data.data.wallet_id, data.data.wallet_address);
        setAuthToken(data.data.access_token);
        isSignupSuccessful = true;
        goto('/dashboard');

      } else {
        errorMessage = data.message || 'Signup failed. Please try again.';
      }
    } catch (error) {
      errorMessage = 'An error occurred during signup. Please try again later.';
      console.error(error);
    }
  }
</script>

<div class="min-h-screen flex items-center justify-center">
  <div class="max-w-md w-full">
    <div class="bg-white py-8 px-6 rounded-lg shadow-md">
      <h3 class="mb-4 text-xl font-medium text-gray-900">Signup</h3>
      {#if isSignupSuccessful}
        <p class="text-green-500 text-sm mb-4">Signup successful. You can now log in.</p>
      {:else}
        <form class="space-y-4" on:submit={handleSubmit}>
          <div>
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="block mb-1 font-medium text-gray-700">Name</label>
            <input type="text" bind:value={name} placeholder="Your Name" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
          </div>
          <div>
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="block mb-1 font-medium text-gray-700">Email</label>
            <input type="email" bind:value={email} placeholder="Enter your Mail" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
          </div>
          <div>
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="block mb-1 font-medium text-gray-700">Password</label>
            <input type="password" bind:value={password} placeholder="Password" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
          </div>
          <div>
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="block mb-1 font-medium text-gray-700">Confirm Password</label>
            <input type="password" bind:value={confirmPassword} placeholder="re-enter password" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
          </div>
          {#if errorMessage}
            <p class="text-red-500 text-sm">{errorMessage}</p>
          {/if}
          <button type="submit" class="w-full bg-indigo-800 text-white font-medium py-2 rounded-md hover:bg-indigo-900" disabled={!email || !password || !confirmPassword || (password !== confirmPassword)}>Signup</button>
        </form>
      {/if}
    </div>
  </div>
</div>
