import {getAuthToken} from "./authService";

export async function getWalletId() {
    try {
        const response = await fetch('https://api.neucron.io/wallet/list', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': getAuthToken(),
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data.data.walletList[0];
        } else {
            console.error('Error fetching wallet ID:', await response.text());
        }
    } catch (error) {
        console.error('An error occurred while fetching wallet ID:', error);
    }
}