const TASKS = require("./data");
const resolvers = {
  Query: {
    fetchTask: (parent, args, context, info) => {
      return TASKS[args.input.id];
    },
    fetchTasks: (parent, args, context, info) => {
      return TASKS;
    }
  },

  Mutation: {
    addTask: (parent, args, context, info) => {
      const {
        input: { name, completed }
      } = args;
      const nextId = TASKS[TASKS.length - 1].id + 1;
      const newTask = {
        task: name,
        completed: completed,
        id: nextId
      };
      TASKS.push(newTask);
      return newTask;
    },
    updateTask: (parent, args, context, info) => {
      const {
        input: { id, name, completed }
      } = args;
      const updateTask = TASKS.filter(task => {
        return task.id == id;
      });
      if (name) {
        updateTask[0].task = task;
      }
      if (completed) {
        updateTask[0].completed = completed;
      }
      TASKS.push(updateTask);
      return updateTask[0];
    }
  }
};

module.exports = resolvers