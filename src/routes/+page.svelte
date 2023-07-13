<script>
        import { Card, Button} from "flowbite-svelte";
        let src = "https://res.cloudinary.com/tonicpow/image/fetch/c_pad,g_center,h_300,w_300/f_auto/https://ordinals.gorillapool.io/api/files/inscriptions/482ded83f01287c04a342b5a7c348a65db6d0ba55b5013ebc9092c20c59c458d_0";
        let inscription_id = "#195789";
        let type = "image/png"
</script>

<div class="container py-10 mt-10">
<Card class="mx-auto max-w-3xl">
  <div class="flex flex-col items-center justify-center min-h-[356px] min-w-[300px] bg-[#111] w-full h-full relative rounded cursor-pointer transition">
    <img id="artifact_1689159605365_image" alt="Inscription #195789" loading="lazy" width="300" height="300" decoding="async"  class="h-auto max-h-96 max-w-96" src="{src}" style="color: transparent;">
  </div>
  <div class="mt-4 flex justify-between">
    <a href="/inscription"><button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">{inscription_id}</button></a>
    <a href="/inscription"><button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4">{type}</button></a>
  </div>
</Card>
</div>



  <!-- <Card class="mx-auto max-w-5xl">
    <div class="flex flex-col items-center justify-center min-h-[356px] min-w-[300px] bg-[#111] w-full h-full relative rounded cursor-pointer transition">
      <img id="artifact_1689159605365_image" alt="Inscription #195789" loading="lazy" width="300" height="300" decoding="async" data-nimg="1" class="h-auto max-h-96 max-w-96" src="https://res.cloudinary.com/tonicpow/image/fetch/c_pad,g_center,h_300,w_300/f_auto/https://ordinals.gorillapool.io/api/files/inscriptions/482ded83f01287c04a342b5a7c348a65db6d0ba55b5013ebc9092c20c59c458d_0" style="color: transparent;">
    </div>
    <div class="mt-4 flex justify-between">
      <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">#195789</button>
      <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4">image/png</button>
    </div>
  </Card> -->  
  <!-- <Card class="mx-auto max-w-5xl">
    <div class="flex flex-col items-center justify-center min-h-[356px] min-w-[300px] bg-[#111] w-full h-full relative rounded cursor-pointer transition">
      <img id="artifact_1689159605365_image" alt="Inscription #195789" loading="lazy" width="300" height="300" decoding="async" data-nimg="1" class="h-auto max-h-96 max-w-96" src="https://res.cloudinary.com/tonicpow/image/fetch/c_pad,g_center,h_300,w_300/f_auto/https://ordinals.gorillapool.io/api/files/inscriptions/cd4542b22c76da614d1af49c9c96677e73c06937698bace6b693d343cd0c20fa_0" style="color: transparent;">
      <div class="absolute bottom-0 left-0 bg-black bg-opacity-75 flex items-center justify-between w-full p-2 h-[56px]">
        <div class="rounded bg-[#222] p-2 text-[#aaa]">#195789</div>
        <div class="hidden md:block"></div>
        <div class="select-none min-w-24 text-right rounded bg-[#222] p-2 text-[#aaa] transition">image/png</div>
      </div>
      <div class="flex justify-center mt-4">
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Button 1</button>
        <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4">Button 2</button>
      </div>
    </div>
  </Card> -->

  <!-- <div>
    <Card img="https://res.cloudinary.com/tonicpow/image/fetch/c_pad,g_center,h_300,w_300/f_auto/https://ordinals.gorillapool.io/api/files/inscriptions/8585b03f6e2878b551b07774eb2981e64e1bb98d84fc109bdb298a895d710291_0" style="margin: auto" href="/" horizontal reverse={hCard}>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
    <!-- <Toggle bind:checked={hCard} class="mt-4 italic dark:text-gray-500">Reverse</Toggle> --
  </div> -->

