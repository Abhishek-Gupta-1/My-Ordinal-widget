<main>
    <section class="content">
      <div class="container">
        <h1 class="title">Ordinals Widget</h1>
        <p class="inscriptions">Inscriptions Made: <span id="inscriptionCount">999999999999</span></p>
        <div class="image-container">
          <img src={currentImage} alt="New Inscription" class="inscription-image">
        </div>
      </div>
    </section>
  </main>
  
  <script>
    import { afterUpdate } from 'svelte';
  
    // let inscriptionCount = 999999999999;
    // let termsChecked = false;
    let currentImage = '';
  
    let arr = [
      "https://res.cloudinary.com/tonicpow/image/fetch/c_pad,g_center,h_300,w_300/f_auto/https://ordinals.gorillapool.io/api/files/inscriptions/44b4b14e0534adc49363c223d1a66b348a36c300560426fe2c886dd0dc638304_0",
      "https://res.cloudinary.com/tonicpow/image/fetch/c_pad,g_center,h_300,w_300/f_auto/https://ordinals.gorillapool.io/api/files/inscriptions/e71f355f45ff70c8d3ca29164aa69232c80d81cabd1b9209e39ee222fab143a8_897",
      "https://res.cloudinary.com/tonicpow/image/fetch/c_pad,g_center,h_300,w_300/f_auto/https://ordinals.gorillapool.io/api/files/inscriptions/fecc22e3ada601265f55fd1ccf330522fd46ad3e70868043ce9ff6bba28ab72c_0",
      "https://res.cloudinary.com/tonicpow/image/fetch/c_pad,g_center,h_300,w_300/f_auto/https://ordinals.gorillapool.io/api/files/inscriptions/31f9eaa37d3257da5488d522695d6e284dc746fd661d36aa9bc30c275850f3bb_0",
      "https://res.cloudinary.com/tonicpow/image/fetch/c_pad,g_center,h_300,w_300/f_auto/https://ordinals.gorillapool.io/api/files/inscriptions/1e7d604a087fb3fbb06f887a54987cd6ac95bba62eb87b075e0fabe533b95939_0",
      "https://res.cloudinary.com/tonicpow/image/fetch/c_pad,g_center,h_300,w_300/f_auto/https://ordinals.gorillapool.io/api/files/inscriptions/1f4d5da4c6303d07f9bf758dfc84947766dcb431348b4c8a71b5b60bdb24e83c_0"
    ];
  
    afterUpdate(() => {
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * arr.length);
        currentImage = arr[randomIndex];
      }, 3000);
  
      return () => clearInterval(interval);
    });
  </script>
  
  <style>
    /* Tailwind CSS classes */
    .content {
      @apply flex justify-center items-center h-screen;
    }
  
    .container {
      @apply bg-white p-8 text-center rounded shadow;
      width: 90%;
    }
  
    .title {
      @apply mb-4 text-3xl font-bold;
    }
  
    .inscriptions {
      @apply text-lg mb-4;
    }
  
    .image-container {
      @apply flex justify-center mb-6;
    }
  
    .inscription-image {
      @apply max-w-full h-auto border-4 border-gray-200 rounded;
    }
  
    .cta {
      @apply mb-6;
    }
  
    .cta-button {
      @apply block w-full mb-2 py-2 px-4 bg-blue-500 text-white rounded font-bold;
    }
  
    .terms {
      @apply flex items-center justify-center;
    }
  
    .terms input[type="checkbox"] {
      @apply mr-2;
    }
  </style>
  