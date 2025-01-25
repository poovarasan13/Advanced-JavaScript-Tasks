function processUserData(userData) {
    return {
      id: userData.id,
      name: userData.name,
      email: userData.email,
    
    };
  }
  async function fetchUserData(userId) {
    try {
      const response = await fetch(`https://dummyjson.com/users/${userId}`);
      const userData = await response.json();
      return processUserData(userData);
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  }
  fetchUserData(1)
    .then(processedData => console.log(processedData))
    .catch(error => console.error(error));
  