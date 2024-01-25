const TodoModel = require("../model/todo.model");
exports.createTodo = (req, res, next) => {
  const createModel = TodoModel.create(req.body);
  res.status(201).json(createModel);
};
