import app from './firebase';
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const db = getFirestore(app);

export async function storeWalletInfo(userId, walletId, walletAddress) {
    try {
        const walletDocRef = doc(db, "userWallets", userId);
        await setDoc(walletDocRef, {
            user_id: userId,
            wallet_id: walletId,
            wallet_address: walletAddress
        });
        console.log("Wallet info stored successfully.");
    } catch (error) {
        console.error("Error storing wallet info:", error);
    }
}

export async function getWalletInfo(userId) {
    try {
        const walletDocRef = doc(db, "userWallets", userId);
        const walletDocSnap = await getDoc(walletDocRef);

        if (walletDocSnap.exists()) {
            return walletDocSnap.data();
        } else {
            console.log("No wallet info found for the user.");
            return null;
        }
    } catch (error) {
        console.error("Error getting wallet info:", error);
        return null;
    }
}
