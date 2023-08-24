// routeGuard.js
import { isAuthenticated } from './authStore.js';

export async function requireAuth() {
    const authenticated = await isAuthenticated;
    if (!authenticated) {
        return {
            status: 302,
            redirect: '/auth/login'
        };
    }
}
