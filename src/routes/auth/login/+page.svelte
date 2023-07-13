<script>
    let email = '';
    let password = '';
  
    // @ts-ignore
    function handleSubmit(event) {
      event.preventDefault();
      // Perform login logic here
      console.log('Login submitted');
    }
  </script>
  
  <div class="min-h-screen flex items-center justify-center">
    <div class="max-w-md w-full">
      <div class="bg-white py-8 px-6 rounded-lg shadow-md">
        <h3 class="mb-4 text-xl font-medium text-gray-900">Sign in to our platform</h3>
        <form class="space-y-4" on:submit={handleSubmit}>
          <div>
            <label class="block mb-1 font-medium text-gray-700">Email</label>
            <input type="email" bind:value={email} placeholder="name@company.com" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-200" />
          </div>
          <div>
            <label class="block mb-1 font-medium text-gray-700">Password</label>
            <input type="password" bind:value={password} placeholder="•••••" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-200" />
          </div>
          <div class="flex items-center">
            <input type="checkbox" class="form-checkbox text-orange-500" />
            <span class="ml-2 text-gray-700">Remember me</span>
            <a href="/auth/forgotpassword" class="ml-auto text-sm text-orange-500 hover:underline">Lost password?</a>
          </div>
          <button type="submit" class="w-full bg-orange-500 text-white font-medium py-2 rounded-md hover:bg-orange-600">Login to your account</button>
          <div class="text-sm text-gray-500 mt-2">
            Not registered? <a href="/auth/signup" class="text-orange-500 hover:underline">Create account</a>
          </div>
        </form>
      </div>
    </div>
  </div>
  