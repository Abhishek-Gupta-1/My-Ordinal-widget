  <script>
    import "../app.css";
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte'
    import { GradientButton } from 'flowbite-svelte';

  </script>

  <div class="container mx-auto px-12">
    <Navbar let:hidden let:toggle class="py-4">
      <NavBrand href="/">
        <img src="https://www.sfox.com/wp-content/uploads/2020/03/0_hEB3PayeVFvh798c.png" class="mr-5 h-8 sm:h-10" alt="Logo"/> 
        <!-- <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Ordinal</span> -->
      </NavBrand>
    
      <div class="flex items-center md:order-2 ">
        <Avatar id="avatar-menu" src="" />
        <NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1"/>
      </div>
    
      <Dropdown placement="bottom" triggeredBy="#avatar-menu" class="mt-2">
        <DropdownHeader>
          <span class="block text-sm">Bonnie Green</span>
          <span class="block truncate text-sm font-medium">name@gmail.com</span>
        </DropdownHeader>
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Wallet</DropdownItem>
        <DropdownDivider />
        <DropdownItem><a href="/auth/login"><GradientButton color="purpleToBlue">SignIn</GradientButton></a></DropdownItem>
      </Dropdown>
    
      <NavUl {hidden} class="mt-4 md:mt-0">
        <NavLi href="/" class="text-lg" active={true}>Home</NavLi>
        <NavLi href="/upload" class="text-lg" >Upload</NavLi>
        <NavLi href="/wallet" class="text-lg">Wallet</NavLi>
        <NavLi href="/docs" class="text-lg">Docs</NavLi>
      </NavUl>
    </Navbar>
  </div>
  <hr class="border-t border-gray-300 ">
  <slot />
  
