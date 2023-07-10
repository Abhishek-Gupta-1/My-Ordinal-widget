<script>
    let transactions = [
        {
            id: '1',
            inscribedNo: 'ABC123',
            ordinalsId: 'ORD456',
            timestamp: '2023-07-09 14:30:00',
            // Add more properties as needed
        },
        {
            id: '2',
            inscribedNo: 'DEF456',
            ordinalsId: 'ORD789',
            timestamp: '2023-07-08 12:45:00',
            // Add more properties as needed
        },
        // Add more transactions from your JSON file
    ];
</script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<div class="min-h-screen bg-gray-100">
    <div class="container mx-auto px-4 py-8">
        <div class="max-w-md mx-auto bg-white border border-gray-200 shadow-md rounded-lg p-8 mb-8">
            <div class="flex items-center">
                <i class="fas fa-user-circle text-4xl text-gray-500 mr-4"></i>
                <div>
                    <h1 class="text-2xl font-semibold">John Doe</h1>
                    <p class="text-gray-600">john.doe@example.com</p>
                </div>
            </div>
            <div class="mt-6">
                <h2 class="text-lg font-semibold">Wallet Address</h2>
                <p class="text-gray-600">0x123456789abcdef</p>
            </div>
            <div class="mt-6">
                <h2 class="text-lg font-semibold">Balance</h2>
                <p class="text-gray-600">$500.00</p>
            </div>
            <button class="mt-8 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                Add Cash
            </button>
        </div>

        <!-- <div class="bg-white border border-gray-200 shadow-md rounded-lg p-4">
            <h2 class="text-xl font-semibold mb-4">Last 5 Transactions</h2>
            <!-- <ul>
                <li class="flex items-center mb-2">
                    <div class="bg-green-500 w-4 h-4 rounded-full mr-2"></div>
                    <p class="text-gray-600">Transaction 1</p>
                </li>
                <li class="flex items-center mb-2">
                    <div class="bg-green-500 w-4 h-4 rounded-full mr-2"></div>
                    <p class="text-gray-600">Transaction 2</p>
                </li>
                <li class="flex items-center mb-2">
                    <div class="bg-red-500 w-4 h-4 rounded-full mr-2"></div>
                    <p class="text-gray-600">Transaction 3</p>
                </li>
                <li class="flex items-center mb-2">
                    <div class="bg-yellow-500 w-4 h-4 rounded-full mr-2"></div>
                    <p class="text-gray-600">Transaction 4</p>
                </li>
                <li class="flex items-center mb-2">
                    <div class="bg-blue-500 w-4 h-4 rounded-full mr-2"></div>
                    <p class="text-gray-600">Transaction 5</p>
                </li>
            </ul> --
                    <!-- <TransactionList /> --

                

        </div> -->

        <div>
            <h2 class="text-xl font-semibold mb-4">Last 5 Transactions</h2>
            {#each transactions as transaction (transaction.id)}
            <div class="bg-white border border-gray-200 shadow-md rounded-lg p-4 mb-4">
                <h3 class="text-lg font-semibold">Transaction ID: {transaction.id}</h3>
                <p class="text-gray-600">Inscribed No: {transaction.inscribedNo}</p>
                <p class="text-gray-600">Ordinals ID: {transaction.ordinalsId}</p>
                
                <!-- Add more details as needed -->
            </div>
            {/each}
        </div>
    </div>
</div>
