<script>
    import { Card, Button, Toggle } from "flowbite-svelte";
    let user_img = "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
    let user_name= "Satoshi"
  </script>

<!-- <div style="height: auto" class="mx-auto mt-10 px-10" >
  <div class="inline-block align-top" style="width: 29%;">
    <Card img="{user_img}">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user_name}</h5>
    </Card>
  </div>
  <div class="inline-block align-top" style="width: 70%;">
    <div class="bg-white shadow-lg rounded-lg p-3">
      <p class="text-lg font-medium text-gray-800">Wallet ID</p>
      <p class="text-xl font-semibold text-gray-900">WALLET123456789</p>
      <p class="mt-4 text-lg font-medium text-gray-800">Balance</p>
      <p class="text-2xl font-semibold text-green-600">$1,500.00</p>
      <div class="flex flex-col items-center mt-8 space-y-4">
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">Add Money</button>
        <button class="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded">Cash Out</button>
      </div>
    </div>
  </div>
</div> -->

<div style="height: auto" class="mx-auto mt-10 px-10">
  <div class="inline-block align-top" style="width: 29%;">
    <Card img="{user_img}">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user_name}</h5>
    </Card>
  </div>
  <div class="inline-block align-top" style="width: 70%;">
    <div class="bg-white shadow-lg rounded-lg p-3">
      <p class="text-lg font-medium text-gray-800">Wallet ID</p>
      <p class="text-xl font-semibold text-gray-900">WALLET123456789</p>

      <p class="mt-4 text-lg font-medium text-gray-800">Balance</p>
      <p class="text-2xl font-semibold text-green-600">$1,500.00</p>

      <p class="text-2xl font-semibold text-gray-900">Another Field</p>
      <p class="text-2xl font-semibold text-gray-900">Another Field</p>
      <div class="flex flex-row items-center justify-center mt-8 space-x-4">
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">Add Money</button>
        <button class="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded">Cash Out</button>
      </div>
    </div>
  </div>
</div>


<div class ="my-10 px-16">
  <div class="bg-white border border-gray-200 shadow-md rounded-lg p-4 mb-4"><h3 class="text-lg font-semibold">Transaction ID: 1</h3> <p class="text-gray-600">Inscribed No: ABC123</p> <p class="text-gray-600">Ordinals ID: ORD456</p> </div>
  <div class="bg-white border border-gray-200 shadow-md rounded-lg p-4 mb-4"><h3 class="text-lg font-semibold">Transaction ID: 1</h3> <p class="text-gray-600">Inscribed No: ABC123</p> <p class="text-gray-600">Ordinals ID: ORD456</p> </div>
  <div class="bg-white border border-gray-200 shadow-md rounded-lg p-4 mb-4"><h3 class="text-lg font-semibold">Transaction ID: 1</h3> <p class="text-gray-600">Inscribed No: ABC123</p> <p class="text-gray-600">Ordinals ID: ORD456</p> </div>
</div>

  <!-- 
  <Card  img="https://res.cloudinary.com/tonicpow/image/fetch/c_pad,g_center,h_300,w_300/f_auto/https://ordinals.gorillapool.io/api/files/inscriptions/7417c8b2416e1b5058495d8c1da0d6ddc40b9e29d3acbac7f5116ebe5f932492_0" href="" horizontal style="margin : auto">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Transaction 1</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      Inscribe N0 : #777
    </p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      TimeStamp : #111
    </p>
  </Card> 
-->


