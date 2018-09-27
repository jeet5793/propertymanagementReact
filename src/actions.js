export function setLoading(isLoading) {
  return {
    type: 'SET_LOADING',
    action: {
      isLoading,
    },
  };
}

export function setUser(userData, userProfile) {
  return {
    type: 'SET_USER',
    userData,
    userProfile
  };
}
