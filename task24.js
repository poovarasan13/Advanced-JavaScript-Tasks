async function fetchMultipleResources() {
    try {
      const [users, posts, comments] = await Promise.all([
        fetch('/users').then(res => res.json()),
        fetch('/posts').then(res => res.json()),
        fetch('/comments').then(res => res.json())
      ]);
      return { users, posts, comments };
    } catch (error) {
      console.error('Failed to fetch resources:', error);
    }
  }
  