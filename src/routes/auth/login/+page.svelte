<script>
  import { goto } from "$app/navigation";
  import { setAuthToken } from "../../../services/authService";

  let email = "";
  let password = "";
  let showPassword = false;
  let errorMessage = "";

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch("https://api.neucron.io/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        handleSuccessfulLogin(data.data.access_token);
      } else {
        handleLoginError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      handleLoginError(
        "An error occurred during login. Please try again later."
      );
      console.error(error);
    }
  }

  function handleSuccessfulLogin(token) {
    setAuthToken(token);
    goto("/dashboard");
    // console.log("Login successful");
    // resetForm();
  }

  function handleLoginError(message) {
    errorMessage = message;
  }

  function resetForm() {
    email = "";
    password = "";
    showPassword = false;
  }
</script>

<div style="min-height: 100vh; display: flex; align-items: center; justify-content: center;">
  <div style="max-width: 28rem; width: 100%;">
    <div style="background-color: white; padding: 2rem; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
      <h3 style="margin-bottom: 1rem; font-size: 1.5rem; font-weight: 500; color:indigo;">Login into yout account</h3>
      <form on:submit={handleSubmit} style="margin-bottom: 1rem;">
        <div style="margin-bottom: 1rem;">
          <label for="email" style="display: block; margin-bottom: 0.25rem; font-weight: 500; color: #4B5563;">Email</label>
          <input type="email" id="email" bind:value={email} placeholder="Enter your mail" required style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 0.25rem; outline: none; transition: border-color 0.2s;" />
        </div>
        <div style="margin-bottom: 1rem;">
          <label for="password" style="display: block; margin-bottom: 0.25rem; font-weight: 500; color: #4B5563;">Password</label>
          {#if showPassword}
            <input type="text" id="password" bind:value={password} placeholder="" required style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 0.25rem; outline: none; transition: border-color 0.2s;" />
          {:else}
            <input type="password" id="password" bind:value={password} placeholder="" required style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 0.25rem; outline: none; transition: border-color 0.2s;" />
          {/if}
        </div>
        <div style="display: flex; align-items: center;">
          <input type="checkbox" class="form-checkbox text-indigo-900" bind:checked={showPassword} style="margin-right: 0.5rem;" />
          <span style="color: indigo; cursor: pointer;" on:click={() => (showPassword = !showPassword)}>Show password</span>
          <a href="/auth/forgotpassword" style="margin-left: auto; font-size: 0.875rem; color: indigo; cursor: pointer;">Forgot password</a>
        </div>
        {#if errorMessage}
          <p style="color: #DC2626; font-size: 0.875rem; margin-top: 0.5rem;">{errorMessage}</p>
        {/if}
        <button type="submit" style="width: 100%; margin-top :10px;background-color: indigo; color: white; font-weight: 500; padding: 0.5rem; border: none; border-radius: 0.25rem; cursor: pointer; transition: background-color 0.2s;">
          Login to your account
        </button>
        <div style="margin-top: 0.5rem; font-size: 0.875rem; color: black;">
          Not registered? <a href="/auth/signup" style="color: indigo; cursor: pointer; text-decoration: underline;">Create account</a>
        </div>
      </form>
    </div>
  </div>
</div>
