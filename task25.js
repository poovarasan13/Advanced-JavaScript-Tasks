async function coordinateAsyncTasks() {
    const task1 = asyncTask1();
    const task2 = asyncTask2();
    const task3 = asyncTask3();
  
    const [result1, result2, result3] = await Promise.all([task1, task2, task3]);
  
    return processResults(result1, result2, result3);
  }
  