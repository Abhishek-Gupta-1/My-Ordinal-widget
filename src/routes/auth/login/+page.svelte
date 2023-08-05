<script>
  import { goto } from '$app/navigation';
  import { setAuthToken } from '../../../services/authService';
  import { setName } from '../../../services/userDetails';

  let email = '';
  let password = '';
  let showPassword = false;
  let errorMessage = '';

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
        handleSuccessfulLogin(data.data.access_token);
      } else {
        handleLoginError(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      handleLoginError('An error occurred during login. Please try again later.');
      console.error(error);
    }
  }

  function handleSuccessfulLogin(token) {
    setAuthToken(token);
    setName(email);
    goto('/dashboard');
    console.log('Login successful');
    resetForm();
  }

  function handleLoginError(message) {
    errorMessage = message;
  }

  function resetForm() {
    email = '';
    password = '';
    showPassword = false;
  }
</script>

<div class="min-h-screen flex items-center justify-center">
  <div class="max-w-md w-full">
    <div class="bg-white py-8 px-6 rounded-lg shadow-md">
      <h3 class="mb-4 text-xl font-medium text-gray-900">Sign in to our platform</h3>
      <form class="space-y-4" on:submit={handleSubmit}>
        <div>
          <label for="email" class="block mb-1 font-medium text-gray-700">Email</label>
          <input
                  type="email"
                  id="email"
                  bind:value={email}
                  placeholder="name@company.com"
                  required
                  class="input-field"
          />
        </div>
        <div>
          <label for="password" class="block mb-1 font-medium text-gray-700">Password</label>
          {#if showPassword}
            <input
                    type="text"
                    id="password"
                    bind:value={password}
                    placeholder=""
                    required
                    class="input-field"
            />
          {:else}
            <input
                    type="password"
                    id="password"
                    bind:value={password}
                    placeholder=""
                    required
                    class="input-field"
            />
          {/if}
        </div>
        <div class="flex items-center">
          <input
                  type="checkbox"
                  class="form-checkbox text-orange-500"
                  bind:checked={showPassword}
          />
          <span
                  class="ml-2 text-gray-700 cursor-pointer"
                  on:click={() => (showPassword = !showPassword)}
          >
            Show password
          </span>
          <a href="/auth/forgotpassword" class="ml-auto text-sm text-orange-500 hover:underline">
            Lost password?
          </a>
        </div>
        {#if errorMessage}
          <p class="text-red-500 text-sm">{errorMessage}</p>
        {/if}
        <button
                type="submit"
                class="button-primary"
        >
          Login to your account
        </button>
        <div class="text-sm text-gray-500 mt-2">
          Not registered? <a href="/auth/signup" class="text-orange-500 hover:underline">Create account</a>
        </div>
      </form>
    </div>
  </div>
</div>

<style>
  .input-field {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    outline: none;
    transition: border-color 0.2s;
  }
  .input-field:focus {
    border-color: #f59e0b;
  }
  .button-primary {
    width: 100%;
    background-color: #f59e0b;
    color: white;
    font-weight: 500;
    padding: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  .button-primary:hover {
    background-color: #e8871d;
  }
</style>