   <script>
    let email = '';
    let message = '';
  
    // @ts-ignore
    async function handleSubmit(event) {
      event.preventDefault();
      try {
        const response = await fetch(`https:///auth/forgot_password?email=${encodeURIComponent(email)}`);
  
        if (response.ok) {
          const data = await response.json();
          // Display the reset email message
          message = data.data.message;
          console.log(message);
        } else {
          // Handle error response from the server
          const data = await response.json();
          console.error(data.message || 'Failed to reset password');
        }
      } catch (error) {
        console.error('An error occurred during password reset', error);
      }
    }
  </script>
  
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full">
      <div class="bg-white py-8 px-6 rounded-lg shadow-md">
        <h3 class="mb-4 text-xl font-medium text-gray-900">Forgot Password</h3>
        {#if message}
          <p class="mb-4 text-green-600">{message}</p>
          <p class="text-sm text-gray-500 mt-2">
            An email has been sent with further instructions.
          </p>
        {:else}
          <form class="space-y-4" on:submit={handleSubmit}>
            <div>
              <!-- svelte-ignore a11y-label-has-associated-control -->
              <label class="block mb-1 font-medium text-gray-700">Email</label>
              <input
                type="email"
                bind:value={email}
                placeholder="name@company.com"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <button
              type="submit"
              class="w-full bg-orange-500 text-white font-medium py-2 rounded-md hover:bg-orange-600"
            >
              Reset Password
            </button>
            <div class="text-sm text-gray-500 mt-2">
              <a href="/auth/login" class="text-orange-500 hover:underline">Back to Login</a>
            </div>
          </form>
        {/if}
      </div>
    </div>
  </div>
  