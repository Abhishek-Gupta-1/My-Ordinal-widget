<script>
    let openTab = 1;

    /**
     * @param {number} tabNumber
     */
    function toggleTabs(tabNumber) {
        openTab = tabNumber;
    }
</script>
<style>
#container{
    width: 85%;
    margin: auto;
}
</style>

<div class="w-85 mx-auto" id = "container">
    <br />
    <br />
    <br />
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <div class="m-4">
        <br />
        <br />
        <br />
        <div class="flex flex-wrap">
            <div class="w-full">
                <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
                    <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                        <a
                            class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal {openTab ===
                            1
                                ? 'text-white bg-emerald-600'
                                : 'text-emerald-600 bg-white'}"
                            on:click={() => toggleTabs(1)}
                        >
                            <i class="material-icons text-base mr-1">image</i> Image
                        </a>
                    </li>
                    <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                        <a
                            class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal {openTab ===
                            2
                                ? 'text-white bg-emerald-600'
                                : 'text-emerald-600 bg-white'}"
                            on:click={() => toggleTabs(2)}
                        >
                            <i class="material-icons text-base mr-1"
                                >text_fields</i
                            > Text
                        </a>
                    </li>
                    <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                        <a
                            class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal {openTab ===
                            3
                                ? 'text-white bg-emerald-600'
                                : 'text-emerald-600 bg-white'}"
                            on:click={() => toggleTabs(3)}
                        >
                            <i class="material-icons text-base mr-1">code</i> HTML
                        </a>
                    </li>
                </ul>
                <div
                    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
                >
                    <div class="px-4 py-5 flex-auto">
                        <div class="tab-content tab-space">
                            <div class={openTab === 1 ? "block" : "hidden"}>
                                <div class="flex flex-col items-center">
                                    <img
                                        class="mx-auto cursor-pointer"
                                        src="https://t4.ftcdn.net/jpg/02/17/88/73/360_F_217887350_mDfLv2ootQNeffWXT57VQr8OX7IvZKvB.jpg"
                                        alt="Upload Logo"
                                        onclick="document.getElementById('imageUpload').click();"
                                    />
                                    <div class="mt-4">
                                        <input
                                            id="imageUpload"
                                            type="file"
                                            style="display: none;"
                                        />
                                        <button
                                            class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
                                            onclick="document.getElementById('imageUpload').click();"
                                        >
                                            Upload Image
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class={openTab === 2 ? "block" : "hidden"}>
                                <div class="flex flex-col items-center h-full">
                                    <textarea
                                        class="w-9/10 md:w-2/3 h-full p-4 border border-gray-300 rounded"
                                        placeholder="Enter text"
                                    ></textarea>
                                    <div class="mt-4">
                                        <button
                                            class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Upload Text
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class={openTab === 3 ? "block" : "hidden"}>
                                <div class="flex flex-col items-center h-full">
                                    <textarea
                                        class="w-9/10 md:w-2/3 h-full p-4 border border-gray-300 rounded"
                                        placeholder="Enter HTML code"
                                    ></textarea>
                                    <div class="mt-4">
                                        <button
                                            class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Upload Code
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
