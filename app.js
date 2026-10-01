// Task Manager App
// v1.1.0 – adds task priority levels and task deletion

const tasks = [];

function addTask(title, priority = 'medium') {
  const allowed = ['low', 'medium', 'high'];
  if (!allowed.includes(priority)) priority = 'medium';
  const task = { id: tasks.length + 1, title, priority, done: false };
  tasks.push(task);
  return task;
}

function listTasks() {
  const order = { high: 0, medium: 1, low: 2 };
  return [...tasks].sort((a, b) => order[a.priority] - order[b.priority]);
}

function completeTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) task.done = true;
  return task;
}

// NEW in v1.1.0
function deleteTask(id) {
  const index = tasks.findIndex(t => t.id === id);
  return index !== -1 ? tasks.splice(index, 1)[0] : null;
}

// Demo
addTask('Write README', 'low');
addTask('Prepare release notes', 'high');
addTask('Fix login bug');
completeTask(1);
deleteTask(3);
console.table(listTasks());

module.exports = { addTask, listTasks, completeTask, deleteTask };
