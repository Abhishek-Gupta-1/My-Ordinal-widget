<script>
    import { goto } from '$app/navigation';
  import { setAuthToken } from '../../../services/authService';
  import { setName } from '../../../services/userDetails';


  let email = '';
  let password = '';
  let showPassword = false;
  let errorMessage = '';

  // @ts-ignore
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch('https://api.neucron.io/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // If the response is successful (status_code 200), store the token and redirect to the dashboard
        console.log(data.data.access_token)
        setAuthToken(data.data.access_token);
        // Redirect to the dashboard or any other appropriate page after successful login
        // For example: window.location.href = '/user dashboard';
        setName(email);
        goto('/dashboard')
        console.log('Login successful');
        email = '';
        password= '';
        showPassword = false;

      } else {
        // If the response is not successful, show the error message from the server
        errorMessage = data.message || 'Login failed. Please try again.';
      }
    } catch (error) {
      // If an error occurs during the fetch request, show a generic error message
      errorMessage = 'An error occurred during login. Please try again later.';
      console.error(error);
    }
  }
</script>

<div class="min-h-screen flex items-center justify-center">
  <div class="max-w-md w-full">
    <div class="bg-white py-8 px-6 rounded-lg shadow-md">
      <h3 class="mb-4 text-xl font-medium text-gray-900">Sign in to our platform</h3>
      <form class="space-y-4" on:submit={handleSubmit}>
        <div>
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="block mb-1 font-medium text-gray-700">Email</label>
          <input type="email" bind:value={email} placeholder="name@company.com" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-200" />
        </div>
        <div>
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="block mb-1 font-medium text-gray-700">Password</label>
          {#if showPassword}
            <input type="text" bind:value={password} placeholder="" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-200" />
          {:else}
            <input type="password" bind:value={password} placeholder="" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-200" />
          {/if}
        </div>
        <div class="flex items-center">
          <input type="checkbox" class="form-checkbox text-orange-500" bind:checked={showPassword} />
          <span class="ml-2 text-gray-700 cursor-pointer" on:click={() => (showPassword = !showPassword)}>Show password</span>
          <a href="/auth/forgotpassword" class="ml-auto text-sm text-orange-500 hover:underline">Lost password?</a>
        </div>
        {#if errorMessage}
          <p class="text-red-500 text-sm">{errorMessage}</p>
        {/if}
        <button type="submit" class="w-full bg-orange-500 text-white font-medium py-2 rounded-md hover:bg-orange-600">Login to your account</button>
        <div class="text-sm text-gray-500 mt-2">
          Not registered? <a href="/auth/signup" class="text-orange-500 hover:underline">Create account</a>
        </div>
      </form>
    </div>
  </div>
</div>
