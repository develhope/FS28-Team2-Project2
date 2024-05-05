// Initialize an empty array named tasks to store task names.
const taskNames = [];

// Function to Add a Task:
// Define a function named addTask that takes two parameters:

async function addTask(task, resultHandler) {
// Inside the addTask function, use setTimeout to simulate an asynchronous operation.
  setTimeout(() => {
    if (!task || typeof task !== 'string') {
      // If the task parameter is empty or not a string, invoke the callback function
      // with an Error object containing the message "Task must be a non-empty string".
      const error = new Error('Task must be a non-empty string')
      resultHandler(error);
    } else {
      // Otherwise, add the task to the tasks array and invoke the callback function
      // with null as the first parameter and the message "Task added successfully" as the second parameter.
      taskNames.push(task);
      resultHandler(null, "Task added successfully");
    }
  }, 2000);
}
