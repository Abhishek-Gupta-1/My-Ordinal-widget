<script>

    let address = '';
    let isFundsAdded = false;
    let transactionId = '';
    let isTransactionProcessing = false;

    async function addFundsToWallet() {
        isTransactionProcessing = true;
        const url = 'https://dev.neucron.io/tx/send?walletID=ac067de7-6581-4dc5-80a0-dd4d0ac8b211';
        const headers = {
            'accept': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTUyOTEzNzgsImlhdCI6MTY5MjY5OTM3OCwiaXNzIjoiaHR0cHM6Ly9uZXVjcm9uLmlvIiwianRpIjoiOGRkN2EwNzktYWY5Ni00MzIxLWFiNzItN2MxN2MwOTJkYmMyIiwibmJmIjoxNjkyNjk5Mzc4LCJzdWIiOiJjZDlkZTY1ZC0wZTE1LTQxYTYtOGUzYi01MzY0YmYwOWQ3ZjQiLCJ1c2VyX2lkIjoiY2Q5ZGU2NWQtMGUxNS00MWE2LThlM2ItNTM2NGJmMDlkN2Y0In0.idRmdxYqwZ0KhWGL-NxVO83PxuhDbsbl_oXQpJr0rLk', // Replace with your actual token
            'Content-Type': 'application/json'
        };

        const requestBody = {
            "change_Address": "15P3Qve5pd4GdLXptJ2PBg2CScoVQhsrxK",
            "output_Utxo": [
                {
                    "address": address,
                    "amount": 1
                }
            ]
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(requestBody)
            });

            if (response.ok) {
                // Handle success
                const responseData = await response.json();
                isFundsAdded = true;
                transactionId = responseData.data.txid;
            } else {
                // Handle error
                console.error('Failed to add funds');
            }
        } catch (error) {
            console.error('Network error:', error);
        } finally {
            isTransactionProcessing = false; // Stop processing
        }
    }

    function copyToClipboard() {
        const textarea = document.createElement('textarea');
        textarea.value = transactionId;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    function verifyTransaction() {
        if (transactionId) {
            window.open(`https://whatsonchain.com/tx/${transactionId}`, '_blank');
        }
    }

</script>

<main class="container">
    <h1 class="heading">Add Funds to Your Wallet</h1>

    <div class="form">
        <label for="address" class="label">Your Wallet Address:</label>
        <input type="text" id="address" class="input" bind:value={address} />

        <button on:click={addFundsToWallet} class="button">Add Funds</button>

        {#if isFundsAdded}
            <p class="success-message">Funds added successfully!</p>
            <div class="transaction-id">
                <button on:click={verifyTransaction} class="verify-button">Verify Transaction</button>
            </div>
        {/if}

        {#if isTransactionProcessing}
            <p class="processing-message">Processing transaction...</p>
        {/if}

    </div>
</main>

<style>
    .container {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        text-align: center;
    }

    .heading {
        font-size: 24px;
        margin-bottom: 20px;
    }

    .form {
        background-color: #f5f5f5;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }

    .label {
        display: block;
        font-weight: bold;
        margin-bottom: 8px;
    }

    .input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 16px;
    }

    .button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .button:hover {
        background-color: #0056b3;
    }

    .success-message {
        color: #00a000;
        font-weight: bold;
        margin-top: 10px;
    }

    .verify-button {
        background-color: #f0f0f0;
        border: none;
        color: #007bff;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
    }

    .verify-button:hover {
        background-color: #e0e0e0;
        color: #0056b3;
    }

    .processing-message {
        font-style: italic;
        color: #777;
        margin-top: 10px;
    }

</style>