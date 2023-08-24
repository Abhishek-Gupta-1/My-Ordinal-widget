<script lang="ts">
  import { page } from '$app/stores';
  import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
  import { clearAuthToken } from '../services/authService';
  import { isAuthenticated } from '../services/authStore';
  import '../app.css';

  let isHomePage: boolean;
  $: isHomePage = $page.route.id === '/';

  let isLoggedIn = false;
  $: {
    isAuthenticated.subscribe(value => {
      isLoggedIn = value;
    });
  }

  $: activeUrl = $page.url.pathname;
  let logo = 'https://i.postimg.cc/rwZ1v7TS/bestmint.png';
  let divClass = 'w-full ml-auto lg:block lg:w-auto order-1 lg:order-none';
  let ulClass = 'flex flex-col py-3 my-4 lg:flex-row lg:my-0 text-l font-medium text-gray-900 dark:text-gray-300 gap-4';

  function handleSignout() {
    clearAuthToken();
    console.log(isAuthenticated);
    window.location.href = '/'; // Redirect to home page
  }
</script>

<header style="max-width: 90%; margin: auto" class="flex-none w-full mx-auto bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800">
  <Navbar
          color="default"
          fluid
          navClass="flex items-center justify-between w-full mx-auto py-1.5 px-4 max-w-8xl lg:px-20 px-4"
          let:hidden
          let:toggle>

    <NavBrand href="/">
      <img src={logo} class="mr-3 h-8" alt="Logo" />
    </NavBrand>

    <NavUl
            {hidden}
            {divClass}
            {ulClass}
            on:click={() => setTimeout(toggle, 1)}
            nonActiveClass="md:!pl-3 md:!py-2 lg:!pl-0 text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-indigo-700"
            activeClass="underline md:!pl-3 md:!py-2 lg:!pl-0 text-white bg-indigo-700 lg:bg-transparent lg:text-indigo-900 cursor-default">

      <NavLi class="lg:px-2 lg:mb-0" active={activeUrl === '/'} href="/">Home</NavLi>
      <NavLi class="lg:px-2 lg:mb-0" active={activeUrl.startsWith('/docs')} href="/docs">Documentation</NavLi>
      <NavLi class="lg:px-2 lg:mb-0" active={activeUrl.startsWith('/add-funds')} href="/add-funds"> Add Funds </NavLi>
      {#if isLoggedIn}
        <NavLi class="lg:px-2 lg:mb-0" active={activeUrl.startsWith('/dashboard')} href="/dashboard">Dashboard</NavLi>
        <NavLi class="lg:px-2 lg:mb-0" active={activeUrl.startsWith('/wallet')} href="/wallet">Wallet</NavLi>
        <NavLi class="lg:px-2 lg:mb-0" active={activeUrl.startsWith('/upload')} href="/upload">Mint</NavLi>
        <NavLi class="lg:px-2 lg:mb-0" active={activeUrl.startsWith('/')} on:click={handleSignout}>Signout</NavLi>
      {:else}
        <NavLi class="lg:px-2 lg:mb-0" active={activeUrl.startsWith('/auth/login')} href="/auth/login">Login</NavLi>
      {/if}
    </NavUl>


    <NavHamburger on:click={toggle} btnClass="ml-3 m-0 lg:hidden {isHomePage ? '' : ''}" />
  </Navbar>
</header>

<hr class="border-t border-gray-300 ">
<slot />
