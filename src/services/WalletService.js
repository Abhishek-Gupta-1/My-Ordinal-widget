import {getAuthToken} from "./authService";
const baseURL = 'https://dev.neucron.io/v1';
export async function getWalletId() {
    try {
        const response = await fetch(baseURL + '/wallet/list', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': getAuthToken(),
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data.data.details.Wallets[0];
        } else {
            console.error('Error fetching wallet ID:', await response.text());
        }
    } catch (error) {
        console.error('An error occurred while fetching wallet ID:', error);
    }
}
