<script>
    import { onMount } from "svelte";
    import { getAuthToken } from "../../services/authService";
  
    let accessToken;
    let userData = {
      id: "",
      email: "",
      phone_verified: false,
    };
  
    async function getUserData() {
      try {
        
        accessToken =  getAuthToken();
  
        const response = await fetch("https://api.neucron.io/user/info", {
          headers: {
            Authorization: accessToken,
          },
        });
        const data = await response.json();
        userData = data.data;
      } catch (error) {
        console.error("Error occurred:", error);
      }
    }
  
    onMount(async () => {
      await getUserData();
    });
  </script>
  
  <main>
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg">
        <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          User Dashboard
        </h1>
  
        <div class="mt-6 p-4 rounded-lg border border-gray-300 shadow-lg">
          <div class="grid grid-cols-2 gap-4">
            <p class="text-lg font-medium">Wallet ID :</p>
            <p>{userData.id}</p>
  
            <p class="text-lg font-medium">Email :</p>
            <p>{userData.email}</p>
  
            <p class="text-lg font-medium">Phone Verified :</p>
            <p>{userData.phone_verified ? 'Yes' : 'No'}</p>
  
  
          </div>
        </div>
      </div>
    </div>
  </main>
  
