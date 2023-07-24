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
