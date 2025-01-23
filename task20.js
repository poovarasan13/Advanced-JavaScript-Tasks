function stepOne() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Step One Complete");
        resolve();
      }, 2000);
    });
  }
  
  function stepTwo() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Step Two Complete");
        resolve();
      }, 1500);
    });
  }
  
  function stepThree() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Step Three Complete");
        resolve();
      }, 1000);
    });
  }
  
  stepOne()
    .then(stepTwo)
    .then(stepThree)
    .then(() => console.log("All steps completed."));
  