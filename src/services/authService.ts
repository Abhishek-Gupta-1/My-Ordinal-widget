import { isAuthenticated } from './authStore';

export function setAuthToken(token) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem("authToken", token);
    isAuthenticated.set(true);
  }
}

export function clearAuthToken() {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem("authToken");
    isAuthenticated.set(false);
  }
}

export function getAuthToken() {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem("authToken");
  }
  return null;
}
