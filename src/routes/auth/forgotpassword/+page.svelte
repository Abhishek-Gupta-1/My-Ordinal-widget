<script>
    let email = '';
  
    function handleSubmit(event) {
      event.preventDefault();
      // Perform forgot password logic here
      console.log('Forgot password form submitted');
    }
  </script>
  
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full">
      <div class="bg-white py-8 px-6 rounded-lg shadow-md">
        <h3 class="mb-4 text-xl font-medium text-gray-900">Forgot Password</h3>
        <form class="space-y-4" on:submit={handleSubmit}>
          <div>
            <label class="block mb-1 font-medium text-gray-700">Email</label>
            <input type="email" bind:value={email} placeholder="name@company.com" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
          </div>
          <button type="submit" class="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600">Reset Password</button>
          <div class="text-sm text-gray-500 mt-2">
            <a href="/auth/login" class="text-blue-500 hover:underline">Back to Login</a>
          </div>
        </form>
      </div>
    </div>
  </div>
  