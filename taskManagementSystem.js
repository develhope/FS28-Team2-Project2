// Initialize an empty array named tasks to store task names.
const taskNames = [];

// Function to Add a Task:
// Define a function named addTask that takes two parameters:
// task: A string representing the task to add.
// callback: A callback function to handle the result.

async function addTask(task, callback) {
  // Inside the addTask function, use setTimeout to simulate an asynchronous operation.
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!task || typeof task !== 'string') {
          // If the task parameter is empty or not a string, invoke the callback function
          // with an Error object containing the message "Task must be a non-empty string".
          const error = new Error('Task must be a non-empty string');
          reject(error);
        } else {
          // Otherwise, add the task to the tasks array and invoke the callback function
          // with null as the first parameter and the message "Task added successfully" as the second parameter.
          taskNames.push(task);
          resolve('Task added successfully');
        }
      }, 2000);
    });
    callback(null, result);
  } catch (error) {
    callback(error, null);
  }
}

// Function to Complete a Task:
// Define a function named completeTask that takes two parameters:

async function completeTask(index, callback) {
  // Inside the completeTask function, use setTimeout to simulate an asynchronous operation.
  setTimeout(() => {
    if (index < 0 || index >= taskNames.length) {
      // If the index parameter is out of range (less than 0 or greater than or equal to the length of the tasks array),
      // invoke the callback function with an Error object containing the message "Invalid task index".
      const error = new Error('Invalid task index.');
      callback(error);
    } else {
      // Otherwise, remove the task at the specified index from the tasks array and invoke the callback function with null
      // as the first parameter and the message "Task completed successfully" as the second parameter.
      const completedTask = taskNames[index];
      tasks.splice(index, 1);
      callback(null, `Task: ${completedTask} completed successfully.`);
    }
  }, 2000);
}

// Error Handling:
// Implement error handling in the example usage to handle errors returned by the addTask and completeTask functions.

function handleResult(error, result) {
  if (error) {
    console.error('Errore:', error.message);
  } else {
    console.log('Risultato:', result);
  }
}

// Function to List Tasks:
// Define a function named listTasks that does not take any parameters.

function listTasks() {
  // Inside the listTasks function, log each task in the tasks array to the console, along with its corresponding index.
  taskNames.forEach((task, index) => {
    console.log(`task ${index + 1}: ${task}`);
  });
}

listTasks();

addTask("Fare la spesa", handleResult)