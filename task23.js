
async function riskyAsyncOperation() {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        resolve({ data: "Success", status: 200 });
      } else {
        reject(new Error("Random operation failed"));
      }
    });
  }
  function processResult(result) {
    return {
      processedData: result.data.toUpperCase(),
      timestamp: new Date().toISOString()
    };
  }
  async function fetchAndProcessData() {
    try {
      const result = await riskyAsyncOperation();
      return processResult(result);
    } catch (error) {
      console.error('Operation failed:', error);
    
      throw error;
    }
  }
  async function main() {
    try {
      const processedData = await fetchAndProcessData();
      console.log('Processed Data:', processedData);
    } catch (error) {
      console.error('Final error handling:', error.message);
    }
  }

  main();
  