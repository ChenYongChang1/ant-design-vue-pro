export function getCurrentAuth() {
  return ['admin'];
}

export function checkAuth(auth) {
  const currentAuth = getCurrentAuth();
  return auth.some(item => currentAuth.includes(item));
}
